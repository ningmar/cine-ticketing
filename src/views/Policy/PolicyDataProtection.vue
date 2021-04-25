<template>
  <section class="max-w-6xl mx-auto mb-6">
    <div class="px-4 mb-12 text-center md:px-10">
      <ul class="py-8 text-xs">
        <li class="inline px-1">Fidelizados</li>
        <li class="inline px-1">/</li>
        <li class="inline px-1 text-gray-500">Bases</li>
      </ul>
      <h3
        class="pb-12 mb-12 text-3xl font-bold tracking-widest uppercase lg:text-6xl"
      >
        Información básica sobre protección de datos
      </h3>
    </div>

    <div class="px-4 md:px-10">
      <p class="mb-4 text-sm font-extrabold text-center">
        Tratamiento:
        <span v-if="isContact">FORMULARIO DE CONTACTO</span>
        <span v-if="isCurriculum">CURRICULUMS</span>
      </p>
      <table class="w-full text-sm text-center border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th colspan="2" class="col-title">
              <p class="uppercase">
                Información básica sobre protección de datos
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-title">Responsable</td>
            <td class="col-content">
              <ul>
                <li>GESTION CINEMATOGRAFICA S.L.</li>
                <li>PROYECCIONES ANDALUCIA S.L.</li>
                <li>JINAMAR FILMS S.L.</li>
                <li>ALCALA NORTE MULTIPLEX S.L.</li>
                <li>CINES ONUBENSES S.L.</li>
                <li>CINES TALAVERANOS S.L.</li>
                <li>CINES MALLORQUINES S.L.</li>
                <li>INICIATIVA CINEMATOGRAFICA ANDALUZA S.L.</li>
                <li>PROYECCIONES CINEMATOGRAFICAS ALHSUR</li>
                <li>EXPINMOBEL, S.A.</li>
                <li>Saraqusta S.L.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="col-title">Finalidad</td>
            <td v-if="isContact" class="col-content">
              Datos utilizados con la finalidad de gestionar las consultas
              planteadas a través del formulario de contacto de la página web,
              mediante su tratamiento como FORMULARIO DE CONTACTO
            </td>
            <td v-if="isCurriculum" class="col-content">
              Datos utilizados con la finalidad de recepcionar, custodiar y
              gestionar candidaturas de empleo mediante su tratamiento como
              “CURRÍCULUMS”.
            </td>
          </tr>
          <tr>
            <td class="col-title">Legitimación</td>
            <td class="col-content">
              La base legal para el tratamiento de su datos es su consentimiento
              explícito, prestado con la marcación del checkbox
            </td>
          </tr>
          <tr>
            <td class="col-title">Destinatarios</td>
            <td class="col-content">
              Sus datos podrán ser comunicados a terceros (Otras empresas de
              GRUPO ARTESIETE) con la finalidad de gestionar la compra. No se
              transferirán datos fuera de la UE.
            </td>
          </tr>
          <tr>
            <td class="col-title">Derechos</td>
            <td class="col-content">
              Acceder, rectificar y suprimir los datos así como otros derechos,
              como se explica en la información adicional enviando un e-mail a:
              datos@artesiete.es
            </td>
          </tr>
          <tr>
            <td class="col-title">Procedencia de los datos</td>
            <td class="col-content">
              Los datos personales tratados proceden de : El propio interesado o
              su representante
            </td>
          </tr>
          <tr>
            <td class="col-title">Información adicional</td>
            <td class="col-content">
              Puede consultar la información adicional y detallada sobre
              Protección de Datos https://artesiete.es/Legal
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PolicyDataProtection',
  computed: {
    isContact() {
      return this.$route.name === 'data-protection-contact'
    },
    isCurriculum() {
      return this.$route.name === 'data-protection-curriculum'
    }
  }
}
</script>

<style scoped>
.col-title {
  @apply w-1/6 px-2 pt-4 pb-2 font-extrabold border border-black align-top;
}

.col-content {
  @apply w-5/6 px-2 pt-4 pb-2 border border-black;
}
</style>
