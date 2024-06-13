document.addEventListener('astro:page-load', () => {
  // PC导航栏显示菜单按钮点击事件
  document.querySelector('#show-nav').addEventListener('click', () => {
    const showNav = localStorage.getItem("showNav");
    if (document.querySelector('.navbar').classList.contains('show')) {
      localStorage.setItem("showNav", 'hide');
    } else {
      localStorage.setItem("showNav", 'show');
    }
    document.querySelector('#show-nav').classList.toggle('hide');
    document.querySelector('.navbar').classList.toggle('show');
  });
  
  // 新页面保持导航菜单状态
  const showNav = localStorage.getItem("showNav");
  if (showNav == 'show') {
    document.querySelector('#show-nav').classList.add('hide');
    document.querySelector('.navbar').classList.add('show');
  }

  // 导航栏滚动事件
  let currentTopCoordinate = window.scrollY;
  window.addEventListener('scroll', () => {
    let scrollTopCoordinate = window.scrollY;
    let siteHeaderElement = document.querySelector('.site-header');
    if (scrollTopCoordinate >= siteHeaderElement.clientHeight) {
      siteHeaderElement.classList.add('yya');
    } else if (scrollTopCoordinate == 0) {
      siteHeaderElement.classList.remove('yya');
    }
    if (scrollTopCoordinate < currentTopCoordinate) {
      siteHeaderElement.classList.add('sabit');
    } else {
      siteHeaderElement.classList.remove('sabit');
    }
    currentTopCoordinate = scrollTopCoordinate;
  });

  // 手机端侧边栏点击事件
  document.querySelector(".site-nav-toggle").addEventListener('click', () => {
    document.querySelector(".site-header").classList.toggle('open');
  });
  document.querySelector("#close-menu").addEventListener('click', () => {
    document.querySelector(".site-header").classList.remove('open');
  });

  // 回到顶部和切换皮肤滚动事件
  const headerHeight = document.querySelector(".site-header").offsetHeight;
  const backToTopElement = document.querySelector(".cd-top");
  const mobileBackToTopElement = document.querySelector(".m-cd-top");
  const changeSkinElement = document.querySelector(".change-skin-gear");
  const mobileChangeSkinElement = document.querySelector(".mobile-change-skin");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY > headerHeight) {
      backToTopElement.classList.add("cd-is-visible");
      if (backToTopElement.offsetHeight > window.innerHeight) {
        backToTopElement.style.top = `${window.innerHeight - backToTopElement.offsetHeight - headerHeight}px`
      } else {
        backToTopElement.style.top = "-50px"
      }
      changeSkinElement.style.bottom = "0";
    } else {
      backToTopElement.classList.remove("cd-is-visible");
      backToTopElement.style.top = "-900px"
      changeSkinElement.style.bottom = "-100px";
    }
    if (scrollY > 0) {
      mobileBackToTopElement.classList.add("cd-is-visible");
      mobileChangeSkinElement.classList.add("cd-is-visible");
    } else {
      mobileBackToTopElement.classList.remove("cd-is-visible");
      mobileChangeSkinElement.classList.remove("cd-is-visible");
    }
  });

  // 回到顶部点击事件
  document.querySelectorAll(".cd-top, .m-cd-top").forEach((backToTopElement) => {
    backToTopElement.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.scrollY > 0) {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      }
    });
  });

  // 顶端进度条事件
  window.addEventListener("scroll", () => {
    let scrollPercentage = ((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0);
    document.querySelector('#bar').style.width = scrollPercentage + '%';
  });

  // 搜索点击事件
  document.querySelector('.searchbox').addEventListener('click', () => {
    document.querySelector('.js-search').classList.add('is-visible');
  });

  // 关闭搜索点击事件
  document.querySelector('.search_close').addEventListener('click', () => {
    document.querySelector('.js-search').classList.remove('is-visible');
  });

  // 首屏向下箭头点击事件
  const arrowDownElement = document.querySelector(".headertop-down");
  if (arrowDownElement) {
    arrowDownElement.addEventListener('click', () => {
      const contentOffset = document.querySelector(".site-content").getBoundingClientRect().top || 0;
        window.scrollTo({
          top: contentOffset,
          behavior: "smooth",
        });
    });
  }

  // 下一页事件
  const paginationElement = document.querySelector("#pagination");
  if (paginationElement) {
    const nextPageLinkElement = paginationElement.querySelector("a");
    if (nextPageLinkElement) {
      const url = nextPageLinkElement.href;
      nextPageLinkElement.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = event.target;
        targetElement.classList.add("loading");
        targetElement.textContent = "";
        fetch(url, {
          method: "GET",
        })
          .then((response) => response.text())
          .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "text/html");
            const postListNewElements = doc.querySelectorAll(".post");
            const postListElement = document.getElementById("main");
            postListNewElements.forEach((element) => {
              postListElement.appendChild(element);
            });
            const paginationNewElement = doc.querySelector("#pagination");
            paginationElement.innerHTML = paginationNewElement.innerHTML;
          })
          .catch(error => {
            console.log(error)
          });
      });
    }
  }

  // 标题目录滑动事件
  let headingTocElements = document.querySelectorAll(".toc-list-item");
  if (headingTocElements && headingTocElements.length > 0) {
    let headingElements = [];
    let headingTocElementsMap = new Map();
    for (let headingTocElement of headingTocElements) {
      let tocLinkElement =  headingTocElement.querySelector(".toc-link");
      let headingId = tocLinkElement.getAttribute("href");
      let headingElement = document.querySelector(headingId);
      headingElements.push(headingElement);
      headingTocElementsMap.set(headingElement, headingTocElement);
    }
    //console.log(headingElements);
    let activedHeadingTocElement = undefined;
    let headerHeight = document.querySelector('.site-header').offsetHeight;
    let postHeaderHeight = document.querySelector('.post-header').offsetHeight;
    let contentTop = headerHeight + postHeaderHeight + 20;
    window.addEventListener("scroll", () => {
      //console.log('--------------------------')
      let scrollTopCoordinate = window.scrollY;
      if (headingElements.length > 0) {
        let preHeadingElement = undefined;
        let outViewHeadingElements = [];
        for (let headingElement of headingElements) {
          let headingOffsetTop = headingElement.offsetTop;
          //console.log(headingElement.getAttribute('id') + ' ' + headingOffsetTop)
          if (scrollTopCoordinate > (contentTop + headingOffsetTop)) {
            outViewHeadingElements.push(headingElement);
          }
          preHeadingElement = headingElement;
        }
        let curActiveHeadingTocElement = undefined;
        if (outViewHeadingElements.length == headingElements.length) {
          let lastHeadingElement = outViewHeadingElements[outViewHeadingElements.length - 1];
          curActiveHeadingTocElement = headingTocElementsMap.get(lastHeadingElement);
        } else {
          for (let headingElement of headingElements) {
            if (outViewHeadingElements.indexOf(headingElement) == -1) {
              curActiveHeadingTocElement = headingTocElementsMap.get(headingElement);
              break;
            }
          }
        }
        if (curActiveHeadingTocElement !== activedHeadingTocElement) {
          let collapsedHeadingTocElements = [];
          if (activedHeadingTocElement) {
            let parentNode = activedHeadingTocElement.parentNode;
            while (true) {
              if (parentNode.classList.contains('toc-list') && 
                  parentNode.classList.contains('is-collapsible')) {
                collapsedHeadingTocElements.push(parentNode)
              } else if (parentNode.classList.contains('toc')) {
                break;
              }
              parentNode = parentNode.parentNode;
            }
          }
          let expandedHeadingTocElements = [];
          let parentNode = curActiveHeadingTocElement.parentNode;
          while (true) {
            if (parentNode.classList.contains('toc-list') && 
                parentNode.classList.contains('is-collapsible')) {
              expandedHeadingTocElements.push(parentNode)
            } else if (parentNode.classList.contains('toc')) {
              break;
            }
            parentNode = parentNode.parentNode;
          }
          for (let headingTocElement of collapsedHeadingTocElements) {
            if (expandedHeadingTocElements.indexOf(headingTocElement) != -1) {
              break;
            }
            headingTocElement.classList.add('is-collapsed');
          }
          for (let headingTocElement of expandedHeadingTocElements) {
            if (!headingTocElement.classList.contains('is-collapsed')) {
              break;
            }
            headingTocElement.classList.remove('is-collapsed');
          }
          if (activedHeadingTocElement) {
            activedHeadingTocElement.classList.remove('is-active-li');
            let activeTocLinkElement =  activedHeadingTocElement.querySelector(".toc-link");
            activeTocLinkElement.classList.remove('is-active-link');
          }
          curActiveHeadingTocElement.classList.add('is-active-li');
          let curActiveTocLinkElement =  curActiveHeadingTocElement.querySelector(".toc-link");
          curActiveTocLinkElement.classList.add('is-active-link');
          activedHeadingTocElement = curActiveHeadingTocElement;
        }
      }
    });
  }
});
