<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <service :service="service"></service>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      service: {
        head: {
          url: 'vat.png',
          title: 'VAT',
        },
        body: {
          left: true,
          url: 'vat2.png',
          bullets: [],
          exten: {
            active: true,
            title:
              'It is important to ensure compliance with VAT legislation and make sure you are prepared for any inspection by HMRC.',
            bullets: [],
          },
          exten2: {
            active: true,
            title:
              'We can apply one of the following approaches to assist you:',
            bullets: [
              'We undertake your book-keeping and complete and submit your VAT returns',
              'You provide us with your completed books and we can complete and submit your VAT returns',
              'We provide training so you can complete the VAT return yourself.  We can also provide a service whereby we check this for you prior to submission to HMRC.',
            ],
          },
          exten3: {
            active: true,
            title: 'We can also:',
            bullets: [
              'Apply for VAT registration on your behalf and advise on when you should register (or deregister)',
              'Advise you on the different VAT schemes to help select the most appropriate for your business',
              'Help deal with any HMRC disputes and/or inspections',
            ],
          },
        },
      },
    }
  },
}
</script>
