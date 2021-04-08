<template>
  <div>
    <img src="" alt="" />
    <div class="container text-center ">
      <ul class="py-10 inline-block text-xs">
        <li class="inline-block mx-2">Register</li>
        <li class="inline-block mx-2">Artesiete Card</li>
      </ul>
      <div class="pb-12">
        <p class="mb-8 uppercase text-black text-7xl text-bold">Register</p>
        <a
          href="#"
          class="block text-xl text-red-500 font-bold mb-2 text-center hover:underline cursor-pointer"
        >
          If you have already an Artesiete Card, but first time in web, then
          click here!!
        </a>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap ">
        <div class="lg:w-3/4 w-full px-6 ">
          <form action="/" method="">
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
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="email"
                >Email*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="email"
                name="email"
                id="email"
                placeholder="Type your Email"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="email"
                >Conform Email*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="email"
                name="email"
                id="email"
                placeholder="Type your Email"
              />
            </div>

            <div class="flex flex-wrap">
              <div class="sm:w-1/2 w-full">
                <div class="mb-4 sm:mr-4 mr-0">
                  <label
                    class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                    for="password"
                    >Password*</label
                  >
                  <input
                    class="text-sm border border-gray-300 w-full py-2.5 px-3"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div class="sm:w-1/2 w-full">
                <div class="mb-4 sm:ml-4 mr-0">
                  <label
                    class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                    for="password2"
                    >Password*</label
                  >
                  <input
                    class="text-sm border border-gray-300 w-full py-2.5 px-3"
                    type="password"
                    name="password2"
                    id="password2"
                  />
                </div>
              </div>
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="fullName"
                >Full Name*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Type your Name"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="customerID"
                >ID*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="customerID"
                id="customerID"
                placeholder="Type your ID"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="birthDay"
                >BirthDay*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="date"
                name="birthDay"
                id="birthday"
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="phone"
                >Phone*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="number"
                name="phone"
                id="phone"
                placeholder="Type your Phone Number "
              />
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="address"
                >Address*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="address"
                id="address"
                placeholder="Type your Address"
              />
            </div>

            <div class="flex flex-wrap">
              <div class="w-1/5 ">
                <div class="mb-4 mr-4">
                  <label
                    class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                    for="pc"
                    >PC*</label
                  >
                  <input
                    class="text-sm border border-gray-300 w-full py-2.5 px-3"
                    type="text"
                    name="pc"
                    id="pc"
                    placeholder="PC"
                  />
                </div>
              </div>
              <div class="w-4/5 ">
                <div class="mb-4 ml-4">
                  <label
                    class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                    for="city"
                    >City*</label
                  >
                  <input
                    class="text-sm border border-gray-300 w-full py-2.5 px-3"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Type your City"
                  />
                </div>
              </div>
            </div>

            <div class="mb-4">
              <label
                class="text-xs uppercase tracking-widest text-gray-400 pb-2"
                for="state"
                >State*</label
              >
              <input
                class="text-sm border border-gray-300 w-full py-2.5 px-3"
                type="text"
                name="state"
                id="state"
                placeholder="Type your State"
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
                I have read and accept privacy policy and data treatment.
              </label>
            </div>

            <div class="mb-4">
              <input
                type="submit"
                value="Send Data"
                class="uppercase tracking-widest text-xs font-bold bg-transparent p-3 border border-black hover:bg-black hover:text-white cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div class="lg:w-1/4 w-full px-6 pt-8 md:pt-0 pb-8">
          <p class="text-xs p-8 text-center bg-gray-100">
            Start to enjoy the advantages of get an Artesiete Card
          </p>

          <ul>
            <li class="hover:bg-gray-100 px-5 py-3 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class=" inline h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
              >
                <path
                  d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
                  fill="none"
                />
                <circle cx="32" cy="32" r="30" fill="none" />
              </svg>
              <span class="text-sm ml-3">Get the best price</span>
            </li>
            <li class="hover:bg-gray-100 px-5 py-3 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class=" inline h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
              >
                <path
                  d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
                  fill="none"
                />
                <circle cx="32" cy="32" r="30" fill="none" />
              </svg>
              <span class="text-sm ml-3">Collect Points</span>
            </li>
            <li class="hover:bg-gray-100 px-5 py-3 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class=" inline h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
              >
                <path
                  d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
                  fill="none"
                />
                <circle cx="32" cy="32" r="30" fill="none" />
              </svg>
              <span class="text-sm ml-3">Get Awards</span>
            </li>
            <li class="hover:bg-gray-100 px-5 py-3 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class=" inline h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
              >
                <path
                  d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
                  fill="none"
                />
                <circle cx="32" cy="32" r="30" fill="none" />
              </svg>
              <span class="text-sm ml-3"
                >Utiliza también tarjeta que te llegará al email en
                taquillas</span
              >
            </li>
            <li class="hover:bg-gray-100 px-5 py-3 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class=" inline h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
              >
                <path
                  d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
                  fill="none"
                />
                <circle cx="32" cy="32" r="30" fill="none" />
              </svg>
              <span class="text-sm ml-3"
                >También puedes instalarte nuestra APP.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
