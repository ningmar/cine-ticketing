<template>
  <div>
    <div class="container text-center ">
      <ul class="py-10 inline-block">
        <li class="inline-block mx-2">check</li>
        <li class="inline-block mx-2">Artesiete</li>
      </ul>
      <div class="py-10 text-xl font-light text-gray-500">
        Check your purchase
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <h3 class=" text-xl font-bold mb-2 text-center">
        Use this form to check your purchase and get a copy of your voucher.
      </h3>

      <div class="flex ">
        <div class="md:w-3/5 ">
          <form action="/" method="">
            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="email"
                >Email</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </form>
        </div>
        <div class="md:w-2/5 w-full"></div>
      </div>
    </div>
  </div>
</template>
