<template>
   <!-- <List
    :items="[
      {
        name: 'test',
        children: [
          {
            name: 'test',
            children: [
              {
                name: 'test',
                children: [
                  {
                    name: 'test',
                    children: [
                      {
                        name: 'test',
                        children: [
                          {
                            name: 'test 2',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]"
  /> -->

  <LayoutMain>
      <RouterView/>
    </LayoutMain>

<!-- <List :items="item"/> -->
</template>

<script setup>
import LayoutMain from './layouts/LayoutMain.vue'
// import List from './List.vue'
</script>
