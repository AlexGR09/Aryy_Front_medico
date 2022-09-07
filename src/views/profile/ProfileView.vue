<template>
    <!-- CARD DEL PERFIL | luis reyes-->
    <div class="container">
        <section>
            <div class="swiper mySwiper container">
                <div class="swiper-wrapper content">

                    <div class="swiper-slide card" >
                        <div class="card-content" v-if="characters">
                            <div class="image">
                               <img :src="characters.image" alt="">
                            </div>
                            <div class="name-profession">
                                <span class="name">Dr. {{characters.name}}</span>
                                <span class="profession">{{characters.species}}</span>
                                <span class="cedula">No.Cedula:{{characters.created}}</span>
                            </div>
                           

                            <div class="media-icons">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="cedula">{{characters.id}} Opiniones</span>
                            </div>
                            <div class="button">
                                <button class="aboutMe">Enviar mensaje</button>
                                <v-btn class="aboutMe" color="primary" elevation="2" router to="/edicion-de-perfil/editar">Editar datos</v-btn>
                            </div>
                            <div class="container">
                                <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Consultorios</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Precios</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Opiniones</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link">Dudas solucionadas</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link">Experiencia</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- CARD DEL PERFIL | luis reyes -->
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'ProfileView',
    components: {
    },
    data() {

        return {
            characters: []

        }
    },
    mounted() {
        console.log('verificando');
        this.getTodos();
    },
    methods: {
        getTodos() {
            console.log('peticion GET');
            axios.get('https://rickandmortyapi.com/api/character/15')
                .then(res => {
                    /* console.log(res) */
                    /* this.characters = res.data.results */ /* -> para listar todo la API */
                    this.characters = res.data /* para contultar un solo ID */
                })
                .catch(e => {
                    /* console.log(e); */
                    console.log(e);
                })
        },
  
    }
}
</script>

<style>
/* === Google Font Import - Poppins === */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


/* body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
}

section {
    position: relative;
    height: 450px;
    width: 1075px;
    display: flex;
    align-items: center;
} */

.swiper {
    width: 950px;
}

.card {
    position: relative;
    background: #fff;
    border-radius: 20px;
    margin: 20px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.card::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
    background-image: url("@/assets/fondo.jpg");

    border-radius: 20px 20px 0 0;
}

.card .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    position: relative;
    z-index: 100;
}

section .card .image {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    padding: 3px;
    background: #7d2ae8;
}

section .card .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
}

.card .media-icons {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card .media-icons i {
    color: #fff;
    opacity: 0.6;
    margin-top: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.card .media-icons i:hover {
    opacity: 1;
}

.card .name-profession {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    
}

.name-profession .name {
    font-size: 20px;
    font-weight: 600;
}

.name-profession .profession {
    font-size: 15px;
    font-weight: 500;
}

.card .rating {
    display: flex;
    align-items: center;
    margin-top: 18px;
}

.card .rating i {
    font-size: 18px;
    margin: 0 2px;
    color: #7d2ae8;
}

.card .button {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.card .button button {
    background: #7d2ae8;
    outline: none;
    border: none;
    color: #fff;
    padding: 8px 22px;
    border-radius: 20px;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.button button:hover {
    background: #6616d0;
}

.swiper-pagination {
    position: absolute;
}

.swiper-pagination-bullet {
    height: 7px;
    width: 26px;
    border-radius: 25px;
    background: #7d2ae8;
}

.swiper-button-next,
.swiper-button-prev {
    opacity: 0.7;
    color: #7d2ae8;
    transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    opacity: 1;
    color: #7d2ae8;
}


header {
    background: #666;
    color: #fff;
    width: 80%;
    max-width: 900px;
    height: 150px;
    margin: 0 auto;
}

#main {
    background-color: #fff;
    width: 80%;
    max-width: 900px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 40px;
    overflow: hidden;
}

footer {
    background: #888;
    color: #fff;
    width: 80%;
    max-width: 900px;
    height: 150px;
    margin: 0 auto;
}

#tabs {
    position: relative;
}

span.diana {
    position: fixed;
    display: none;
}

.diana+a {
    display: block;
    float: left;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    border: 1px solid #ddd;
    background-color: #eee;
    margin-bottom: -1px;
    border-radius: 8px 8px 0 0;
    margin-right: 10px;
    text-decoration: none;
}

.diana:target+a {
    background-color: #fff;
    border-bottom-color: #fff;
}

#pnl_1,
#pnl_2,
#pnl_3 {
    position: absolute;
    top: 31px;
    left: 0;
    border: none;
    clear: both;
    overflow: hidden;
}

#pnl_1>div,
#pnl_2>div,
#pnl_3>div {
    opacity: 0;
    transition: all 0.1s ease;
    padding: 30px;
}

#uno:target~#pnl_1,
#dos:target~#pnl_2,
#tres:target~#pnl_3 {
    position: static;
    border: 1px solid #ddd;
}

#uno:target~#pnl_1>div,
#dos:target~#pnl_2>div,
#tres:target~#pnl_3>div {
    opacity: 1;
    transition: all 1s ease;
}
</style>