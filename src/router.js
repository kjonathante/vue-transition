import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ './modules/Transition/Pages/Transition.vue'
        ),
      children: [
        {
          path: 'sample1',
          name: 'sample1',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/Sample1.vue'
            )
        },
        {
          path: 'CSSTransitions',
          name: 'CSSTransitions',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/CSSTransitions.vue'
            )
        },
        {
          path: 'CSSAnimations',
          name: 'CSSAnimations',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/CSSAnimations.vue'
            )
        },
        {
          path: 'CustomTransitionClasses',
          name: 'CustomTransitionClasses',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/CustomTransitionClasses.vue'
            )
        },
        {
          path: 'JavaScriptHooks',
          name: 'JavaScriptHooks',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/JavaScriptHooks.vue'
            )
        },
        {
          path: 'ListEnteringLeavingTransitions',
          name: 'ListEnteringLeavingTransitions',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/ListEnteringLeavingTransitions.vue'
            )
        },
        {
          path: 'ListMoveTransitions',
          name: 'ListMoveTransitions',
          component: () =>
            import(
              /* webpackChunkName: "about" */ './modules/Transition/Pages/ListMoveTransitions.vue'
            )
        }
      ]
    }
  ]
})
