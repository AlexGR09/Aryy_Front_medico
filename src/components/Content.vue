<!-- COMPONENTE DEL CONTENIDO DEL NAV-BAR | LUIS REYES -->
<template>
    <v-app>
        <v-main>
            <div class="app-content-container boxed-container pa-6">
                <slot></slot>
            </div>
        </v-main>

    
        <!-- footer del sistema | Luis Reyes -->
        <v-footer app inset color="transparent" absolite height="56" class="px-0">
            <div class="boxed-container w-full">
                <div class="mx-6 d-flex justify-space-between">
                    <span>
                        <a href="www.google.com">Contrucción Aryy | MecahSoft</a>
                    </span>
                </div>
            </div>
        </v-footer>
    </v-app>

</template>