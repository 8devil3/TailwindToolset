<template>
    <div class="flex h-[calc(100vh-64px)] overflow-hidden grow relative">
        <!-- left column -->
        <div class="absolute z-10 h-full p-4 space-y-8 overflow-y-auto bg-gray-100 border-r border-orange-500 shadow-lg dark:border-orange-500 lg:static w-72 shrink-0 whitespace-nowrap dark:bg-gray-800 lg:block" :class="isOpenAsideMenu ? 'block' : 'hidden'">
            <div class="flex items-center justify-between gap-4">
                <h2 class="mb-0">Properties</h2>
                <button @click.native="reset()" title="Reset all properties" class="px-3 py-1.5 text-sm border border-red-500 rounded-md bg-red-500/20 hover:bg-red-500/30 transition-colors">
                    Reset
                </button>
            </div>
    
            <div class="space-y-2">
                <h3>Grid items</h3>
                <div class="flex items-center gap-2">
                    <button @click.native="addItem()" title="Add grid item" class="px-3 py-1.5 text-sm bg-orange-500 hover:bg-orange-400 rounded-md text-white transition-colors">
                        Add
                    </button>
        
                    <button @click.native="removeItem()" title="Remove grid item" class="px-3 py-1.5 text-sm bg-orange-500 hover:bg-orange-400 rounded-md text-white transition-colors">
                        Remove
                    </button>
                </div>
            </div>
    
            <div class="space-y-2">
                <h3>Grid properties</h3>

                <details v-for="property, index in gridProperties" @toggle="toggleAccordion($event.target, index)" open ref="accordionArr">
                    <summary class="flex items-center justify-between w-full gap-6 px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-300 rounded-lg cursor-pointer dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus-visible:ring-0">
                        {{ property.name }}
                        <span class="p-0 m-0 transition-transform transform" :class="isOpenAccordion[index] ? 'rotate-180' : ''">
                            <i class="text-xs text-gray-600 dark:text-white fa-solid fa-chevron-up" />
                        </span>
                    </summary>

                    <div class="px-4 py-2">
                        <label v-for="grid, id in property.values" :for="'grid-' + property.family + '-' + id" class="flex items-center gap-2 py-1 text-sm font-medium cursor-pointer" :class="data.classes.some((g) => g.name === grid.name && g.family === property.family) ? 'text-orange-500' : 'text-gray-800 dark:text-gray-300'">
                            <input
                                type="radio"
                                :id="'grid-' + property.family + '-' + id"
                                :name="'grid-' + property.family"
                                @change="addClass(grid.name, grid.value, property.family)"
                                :checked="data.classes.some((g) => g.name === grid.name && g.family === property.family)"
                                class="w-4 h-4 text-orange-500 cursor-pointer focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:border-0"
                            />
                            {{ grid.name }}
                        </label>
                    </div>
                </details>
            </div>
        </div>

        <button type="button" @click="isOpenAsideMenu = !isOpenAsideMenu" class="absolute z-20 p-2 text-white -translate-y-1/2 bg-orange-500 shadow-lg lg:hidden top-1/2 rounded-e-full dark:bg-orange-500 dark:text-white" :class="isOpenAsideMenu ? 'left-72' : 'left-0'">
            <i class="transition-transform transform fa-solid fa-chevron-right" :class="{'rotate-180' : isOpenAsideMenu}" />
        </button>
        <!-- / -->
    
        <!-- playground -->
        <div class="flex flex-col w-full gap-4 p-4">
            <div v-if="data.gridItems.length" id="playground" class="grid w-full h-full p-2 overflow-auto" :class="data.classes.map(c => c.value).join(' ')">
                <div v-for="item in data.gridItems" class="bg-orange-500/30 border-2 border-orange-500 flex items-center justify-center min-w-[64px] min-h-[64px] p-4 shrink-0 rounded-md">
                    {{ item }}
                </div>
            </div>
        
            <div v-else class="flex flex-col items-center justify-center w-full h-full overflow-auto">
                <p class="mb-6 text-xl font-bold text-zinc-500">No grid items :(</p>
        
                <button @click.native="addItem()" class="px-3 py-1.5 text-sm bg-orange-500 rounded-md">
                    Add item
                </button>
            </div>
        
            <!-- code -->
            <div class="w-full space-y-4">
                <h2>Classes to copy</h2>
                <code class="relative block p-4 border rounded-lg border-zinc-500 pr-9">
                    grid 
                    {{ data.classes.map(c => c.value).join(' ') }}
        
                    <!-- pulsante copia negli appunti -->
                    <div class="absolute flex items-center gap-2 top-4 right-2">
                        <transition leave-active-class="transition duration-1000 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                            <span v-show="data.codeCopied" class="p-0 m-0 font-sans text-xs font-medium text-green-500">
                                <i class="fa-solid fa-check"></i>
                                Copied
                            </span>
                        </transition>
                        
                        <button @click.native="copyCode()" title="Copy to clipboard" class="flex items-center justify-center w-6 h-6 text-orange-500 transition-colors border rounded-md border-zinc-500 hover:text-orange-400 hover:border-orange-400">
                            <i class="text-sm fa-regular fa-clipboard"></i>
                        </button>
                    </div>
                    <!-- / -->
                </code>
            </div>
            <!-- / -->
        </div>
        <!-- / -->
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const data = reactive({
    gridItems: [1,2,3,4,5,6,7,8],
    classes: [
        {name: 'Grid cols 4', value: 'grid-cols-4', family: 'template-cols'},
        {name: 'None', value: '', family: 'template-rows'},
        {name: 'None', value: '', family: 'auto-flow'},
        {name: 'None', value: '', family: 'auto-cols'},
        {name: 'None', value: '', family: 'auto-rows'},
        {name: 'None', value: '', family: 'place-content'},
        {name: 'None', value: '', family: 'place-items'},
        {name: 'Gap 2', value: 'gap-2', family: 'gap'},
    ],
    codeCopied: false,
});

const isOpenAsideMenu = ref(false)
const accordionArr = ref([]);
const isOpenAccordion = ref({});

const toggleAccordion = (e, index)=>{
    isOpenAccordion.value[index] = e.open;
}

const addClass = (name, value, family)=>{
    let indx = data.classes.findIndex((g) => g.family == family ? true : false)

    if(indx !== -1){
        data.classes.splice(indx, 1);
        data.classes.push({name: name, value: value, family: family});
    } else {
        data.classes.push({name: name, value: value, family: family});
    }
}

const reset = ()=>{
    data.gridItems = [1,2,3,4,5,6,7,8];
    
    data.classes = [
        {name: 'Grid cols 4', value: 'grid-cols-4', family: 'template-cols'},
        {name: 'None', value: '', family: 'template-rows'},
        {name: 'None', value: '', family: 'auto-flow'},
        {name: 'None', value: '', family: 'auto-cols'},
        {name: 'None', value: '', family: 'auto-rows'},
        {name: 'None', value: '', family: 'place-content'},
        {name: 'None', value: '', family: 'place-items'},
        {name: 'Gap 2', value: 'gap-2', family: 'gap'},
    ];
}

const addItem = ()=>{
    data.gridItems.push(data.gridItems.length + 1);
}

const removeItem = ()=>{
    data.gridItems.splice(data.gridItems.length -1, 1);
}

const copyCode = ()=>{
    navigator.clipboard.writeText(data.classes.map(c => c.value).join(' '));
    data.codeCopied = true;

    setTimeout(() => {
        data.codeCopied = false; 
    }, 2000);
}

const gridProperties = [
    {
        name: 'Grid template columns',
        family: 'template-cols',
        values: [
            {name: 'Grid cols 1', value: 'grid-cols-1'},
            {name: 'Grid cols 2', value: 'grid-cols-2'},
            {name: 'Grid cols 3', value: 'grid-cols-3'},
            {name: 'Grid cols 4', value: 'grid-cols-4'},
            {name: 'Grid cols 5', value: 'grid-cols-5'},
            {name: 'Grid cols 6', value: 'grid-cols-6'},
            {name: 'Grid cols 7', value: 'grid-cols-7'},
            {name: 'Grid cols 8', value: 'grid-cols-8'},
            {name: 'Grid cols 9', value: 'grid-cols-9'},
            {name: 'Grid cols 10', value: 'grid-cols-10'},
            {name: 'Grid cols 11', value: 'grid-cols-11'},
            {name: 'Grid cols 12', value: 'grid-cols-12'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Grid template rows',
        family: 'template-rows',
        values: [
            {name: 'Grid rows 1', value: 'grid-rows-1'},
            {name: 'Grid rows 2', value: 'grid-rows-2'},
            {name: 'Grid rows 3', value: 'grid-rows-3'},
            {name: 'Grid rows 4', value: 'grid-rows-4'},
            {name: 'Grid rows 5', value: 'grid-rows-5'},
            {name: 'Grid rows 6', value: 'grid-rows-6'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Grid auto flow',
        family: 'auto-flow',
        values: [
            {name: 'Grid flow row', value: 'grid-flow-row'},
            {name: 'Grid flow col', value: 'grid-flow-col'},
            {name: 'Grid flow dense', value: 'grid-flow-dense'},
            {name: 'Grid flow row dense', value: 'grid-flow-row-dense'},
            {name: 'Grid flow col dense', value: 'grid-flow-col-dense'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Grid auto cols',
        family: 'auto-cols',
        values: [
            {name: 'Auto cols auto', value: 'auto-cols-auto'},
            {name: 'Auto cols min', value: 'auto-cols-min'},
            {name: 'Auto cols max', value: 'auto-cols-max'},
            {name: 'Auto cols fr', value: 'auto-cols-fr'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Grid auto rows',
        family: 'auto-rows',
        values: [
            {name: 'Auto rows auto', value: 'auto-rows-auto'},
            {name: 'Auto rows min', value: 'auto-rows-min'},
            {name: 'Auto rows max', value: 'auto-rows-max'},
            {name: 'Auto rows fr', value: 'auto-rows-fr'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Place content',
        family: 'place-content',
        values: [
            {name: 'Place content center', value: 'place-content-center'},
            {name: 'Place content start', value: 'place-content-start'},
            {name: 'Place content end', value: 'place-content-end'},
            {name: 'Place content between', value: 'place-content-between'},
            {name: 'Place content around', value: 'place-content-around'},
            {name: 'Place content evenly', value: 'place-content-evenly'},
            {name: 'Place content baseline', value: 'place-content-baseline'},
            {name: 'Place content stretch', value: 'place-content-stretch'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Place items',
        family: 'place-items',
        values: [
            {name: 'Place items start', value: 'place-items-start'},
            {name: 'Place items end', value: 'place-items-end'},
            {name: 'Place items center', value: 'place-items-center'},
            {name: 'Place items baseline', value: 'place-items-baseline'},
            {name: 'Place items stretch', value: 'place-items-stretch'},
            {name: 'None', value: ''},
        ]
    },
    {
        name: 'Gap',
        family: 'gap',
        values: [
            {name: 'None', value: ''},
            {name: 'Gap px',value: 'gap-px'},
            {name: 'Gap 0.5',value: 'gap-0.5'},
            {name: 'Gap 1',value: 'gap-1'},
            {name: 'Gap 1.5',value: 'gap-1.5'},
            {name: 'Gap 2',value: 'gap-2'},
            {name: 'Gap 2.5',value: 'gap-2.5'},
            {name: 'Gap 3',value: 'gap-3'},
            {name: 'Gap 3.5',value: 'gap-3.5'},
            {name: 'Gap 4',value: 'gap-4'},
            {name: 'Gap 5',value: 'gap-5'},
            {name: 'Gap 6',value: 'gap-6'},
            {name: 'Gap 7',value: 'gap-7'},
            {name: 'Gap 8',value: 'gap-8'},
            {name: 'Gap 9',value: 'gap-9'},
            {name: 'Gap 10',value: 'gap-10'},
            {name: 'Gap 11',value: 'gap-11'},
            {name: 'Gap 12',value: 'gap-12'},
            {name: 'Gap 14',value: 'gap-14'},
            {name: 'Gap 16',value: 'gap-16'},
            {name: 'Gap 20',value: 'gap-20'},
            {name: 'Gap 24',value: 'gap-24'},
            {name: 'Gap 28',value: 'gap-28'},
            {name: 'Gap 32',value: 'gap-32'},
            {name: 'Gap 36',value: 'gap-36'},
            {name: 'Gap 40',value: 'gap-40'},
            {name: 'Gap 44',value: 'gap-44'},
            {name: 'Gap 48',value: 'gap-48'},
            {name: 'Gap 52',value: 'gap-52'},
            {name: 'Gap 56',value: 'gap-56'},
            {name: 'Gap 60',value: 'gap-60'},
            {name: 'Gap 64',value: 'gap-64'},
            {name: 'Gap 72',value: 'gap-72'},
            {name: 'Gap 80',value: 'gap-80'},
            {name: 'Gap 96',value: 'gap-96'},
        ],
    },
];

</script>
