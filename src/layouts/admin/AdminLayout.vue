<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <header class="w-1/5 p-4 bg-gray-100 shadow-lg flex flex-col h-screen">
      <div class="mb-4 flex items-center text-slate-600 select-none">
        <img src="/img/ico-logo.png" alt="Logo" class="w-10" />
        <h1 class="text-lg ml-2 truncate font-outfit font-semibold">
          Business Manager
        </h1>
      </div>

      <nav class="space-y-0 flex-grow overflow-y-auto custom-scrollbar">
        <h2 class="text-gray-600 mt-4 text-sm font-jakarta">Menu</h2>

        <!-- Dashboard -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >dashboard</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Dashboard</span
          >
        </div>

        <!-- Clientes -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >people</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Clientes</span
          >
        </div>

        <!-- Productos -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >store</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Productos</span
          >
        </div>

        <!-- Inventario -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >inventory</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Inventario</span
          >
        </div>

        <!-- Informe -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >bar_chart</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Informe</span
          >
        </div>

        <!-- Cierre -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >receipt</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Cierre</span
          >
        </div>

        <!-- Reportes -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >assessment</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Reportes</span
          >
        </div>

        <h2 class="text-gray-500 mt-6 text-sm font-jakarta pb-2">
          Configuración
        </h2>

        <!-- Notificaciones -->
        <div
          class="flex items-center justify-between p-2.5 bg-purple-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-200 group cursor-pointer select-none"
        >
          <div class="flex items-center">
            <i
              class="material-icons text-purple-500 transition-colors duration-300 group-hover:text-purple-700"
              >notifications</i
            >
            <span
              class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
              >Notificaciones</span
            >
          </div>
          <div
            class="bg-purple-500 text-white rounded-lg h-6 w-8 flex items-center justify-center text-sm font-semibold"
          >
            12
          </div>
        </div>

        <!-- Ajustes -->
        <div
          class="flex items-center p-2.5 bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-purple-100 group cursor-pointer select-none"
        >
          <i
            class="material-icons text-gray-600 transition-colors duration-300 group-hover:text-purple-500"
            >settings</i
          >
          <span
            class="ml-4 text-gray-600 text-sm whitespace-nowrap overflow-hidden font-jakarta transition-colors duration-300 group-hover:text-slate-900"
            >Más</span
          >
        </div>
      </nav>

      <!-- <div class="mt-auto">
        <hr class="border-gray-300 mb-5 my-1" />

        <div
          class="flex items-center mt-4 p-2 bg-white rounded-lg shadow-lg truncate"
        >
          <div class="flex-1 flex items-center">
            <div
              class="w-12 h-12 rounded-full border-2 border-purple-500 overflow-hidden hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt="Profile Image"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="ml-4 flex-1 cursor-pointer select-none hidden sm:block">
              <h3
                class="text-gray-600 font-medium text-sm truncate font-jakarta"
              >
                Brayan Capa M.
              </h3>
              <p class="text-gray-500 text-xs truncate font-jakarta">
                admin@gmail.com
              </p>
            </div>
          </div>

          <div
            x-data="{ active: false, rotated: false }"
            class="cursor-pointer select-none relative flex items-center justify-center w-full"
          >
            <div
              :class="active ?: 'border-transparent'"
              class="p-2 inline-flex items-center justify-center transition-transform duration-500"
              @click="
                rotated = !rotated;
                active = true;
              "
              @click.away="active = false"
            >
              <i
                :class="rotated ? 'transform rotate-180' : ''"
                class="material-icons text-gray-600 transition-transform duration-500"
              >
                menu_open
              </i>
            </div>
          </div>
        </div>
      </div> -->
    </header>

    <!-- Main content (4/5 de la pantalla) -->
    <main class="w-full">
      <div
        class="flex h-screen overflow-y-hidden bg-white"
        x-data="setup()"
        x-init="$refs.loading.classList.add('hidden')"
      >
        <!-- Loading screen -->
        

        <!-- Sidebar backdrop -->
        <div
          x-show.in.out.opacity="isSidebarOpen"
          class="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
          style="
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
          "
        ></div>

        <div class="flex flex-col flex-1 h-full overflow-hidden">
          <!-- Navbar -->
          <header
            class="flex-shrink-0 border-0 shadow-sm"
            style="background-color: #f3f4f6"
          >
            <div class="flex items-center justify-between p-4">
              <!-- Icono de menú -->
              <div
                x-data="{ active: false, rotated: false }"
                class="cursor-pointer select-none relative"
              >
                <div
                  :class="
                    active
                      ? 'bg-gray-100 rounded-md border border-blue-300'
                      : 'border-transparent'
                  "
                  class="p-2 inline-flex items-center justify-center transition-transform duration-500"
                  @click="
                    rotated = !rotated;
                    active = true;
                  "
                  @click.away="active = false"
                >
                  <i
                    :class="rotated ? 'transform rotate-180' : ''"
                    class="material-icons text-gray-600 transition-transform duration-500"
                  >
                    menu_open
                  </i>
                </div>
              </div>

              <!-- Fecha y Hora -->
              <div
                class="text-center mx-auto flex items-center justify-center text-slate-700"
              >
                <div class="ml-auto">
                  <h8 class="text-xs font-semibold tracking-wider uppercase">
                    <strong class="font-outfit" x-text="formattedDate"></strong>
                  </h8>
                  <div class="reloj text-xs">
                    <span
                      class="font-jakarta"
                      id="tiempo"
                      x-text="formattedTime"
                    ></span>
                  </div>
                </div>
              </div>

              <!-- NabVar -->
              <NavBar />
            </div>
          </header>

          <!-- Main content -->
          <main
            id="dynamicContent"
            class="flex-1 max-h-full p-3 overflow-hidden overflow-y-scroll w-full"
          >
          <RouterView />
          </main>

          <footer class="sticky-footer bg-white py-2">
            <div class="container mx-auto my-auto">
              <div class="copyright text-center my-auto text-xs text-gray-500">
                <span
                  >&copy; Todos los derechos reservados
                  <a
                    href="https://walkyngamingyt.com/"
                    target="_blank"
                    class="text-blue-500"
                    >Walkyn Gaming</a
                  ></span
                >
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
</script>

<style lang="scss" scoped>

</style>