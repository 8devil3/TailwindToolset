<template>
    <div class="flex flex-col items-center justify-center p-4 grow">
        <div class="flex flex-col items-center max-w-xl gap-4 p-6 text-center bg-gray-100 border-2 border-orange-500 dark:bg-gray-800 rounded-xl">
            <h1>About</h1>
            <h2>Who is behind this project??</h2>

            <div>
                <p>Hi! I'm Aldo, a freelance web developer based in Italy that love <em>graphics & coding</em>.</p>
                <p>During my past projects I was looking for a rapid online tool to set a Flex or Grid layout with Tailwind CSS.</p>
                <p>With my big surprise I didn't find it and instead I found the classics pure CSS tools. So I decided to build it by myself and publish it, maybe can be useful for someone else too.<br>This entire build is in Vue.js + Tailwind CSS.</p>
                <p>This is a work in progress and for now is very basic but maybe in the future, if I'll see some interest, I can expand it with new classes and functions.</p>
                <p>... and yesss, I love orange color!!</p>
                <p><a href="https://www.orangeweb.biz/" target="_blank" class="text-orange-500 underline transition-colors hover:text-orange-400">My portfolio</a></p>
            </div>

            <div class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
                <RouterLink to="/flex" title="Go to Flex" class="px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    Go to Flex
                </RouterLink>
    
                <RouterLink to="/grid" title="Go to Grid" class="px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    Go to Grid
                </RouterLink>

                <RouterLink to="/" title="Return to Home" class="col-span-2 px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    Return to Home
                </RouterLink>
            </div>
        </div>
    </div>
</template>

