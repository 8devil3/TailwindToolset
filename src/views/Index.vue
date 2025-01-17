<template>
    <div class="flex flex-col items-center justify-center p-4 grow">
        <div class="flex flex-col items-center max-w-xl gap-4 p-6 text-center bg-gray-100 border-2 border-orange-500 dark:bg-gray-800 rounded-xl md:gap-8">            
            <h1>Welcome to Tailwind Toolset!</h1>
            
            <h2>A very simple playgroud to experiment, learn, try and play with Tailwind CSS <span class="text-orange-500 font-title">Flex</span> & <span class="text-orange-500 font-title">Grid</span> classes.</h2>
            <p><span class="font-bold">How to:</span> choose between Flex and Grid, select the properties on the left column and when you're done copy the classes below!<br>Have fun &#128526;</p>
            <p>Best viewed in desktop.</p>
    
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <RouterLink to="/flex" title="Go to Flex" class="px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    Go to Flex
                </RouterLink>
    
                <RouterLink to="/grid" title="Go to Grid" class="px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    Go to Grid
                </RouterLink>

                <RouterLink to="/about" title="About this project" class="px-3 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">
                    About this project
                </RouterLink>
            </div>
        </div>


    </div>
</template>

<script setup>

</script>
