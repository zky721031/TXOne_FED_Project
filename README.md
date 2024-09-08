React - Buildings Project -

1、use vite to build React
=> https://vitejs.dev/guide/
=> yarn create vite

2、setting SASS
=> yarn add sass -D

3、setting Axios
=> yarn add axios

4、setting Proxy
=> yarn add http-proxy-middleware
=> add file src/setupProxy.js

5、token persistence
=> add file src/utils/token.js

6、setting Router v6
=> yarn add react-router-dom
=> BrowserRouter、Routes、Route、Navigate、useNavigate、OutLet、Link、NavLink、useSearchParams、useParams

7、useRoutes hook

8、route validation
=> add auth folder

9、setting useContext & useReducer to Redux
=> add store folder

10、React.lazy
=> 1、const Test = React.lazy(() => import('./pages/AppReduxTest'));
=> 2、add
<React.Suspense fallback={<div>Loading...</div>}>
<xxx />
</React.Suspense>
=> 3、封裝 lazyLoad 方法 , folder lazyLoad

11、env settings
=> https://www.youtube.com/watch?v=jqCjflIGH1o

12、setting i18n
=>

13、setting ahooks
=> https://ahooks.js.org/zh-CN/hooks/use-request/basic/

14、setting ui framework

15、Git Specification
add branch 命名方式
=> [sprint 開始日]-[sprint 結束日]-[開發者名字]-[自由填寫]

commit
=> feature-[page|comp]-[fn]
=> fix-[page|comp]-[fn]
=> refactor-[page|comp]-[fn]
=> revert-[version]
=> test-[page|comp]-[fn]
