<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
      class="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full sm:flex"
    >
      <div class="w-full sm:w-full p-8 bg-white">
        <div>
          <h1 class="text-xl font-bold font-fredoka-one">BUSINESS MANAGER</h1>
          <p class="text-xs text-gray-500 mb-6">Optimiza Controla Prospera</p>
        </div>
        <div class="flex items-center mb-6">
          <img
            src="/img/ico-logo.png"
            alt="Karupin Logo"
            width="50"
            height="50"
            class="mr-4"
          />
          <div>
            <h2 class="text-xl font-bold text-red-600">TU LOGO AQUÍ</h2>
            <p class="text-sm text-zinc-500">Tu eslogan aquí</p>
          </div>
        </div>
        <h3 class="text-xl font-bold mb-4">INICIAR SESIÓN</h3>
        <form>
          <div class="mb-4">
            <label class="block text-zinc-700 text-sm mb-2" for="username"
              >Usuario</label
            >
            <div class="flex items-center border-b border-zinc-300 py-2">
              <span class="material-icons text-zinc-500 mr-2">person</span>
              <input
                class="appearance-none bg-transparent border-none w-full text-zinc-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 text-sm"
                type="text"
                placeholder="Ingrese su usuario"
                aria-label="Usuario"
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-zinc-700 text-sm mb-2" for="password"
              >Contraseña</label
            >
            <div class="flex items-center border-b border-zinc-300 py-2">
              <span class="material-icons text-zinc-500 mr-2">lock</span>
              <input
                class="appearance-none bg-transparent border-none w-full text-zinc-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 text-sm"
                type="password"
                placeholder="••••••••"
                aria-label="Contraseña"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <a
              class="bg-pink-700 text-white py-2 px-8 rounded-lg flex items-center"
              @click="$router.push({ name: 'Home' })"
            >
              <span class="material-icons mr-2">login</span> Iniciar
            </a>

            <button
              class="bg-pink-700 text-white py-2 px-8 rounded-lg flex items-center"
            >
              <span class="material-icons mr-2">shopping_cart</span> Comprar
            </button>
          </div>
        </form>
      </div>
      <img
        src="/img/panel.jpg"
        alt="Image"
        class="hidden md:block w-1/2 object-cover rounded-l-lg h-full pl-36"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
