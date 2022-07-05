<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import { ref } from "vue"

const checkboxComments = ref<string>("");
const checkboxQrcode = ref<string>("")

function change(){
  console.log(checkboxQrcode + '' + checkboxComments)
}
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="Configurações" subtitle="Deixe seu sistema com seu estilo." />

        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit="change">
              <div class="overflow-hidden shadow sm:rounded-md">
                <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <fieldset>
                    <div class="text-base font-medium text-gray-900" aria-hidden="true">Configurações de tela </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" v-model="checkboxComments"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                        </div>

                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comentários</label>
                          <p class="text-gray-500">Liberar comentários na tela inicial.</p>
                        </div>
                      </div>

                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="candidates" name="candidates" type="checkbox"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" v-model="checkboxQrcode">
                        </div>

                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">QR-CODE</label>
                          <p class="text-gray-500">Autorizar qr-code em tela inicial.</p>
                        </div>
                      </div>

                    </div>
                  </fieldset>
                  <fieldset>
                    <legend class="text-base font-medium text-gray-900 contents">Setor de atuação</legend>
                    <p class="text-sm text-gray-500">Escolha como será configurado suas informações.</p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input id="push-everything" name="push-notifications" type="radio"
                          class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
                        <label for="push-everything" class="block ml-3 text-sm font-medium text-gray-700">Administrativo
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push-email" name="push-notifications" type="radio"
                          class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
                        <label for="push-email" class="block ml-3 text-sm font-medium text-gray-700"> Desenvolivmento
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push-nothing" name="push-notifications" type="radio"
                          class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
                        <label for="push-nothing" class="block ml-3 text-sm font-medium text-gray-700">Suporte
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Salvar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>
