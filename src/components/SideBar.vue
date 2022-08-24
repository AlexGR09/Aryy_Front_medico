<template>
    <!--BARRA DE NAVEGACIÓN | Luis Reyes-->
    <nav>
        <v-navigation-drawer v-model="drawer" darp app mini-variant mini-variant-width="80" class="">
            <v-list>
                <v-list-item class="mb-12">
                    <v-list-item-content>
                        <v-icon color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical</v-icon>
                        <!-- <v-list-item-subtitle aling="center">Aryy</v-list-item-subtitle> -->
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list flat>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-solid fa-calendar-days</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-light fa-user-group</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-solid fa-comment-dots</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-solid fa-chart-line</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-solid fa-file-invoice</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-regular fa-paper-plane</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-duotone fa-calculator</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2" large>fa-solid fa-gear</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
            </v-list>

            <v-list style="position:absolute; bottom: 0;" class="mb-2 ml-3" flat>
                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon>fa-solid fa-gear</v-icon>
                    </v-list-action>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon >fa-solid fa-gear</v-icon>
                    </v-list-action>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon>fa-solid fa-gear</v-icon>
                    </v-list-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>




<script>
export default {
    data: () => ({
        drawer: true
    })
}
</script>