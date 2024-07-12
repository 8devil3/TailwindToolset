<template>
    <div class="w-full max-w-5xl p-4 mx-auto md:p-6 grow">
        <div class="pb-16 mt-8 mb-12 border-b border-gray-300 md:mt-16 md:mb-24 dark:border-gray-800">
            <h1>OrangeVue Form UI kit</h1>

            <h2>A totally free, simple package with five form elements.</h2>

            <code @click="copyCode('npm i ow-vue-form-ui-kit')" class="relative px-2 py-1 cursor-pointer">
                npm i ow-vue-form-ui-kit
                
                <!-- pulsante copia negli appunti -->
                <button @click.native="copyCode()" title="Copy to clipboard" class="inline-flex items-center justify-center w-6 h-6 text-orange-500 transition-color hover:text-orange-400 hover:border-orange-400">
                    <i class="text-sm fa-regular fa-clipboard"></i>
                </button>
                
                <transition leave-active-class="transition duration-1000 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <span v-show="data.codeCopied" class="p-0 m-0 font-sans text-xs font-medium text-green-500">
                        <i class="fa-solid fa-check"></i>
                        Copied
                    </span>
                </transition>
            </code>

            <div class="mt-12">
                <p>This package is my first npm package, based on Tailwind CSS and Vue 3.</p>
                <p>It contains five components to be used in forms:</p>
                <ul class="mb-4 list-disc list-inside">
                    <li>inputs</li>
                    <li>buttons</li>
                    <li>dropdowns</li>
                    <li>radios</li>
                    <li>checkboxes</li>
                </ul>
                <p>I predefined twelve colors in Tailwind config file <code>tailwind.config.js</code> that can be edited to be consistent with your theme. Scroll <a href="#colors" class="font-normal text-orange-500 transition-colors hover:text-orange-400">down</a> to check them out.</p>
                <p>GitHub repo <a href="https://github.com/8devil3/ow-vue-form-ui-kit" target="_blank" class="font-normal text-orange-500 transition-colors hover:text-orange-400">here <i class="fa-brands fa-github"></i></a>.</p>
            </div>
            
            <div class="mt-12">
                <h2>Requirements</h2>
                <p>Vue 3.x, Tailwind CSS 3.x, Tailwind CSS Form plugin and Font Awesome (for buttons icons).</p>
                <p>In your <code>tailwind.config.js</code> add the following code:</p>
<pre><code class="border-0 language-js">/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        //other content
        "./node_modules/ow-vue-form-ui-kit/dist/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                //light mode
                primary: '#ff6600',
                secondary: '#6366f1',
                tertiary: '#06b6d4',
                quaternary: '#ec4899',
                neutral1: '#6b7280',
                neutral2: '#cbd5e1',
                label: '#94a3b8',
                placeholder: '#94a3b8',
                info: '#3b82f6',
                success: '#22c55e',
                warning: '#f59e0b',
                danger: '#ef4444',
    
                //dark mode
                primaryDark: '#ea580c',
                secondaryDark: '#4f46e5',
                tertiaryDark: '#0891b2',
                quaternaryDark: '#be185d',
                neutral1Dark: '#737373',
                neutral2Dark: '#1e293b',
                labelDark: '#94a3b8',
                placeholderDark: '#9ca3af',
                infoDark: '#2563eb',
                successDark: '#047857',
                warningDark: '#d97706',
                dangerDark: '#b91c1c'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}</code></pre>
            </div>

            <div class="mt-12">
                <h2>Enabling the dark mode</h2>
                <p>You can follow Tailwind CSS instructions <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" class="font-normal text-orange-500 transition-colors hover:text-orange-400">here</a>.</p>
                <p>I report them below just as I used in this project:</p>
<pre><code class="border-0 language-js">onMounted(() =&#62; {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})

const toggleDarkMode = () =&#62; {
    document.documentElement.classList.toggle('dark')
}</code></pre>                
            </div>
        </div>

        <div class="flex flex-col gap-6 divide-y divide-gray-300 md:gap-12 dark:divide-gray-800">
            <!-- inputs -->
            <div class="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-12">
                <div class="md:col-span-5">
                    <h2>Inputs</h2>
                    <p>
                        Inputs are the base of form interaction. The component can be styled and set with props. Click the follow button to show props.
                    </p>

                    <button @click="data.showInputTable = !data.showInputTable" title="Show/hide props table" class="px-3 py-2 mt-6 text-sm tracking-wide text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">Props table</button>
                </div>

                <div class="grid grid-cols-1 grid-rows-3 gap-6 md:col-span-7">
                    <Input
                        type="text"
                        v-model="data.input1"
                        label="City"
                        id="city1"
                        shape="linear"
                        placeholder="This is a placeholder"
                        errorMsg="This is an error message"
                        :charsCounter="10"
                        icon="fa-solid fa-check"
                    />

                    <Input
                        type="text"
                        v-model="data.input2"
                        id="city2"
                        shape="rounded"
                        placeholder="This is a placeholder"
                        label="City"
                        :charsCounter="10"
                        icon="fa-solid fa-check"
                        errorMsg="This is an error message"
                    />

                    <Input
                        type="text"
                        v-model="data.input3"
                        label="City"
                        id="city3"
                        shape="pill"
                        placeholder="This is a placeholder"
                        errorMsg="This is an error message"
                        :charsCounter="10"
                        icon="fa-solid fa-check"
                    />
                </div>

                <div class="overflow-x-auto md:col-span-12">
                    <table v-show="data.showInputTable" class="table-auto">
                        <thead>
                            <tr>
                                <th>props</th>
                                <th>data type</th>
                                <th>default</th>
                                <th>values</th>
                                <th>notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="input in owInputs">
                                <td class="italic whitespace-nowrap" v-html="input.props"></td>
                                <td><code class="capitalize whitespace-nowrap">{{ input.dataType }}</code></td>
                                <td class="whitespace-nowrap">{{ input.default }}</td>
                                <td v-html="input.values"></td>
                                <td v-html="input.notes"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- / -->

            <!-- button -->
            <div class="grid grid-cols-1 gap-8 pt-8 md:gap-16 md:grid-cols-12 md:pt-16">
                <div class="md:col-span-5">
                    <h2>Buttons</h2>
                    <p>Button elements are divided in two groups: solid and outline.<br>Each member can be styled with just text, icons or both. Click the follow button to show props.</p>

                    <button @click="data.showButtonsTable = !data.showButtonsTable" title="Show/hide props table" class="px-3 py-2 mt-6 text-sm tracking-wide text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">Props table</button>
                </div>

                <div class="space-y-8 md:col-span-7">
                    <div>
                        <h3>Solid, just text</h3>
                        <div class="flex gap-4">
                            <Button text="Squared"/>
                            <Button text="Rounded" shape="rounded" mainColor="secondary"/>
                            <Button text="Pill" shape="pill"  mainColor="tertiary"/>
                        </div>
                    </div>

                    <div>
                        <h3>Solid, text with icon</h3>
                        <div class="flex gap-4">
                            <Button text="Squared" icon="fa-solid fa-check"/>
                            <Button text="Rounded" shape="rounded" icon="fa-solid fa-check" mainColor="secondary"/>
                            <Button text="Pill" shape="pill" icon="fa-solid fa-check"  mainColor="tertiary"/>
                        </div>
                    </div>

                    <div>
                        <h3>Solid, just icon</h3>
                        <div class="flex gap-4">
                            <Button icon="fa-solid fa-user"/>
                            <Button shape="rounded" icon="fa-solid fa-download" mainColor="secondary"/>
                            <Button shape="pill" icon="fa-solid fa-check" mainColor="tertiary"/>
                        </div>
                    </div>

                    <div>
                        <h3>Outline, just text</h3>
                        <div class="flex gap-4">
                            <Button text="Squared" outline/>
                            <Button text="Rounded" shape="rounded" outline mainColor="secondary"/>
                            <Button text="Pill" shape="pill" outline mainColor="tertiary"/>
                        </div>
                    </div>

                    <div>
                        <h3>Outline, text with icon</h3>
                        <div class="flex gap-4">
                            <Button text="Squared" icon="fa-solid fa-check" outline/>
                            <Button text="Rounded" shape="rounded" icon="fa-solid fa-check" outline mainColor="secondary"/>
                            <Button text="Pill" shape="pill" icon="fa-solid fa-check" outline mainColor="tertiary"/>
                        </div>
                    </div>

                    <div>
                        <h3>Outline, just icon</h3>
                        <div class="flex gap-4">
                            <Button icon="fa-solid fa-user" outline/>
                            <Button shape="rounded" icon="fa-solid fa-download" outline mainColor="secondary"/>
                            <Button shape="pill" icon="fa-solid fa-check" outline mainColor="tertiary"/>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto md:col-span-12">
                    <table v-show="data.showButtonsTable" class="table-auto md:col-span-12">
                        <thead>
                            <tr>
                                <th>props</th>
                                <th>data type</th>
                                <th>default</th>
                                <th>values</th>
                                <th>notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="button in owButtons">
                                <td class="italic whitespace-nowrap" v-html="button.props"></td>
                                <td><code class="capitalize whitespace-nowrap">{{ button.dataType }}</code></td>
                                <td class="whitespace-nowrap">{{ button.default }}</td>
                                <td v-html="button.values"></td>
                                <td v-html="button.notes"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- / -->

            <!-- dropdown -->
            <div class="grid grid-cols-1 gap-8 pt-8 md:gap-16 md:grid-cols-12 md:pt-16">
                <div class="md:col-span-5">
                    <h2>Dropdowns</h2>
                    <p>Dropdown elements are just like select element but custom built. Click the follow button to show props.</p>

                    <button @click="data.showDropdownsTable = !data.showDropdownsTable" title="Show/hide props table" class="px-3 py-2 mt-6 text-sm tracking-wide text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">Props table</button>
                </div>

                <div class="grid grid-cols-1 grid-rows-3 gap-6 md:col-span-7">
                    <Select label="City" v-model="data.dropdown1" :options="cities" id="city4" defaultOption="Select city" errorMsg="This is an error message"/>
                    <Select label="City" v-model="data.dropdown2" :options="cities" id="city5" defaultOption="Select city" shape="rounded" errorMsg="This is an error message"/>
                    <Select label="City" v-model="data.dropdown3" :options="cities" id="city6" defaultOption="Select city" shape="pill" errorMsg="This is an error message"/>
                </div>

                <div class="overflow-x-auto md:col-span-12">
                    <table v-show="data.showDropdownsTable" class="table-auto md:col-span-12">
                        <thead>
                            <tr>
                                <th>props</th>
                                <th>data type</th>
                                <th>default</th>
                                <th>values</th>
                                <th>notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dropdown in owDropdowns">
                                <td class="italic whitespace-nowrap" v-html="dropdown.props"></td>
                                <td><code class="capitalize whitespace-nowrap">{{ dropdown.dataType }}</code></td>
                                <td class="whitespace-nowrap">{{ dropdown.default }}</td>
                                <td v-html="dropdown.values"></td>
                                <td v-html="dropdown.notes"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- / -->

            <!-- checkbox e radio -->
            <div class="grid grid-cols-1 gap-8 pt-8 md:gap-16 md:grid-cols-12 md:pt-16">
                <div class="md:col-span-5">
                    <h2>Radios & checkboxes</h2>
                    <p>Radios and checkboxex are the well know inputs type to choose one or multiple values. Click the follow button to show props.</p>
                    
                    <button @click="data.showRadioCheckboxexTable = !data.showRadioCheckboxexTable" title="Show/hide props table" class="px-3 py-2 mt-6 text-sm tracking-wide text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-400">Props table</button>
                </div>

                <div class="grid grid-cols-2 gap-8 md:col-span-7">
                    <div class="space-y-2">
                        <h3>Radios</h3>
                        <Radio v-for="city, id in cities" :label="city" :id="'city-' + id" name="city" v-model:checked="data.radio" :value="city" subLabel="Text under label"/>
                        <p class="pt-6">Selected value:<br><span class="font-normal text-orange-500">{{ data.radio }}</span></p>
                    </div>
        
                    <div class="space-y-2">
                        <h3>Checkboxes</h3>
                        <Checkbox v-for="city, id in cities" :label="city" :id="'city-2-' + id" name="city" v-model:checked="data.checkbox" :value="city" subLabel="Text under label"/>
                        <p class="pt-6">Selected values:<br><span class="font-normal text-orange-500">{{ data.checkbox }}</span></p>
                    </div>
                </div>

                <div class="overflow-x-auto md:col-span-12">
                    <table v-show="data.showRadioCheckboxexTable" class="table-auto md:col-span-12">
                        <thead>
                            <tr>
                                <th>props</th>
                                <th>data type</th>
                                <th>default</th>
                                <th>values</th>
                                <th>notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="radio in owRadiosCheckboxex">
                                <td class="italic whitespace-nowrap" v-html="radio.props"></td>
                                <td><code class="capitalize whitespace-nowrap">{{ radio.dataType }}</code></td>
                                <td class="whitespace-nowrap">{{ radio.default }}</td>
                                <td v-html="radio.values"></td>
                                <td v-html="radio.notes"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- / -->

            <!-- colori -->
            <div id="colors" class="grid grid-cols-1 gap-8 pt-8 md:gap-16 md:grid-cols-12 md:pt-16">
                <div class="md:col-span-5">
                    <h2>Colors</h2>
                    <p>The package relies on 12 predefined custom colors. Each of them has a correspondig dark version enabled in dark mode.</p>
                    <p>These are the default that I added and, of course, you can freeley edit them in your <code>tailwind.config.js</code> file.</p>
                </div>

                <div class="space-y-8 md:col-span-7">
                    <div>
                        <p>Light mode</p>
                        <div class="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 md:grid-cols-4">
                            <div class="p-4 text-white capitalize bg-primary whitespace-nowrap">primary</div>
                            <div class="p-4 text-white capitalize bg-secondary whitespace-nowrap">secondary</div>
                            <div class="p-4 text-white capitalize bg-tertiary whitespace-nowrap">tertiary</div>
                            <div class="p-4 text-white capitalize bg-quaternary whitespace-nowrap">quaternary</div>
                            <div class="p-4 text-white capitalize bg-neutral1 whitespace-nowrap">neutral1</div>
                            <div class="p-4 text-gray-700 capitalize bg-neutral2 whitespace-nowrap">neutral2</div>
                            <div class="p-4 text-white capitalize bg-label whitespace-nowrap">label</div>
                            <div class="p-4 text-white capitalize bg-placeholder whitespace-nowrap">placeholder</div>
                            <div class="p-4 text-white capitalize bg-info whitespace-nowrap">info</div>
                            <div class="p-4 text-white capitalize bg-success whitespace-nowrap">success</div>
                            <div class="p-4 text-white capitalize bg-warning whitespace-nowrap">warning</div>
                            <div class="p-4 text-white capitalize bg-danger whitespace-nowrap">danger</div>
                        </div>
                    </div>

                    <div>
                        <p>Dark mode</p>
                        <div class="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 md:grid-cols-4">
                            <div class="p-4 text-white capitalize bg-primaryDark">primary</div>
                            <div class="p-4 text-white capitalize bg-secondaryDark">secondary</div>
                            <div class="p-4 text-white capitalize bg-tertiaryDark">tertiary</div>
                            <div class="p-4 text-white capitalize bg-quaternaryDark">quaternary</div>
                            <div class="p-4 text-white capitalize bg-neutral1Dark">neutral1</div>
                            <div class="p-4 text-white capitalize bg-neutral2Dark">neutral2</div>
                            <div class="p-4 text-white capitalize bg-labelDark">label</div>
                            <div class="p-4 text-white capitalize bg-placeholderDark">placeholder</div>
                            <div class="p-4 text-white capitalize bg-infoDark">info</div>
                            <div class="p-4 text-white capitalize bg-successDark">success</div>
                            <div class="p-4 text-white capitalize bg-warningDark">warning</div>
                            <div class="p-4 text-white capitalize bg-dangerDark">danger</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / -->
        </div>
    </div>

    <button @click="scroll(0,0)" class="fixed z-50 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full shadow-lg md:w-10 md:h-10 bottom-6 right-6">
        <i class="text-sm text-white md:text-lg fa-solid fa-arrow-up"></i>
    </button>
</template>

<script setup>
import { reactive } from 'vue';
import { Input, Button, Select, Radio, Checkbox} from 'ow-vue-form-ui-kit';
import { createHead } from "unhead"
import { useHead } from 'unhead';

const head = createHead();

useHead({
    script: [{src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js'}]
});

const data = reactive({
    codeCopied: false,
    input1: null,
    input2: null,
    input3: null,
    dropdown1: null,
    dropdown2: null,
    dropdown3: null,
    radio: 'Torino',
    checkbox: ['Torino', 'Firenze'],
    showInputTable: false,
    showButtonsTable: false,
    showDropdownsTable: false,
    showRadioCheckboxexTable: false,
});
  
const cities = ['Milano', 'Roma', 'Firenze', 'Torino', 'Bologna'];

const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    data.codeCopied = true;

    setTimeout(() => {
        data.codeCopied = false; 
    }, 2000);
}

const scroll = (x,y) => {
    window.scrollTo(x,y)
}

const owInputs = [
    {
        props: 'shape',
        dataType: 'string',
        default: 'linear',
        values: 'linear, rounded, pill',
        notes: 'Input shape.'
    },
    {
        props: 'type',
        dataType: 'string',
        default: 'linear',
        values: 'text, url, email, password, tel, search',
        notes: 'Input type.'
    },
    {
        props: 'label',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Input label content.'
    },
    {
        props: 'name',
        dataType: 'string',
        default: 'linear',
        values: 'Any string',
        notes: 'Input <code>name</code> attribute.'
    },
    {
        props: 'mainColor',
        dataType: 'string',
        default: 'neutral1',
        values: 'One of the twelve predefined colors',
        notes: 'Input border in normal state.'
    },
    {
        props: 'focusColor',
        dataType: 'string',
        default: 'primary',
        values: 'One of the twelve predefined colors',
        notes: 'Input border and background in focus state.'
    },
    {
        props: 'placeholder',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Content of input placeholder. If <code>shape="linear"</code>, placeholder will not display; the label is used instead.'
    },
    {
        props: 'id',
        dataType: 'string',
        default: 'linear',
        values: 'Any string',
        notes: 'Input <code>id</code> attribute.'
    },
    {
        props: 'min, max, step',
        dataType: 'number',
        default: '0, 100, 1',
        values: 'Any number',
        notes: 'Used in inpup <code>type="number"</code> to define min, max and step value acceptable.'
    },
    {
        props: 'autocomplete',
        dataType: 'string',
        default: 'on',
        values: 'on, off',
        notes: 'Input <code>autocomplete</code> attribute, turn it on or off.'
    },
    {
        props: 'autofocus',
        dataType: 'boolean',
        default: 'false',
        values: 'true, false',
        notes: 'Input <code>autofocus</code> attribute, turn it on or off.'
    },
    {
        props: 'icon',
        dataType: 'string',
        default: 'null',
        values: 'Font Awesome classes',
        notes: 'Specify family and icon, i.e.: <code>fa-solid fa-check</code>'
    },
    {
        props: 'iconColor',
        dataType: 'string',
        default: 'text-success',
        values: 'Any Tailwind CSS class',
        notes: 'Could be one of predefined colors or any text-* Tailwind class, even in the form "<code>text-[#ff0000]</code>"'
    },
    {
        props: 'required',
        dataType: 'boolean',
        default: 'false',
        values: 'true, false',
        notes: 'Input <code>required</code> attribute.'
    },
    {
        props: 'errorMsg',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'An error message to display.'
    },
    {
        props: 'disabled',
        dataType: 'boolean',
        default: 'linear',
        values: 'true, false',
        notes: 'Input <code>disabled</code> attribute.'
    },
    {
        props: 'charsCounter',
        dataType: 'number',
        default: 'null',
        values: 'Any integer number',
        notes: 'Enable the chars input count (spaces included) and it turns red when input length is grater than the set value.'
    },
    {
        props: 'pattern',
        dataType: 'string',
        default: 'null',
        values: 'JavaScript regular expression',
        notes: 'Input <code>pattern</code> attribute.'
    }
];

const owButtons = [
    {
        props: 'shape',
        dataType: 'string',
        default: 'squared',
        values: 'squared, rounded, pill',
        notes: 'Button shape.'
    },
    {
        props: 'outline',
        dataType: 'boolean',
        default: 'false',
        values: 'true, false',
        notes: 'Set button with just border and pale background.'
    },
    {
        props: 'mainColor',
        dataType: 'string',
        default: 'primary',
        values: 'One of the twelve predefined colors',
        notes: 'Button color.'
    },
    {
        props: 'type',
        dataType: 'string',
        default: 'button',
        values: 'button, submit, reset',
        notes: 'Button <code>type</code> attribute.'
    },
    {
        props: 'text',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Button text content.'
    },
    {
        props: 'textColor',
        dataType: 'string',
        default: 'text-white',
        values: 'Any Tailwind CSS class',
        notes: 'Could be one of predefined colors or any text-* Tailwind class, even in the form <code>text-[#ff0000]</code>'
    },
    {
        props: 'textColorOutline',
        dataType: 'string',
        default: 'text-gray-700 dark:text-white',
        values: 'Any Tailwind CSS class',
        notes: 'Could be one of predefined colors or any text-* Tailwind class, even in the form <code>text-[#ff0000]</code>'
    },
    {
        props: 'disabled',
        dataType: 'boolean',
        default: 'false',
        values: 'true, false',
        notes: 'Button <code>disabled</code> attribute.'
    },
    {
        props: 'icon',
        dataType: 'string',
        default: 'null',
        values: 'Font Awesome classes',
        notes: 'Specify family and icon, i.e.: <code>fa-solid fa-check</code>'
    },
];

const owDropdowns = [
    {
        props: 'shape',
        dataType: 'string',
        default: 'linear',
        values: 'linear, rounded, pill',
        notes: 'Dropdown shape.'
    },
    {
        props: 'options',
        dataType: 'array',
        default: '[]',
        values: 'An array of strings or numbers',
        notes: 'An array of strings or numbers; arrays of objects will not work.'
    },
    {
        props: 'label',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Dropdown label content.'
    },
    {
        props: 'name',
        dataType: 'string',
        default: 'linear',
        values: 'Any string',
        notes: 'Dropdown <code>name</code> attribute.'
    },
    {
        props: 'mainColor',
        dataType: 'string',
        default: 'neutral1',
        values: 'One of the twelve predefined colors',
        notes: 'Dropdown border in normal state.'
    },
    {
        props: 'focusColor',
        dataType: 'string',
        default: 'primary',
        values: 'One of the twelve predefined colors',
        notes: 'Dropdown border and background in focus state.'
    },
    {
        props: 'listColor',
        dataType: 'string',
        default: 'neutral2',
        values: 'One of the twelve predefined colors',
        notes: 'Dropdown list background color.'
    },
    {
        props: 'defaultOption',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Content of dropdown default option that is the one when no value is selected.'
    },
    {
        props: 'id',
        dataType: 'string',
        default: 'linear',
        values: 'Any string',
        notes: 'Dropdown <code>id</code> attribute.'
    },
    {
        props: 'errorMsg',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'An error message to display.'
    },
    {
        props: 'disabled',
        dataType: 'boolean',
        default: 'linear',
        values: 'true, false',
        notes: 'Dropdown <code>disabled</code> attribute.'
    },
];

const owRadiosCheckboxex = [
    {
        props: 'value',
        dataType: 'string, number',
        default: 'null',
        values: 'Any string, any number',
        notes: 'Input radio or checkbox value.'
    },
    {
        props: 'checked<br>(for checkboxes)',
        dataType: 'array',
        default: 'null',
        values: 'An array of strings or numbers',
        notes: 'To be used in the form <code>v-model:checked="["a", "b", "c"]"</code> to determine the checked value; can be an array of strings or numbers; arrays of objects will not work.'
    },
    {
        props: 'checked<br>(for radios)',
        dataType: 'string, number',
        default: 'null',
        values: 'Any string, any number',
        notes: 'To be used in the form <code>v-model:checked="data.myValue"</code> to determine the checked value.'
    },
    {
        props: 'subLabel',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Text displayed under the label.'
    },
    {
        props: 'id',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Input <code>id</code> attribute.'
    },
    {
        props: 'mainColor',
        dataType: 'string',
        default: 'primary',
        values: 'One of the twelve predefined colors',
        notes: 'Element color in all states.'
    },
    {
        props: 'name',
        dataType: 'string',
        default: 'null',
        values: 'Any string',
        notes: 'Input <code>name</code> attribute.'
    },
]

</script>
