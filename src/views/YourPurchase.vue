<template>
  <div>
    <div class="container text-center ">
      <ul class="pt-10 inline-block text-xs">
        <li class="inline-block mx-2">Check</li>
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

      <div class="flex flex-wrap ">
        <div class="md:w-3/5 w-full px-6 ">
          <form action="/" method="">
            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="sale date"
                >Sale Date *</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="date"
                name="sale date"
                id="sale date"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="cine"
                >Select your cinema</label
              >
              <select
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="email"
                name="cine"
                id="cine"
              >
                <option value="  Cines Artesiete "> Cines Artesiete </option>
                <option value=" Artesiete Lucena"> Artesiete Lucena </option>
                <option value=" Artesiete Alhsur  "> Artesiete Alhsur </option>
                <option value=" Artesiete Holea  "> Artesiete Holea </option>
                <option value="  Artesiete Fan "> Artesiete Fan </option>
                <option value="  Artesiete Las Terrazas ">
                  Artesiete Las Terrazas
                </option>
                <option value=" Artesiete Alcala  "> Artesiete Alcala </option>
                <option value=" Artesiete Segovia  ">
                  Artesiete Segovia
                </option>
                <option value=" Artesiete Ecija "> Artesiete Ecija </option>
                <option value=" Artesiete Los alfares ">
                  Artesiete Los alfares
                </option>
                <option value=" Artesiete Caudalia ">
                  Artesiete Caudalia
                </option>
                <option value=" Artesiete Nalon "> Artesiete Nalon </option>
              </select>
            </div>

            <div class="mb-4">
              <p class="font-bold text-sm">
                Other info, complete at least one of next three fields.
              </p>
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="email"
                >Your Email</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="refrence"
                >Your Refrence</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="refrence"
                id="refrence"
                placeholder="Enter your Refrence"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="Code"
                >Code Barras</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="code"
                id="code"
                placeholder="Enter your Codbar"
              />
            </div>

            <div class="mb-4">
              <label class="text-sm mb-2">
                <input
                  class="text-sm border border-gray-300 py-2.5 px-3"
                  type="checkbox"
                  name="policy"
                  id="policy"
                />
                I have read and accept the privacy politic and data treatment.
                Lealas
                <a href="#" class="text-indigo-400 hover:underline">AQUI</a>
              </label>
            </div>

            <div class="mb-4">
              <input
                type="submit"
                value="Comprobar"
                class="uppercase tracking-widest text-xs font-bold bg-transparent p-3 border border-black hover:bg-black hover:text-white cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div class="md:w-2/5 w-full px-6 pt-8 md:pt-0 ">
          <p class="text-sm text-gray-400 mb-4">
            <br />Use this form to check your purchase and obtain a copy of your
            voucher.
          </p>
          <p class="text-sm text-gray-400 mb-4">
            If your inquiry is about a purchase or the purchase process, use the
            contact section form.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
