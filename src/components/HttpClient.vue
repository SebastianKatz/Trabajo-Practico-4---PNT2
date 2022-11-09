<template>

  <section class="src-componentes-http-client">
        <div class="jumbotron">
      <h2>Componente HttpClient</h2>
      <hr />
      <hr />
      <br />

      <button class="btn btn-warning my-3 mr-3" @click="getPostsXHRPromise()">Pedir XHR (Promise)</button>
      
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Pedir Fetch</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir Axios</button>
      <button class="btn btn-danger my-3 mr-3" @click="posts = []">Clear</button>
      
      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Numero de Telefono</th>
          </tr>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.nombre }}</td>
            <td>{{ post.mail }}</td>
            <td>{{ post.numeroTelefono }}</td>
          </tr>
        </table>
      </div>
      </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://635723ad9243cf412f93b0b0.mockapi.io/usuarios',
        posts : []
      }
    },
    methods: {
      xhrPromise() {
        return new Promise((resolve,reject) => {
          //console.log('getPostsXHRCb')
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)
          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              resolve(respuesta)
            }
            else {
              reject(`Error http: ${xhr.status}`)
            }
          })
          xhr.send()
        })
      },
      async getPostsXHRPromise() {
          try {
            let respuesta = await this.xhrPromise()
            this.posts = respuesta
          }
          catch(error) {
            console.error(error)
          }
      },
      async getPostsFetch() {
        try {
          let response = await fetch(this.url)
          console.log(response)
          let respuesta = await response.json()
          this.posts = respuesta
        }
        catch(error) {
          console.error(error)
        }
      },
      async getPostsAxios() {
        try {
          let respuesta = await this.axios(this.url)
          this.posts = respuesta.data
        }
        catch(error) { console.error(error) } 

      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: teal;
  color: white;
}

hr {
  background-color: #bbb;
}

</style>
