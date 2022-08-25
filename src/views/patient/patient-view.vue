<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    data() {
        return {
            desserts: [
                {
                    name: 'Luis Reyes',
                    calories: 159,
                },
                {
                    name: 'Alethia',
                    calories: 237,
                },
                {
                    name: 'Alexis',
                    calories: 262,
                },
                {
                    name: 'Diño',
                    calories: 305,
                },
                {
                    name: 'Julio',
                    calories: 356,
                },
                {
                    name: 'David',
                    calories: 375,
                },
                {
                    name: 'Kenya',
                    calories: 392,
                },
                {
                    name: 'Genesis',
                    calories: 408,
                },

            ],
        }
    },
}
</script>