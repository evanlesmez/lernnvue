
# Vue

## Notes

Current chapter: <https://vuejs.org/v2/guide/forms.html>

### Instance and Template Syntax

- v-on
- v-bind
- vm = new Vue({})
- overwrite lifecycle hooks like "created"
- expressions in mustache braces eg. {{ expression }}
- don't use arrows because "this" will be hard to pin down

### Computed

- complex logic computed property
- computed is based on reactivity of data cached
- methods evaluated each time
- watchers good for async

### Condtional

- v-if for conditional render
- template block for invisible vue container
- use key for forced unique rendering
-v-show for frequent toggles
-v-if with v-for is bad

### Events

- v-on accepts method e.g. v-on:"greet"
- can pass $event to access the actual event with js

    "It’s easier to locate the handler function implementations within your JS code by skimming the HTML template.

    Since you don’t have to manually attach event listeners in JS, your ViewModel code can be pure logic and DOM-free. This makes it easier to test.

    When a ViewModel is destroyed, all event listeners are automatically removed. You don’t need to worry about cleaning it up yourself."

### Forms

### Components