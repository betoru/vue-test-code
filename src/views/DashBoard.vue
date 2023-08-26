<template>
    <div class="hello">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>{{ msg }}</h1>
        <h3>공식 문서를 보고싶다면? check out the 👇👇👇</h3>
        <p>
            <ul>
                <li><a href="https://devdocs.io/vue~3/" 
                       target="_blank" 
                       rel="noopener">vue3 english version</a></li>
                <li><a href="https://v3-docs.vuejs-korea.org/" 
                       target="_blank" 
                       rel="noopener">vue3 korean version</a></li>
                <li><a href="https://cli.vuejs.org" 
                       target="_blank" 
                       rel="noopener">vue-cli documentation</a></li>
                <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" 
                       target="_blank"
                       rel="noopener">eslint</a></li>
            </ul>
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" 
                   target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" 
                   target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
            </li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3>Watch Test</h3>
        <ul>
            <li><a href="http://localhost:9999/watch" target="_blank" rel="noopener">watch-test</a></li>
        </ul>
        <h3>Web Cam</h3>
        <ul>
            <li><a href="http://localhost:9999/web-cam" target="_blank" rel="noopener">web-cam</a></li>
        </ul>
        <h3>Test</h3>
        <ul class="_entry-list">
            <li><a href="/vue~3/guide/introduction">1. Introduction  (Getting Started)</a></li><br>
            <li><a href="/vue~3/guide/quick-start">2. Quick Start  (Getting Started)</a></li><br>
            <li><a href="/vue~3/guide/essentials/application">3. Creating a Vue Application  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/template-syntax">4. Template Syntax  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/reactivity-fundamentals">5. Reactivity Fundamentals  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/computed">6. Computed Properties  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/class-and-style">7. Class and Style Bindings  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/conditional">8. Conditional Rendering  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/list">9. List Rendering  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/event-handling">10. Event Handling  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/forms">11. Form Input Bindings  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/lifecycle">12. Lifecycle Hooks  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/watchers">13. Watchers  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/template-refs">14. Template Refs  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/essentials/component-basics">15. Components Basics  (Essentials)</a></li><br>
            <li><a href="/vue~3/guide/components/registration">16. Component Registration  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/props">17. Props  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/events">18. Component Events  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/v-model">19. Component v-model  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/attrs">20. Fallthrough Attributes  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/slots">21. Slots  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/provide-inject">22. Provide / Inject  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/components/async">23. Async Components  (Components In-Depth)</a></li><br>
            <li><a href="/vue~3/guide/reusability/composables">24. Composables  (Reusability)</a></li><br>
            <li><a href="/vue~3/guide/reusability/custom-directives">25. Custom Directives  (Reusability)</a></li><br>
            <li><a href="/vue~3/guide/reusability/plugins">26. Plugins  (Reusability)</a></li><br>
            <li><a href="/vue~3/guide/built-ins/transition">27. Transition  (Built-in Components)</a></li><br>
            <li><a href="/vue~3/guide/built-ins/transition-group">28. TransitionGroup  (Built-in Components)</a></li><br>
            <li><a href="/vue~3/guide/built-ins/keep-alive">29. KeepAlive  (Built-in Components)</a></li><br>
            <li><a href="/vue~3/guide/built-ins/teleport">30. Teleport  (Built-in Components)</a></li><br>
            <li><a href="/vue~3/guide/built-ins/suspense">31. Suspense  (Built-in Components)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/sfc">32. Single-File Components  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/tooling">33. Tooling  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/routing">34. Routing  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/state-management">35. State Management  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/testing">36. Testing  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/scaling-up/ssr">37. Server-Side Rendering (SSR)  (Scaling Up)</a></li><br>
            <li><a href="/vue~3/guide/best-practices/production-deployment">38. Production Deployment  (Best Practices)</a></li><br>
            <li><a href="/vue~3/guide/best-practices/performance">39. Performance  (Best Practices)</a></li><br>
            <li><a href="/vue~3/guide/best-practices/accessibility">40. Accessibility  (Best Practices)</a></li><br>
            <li><a href="/vue~3/guide/best-practices/security">41. Security  (Best Practices)</a></li><br>
            <li><a href="/vue~3/guide/typescript/overview">42. Using Vue with TypeScript  (TypeScript)</a></li><br>
            <li><a href="/vue~3/guide/typescript/composition-api">43. TypeScript with Composition API  (TypeScript)</a></li><br>
            <li><a href="/vue~3/guide/typescript/options-api">44. TypeScript with Options API  (TypeScript)</a></li><br>
            <li><a href="/vue~3/guide/extras/ways-of-using-vue">45. Ways of Using Vue  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/composition-api-faq">46. Composition API FAQ  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/reactivity-in-depth">47. Reactivity in Depth  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/rendering-mechanism">48. Rendering Mechanism  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/render-function">49. Render Functions &amp; JSX  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/web-components">50. Vue and Web Components  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/animation">51. Animation Techniques  (Extra Topics)</a></li><br>
            <li><a href="/vue~3/guide/extras/reactivity-transform">Reactivity Transform</a></li><br>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}</style>
  