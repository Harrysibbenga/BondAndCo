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
          url: 'book_keeping.png',
          title: 'Book Keeping',
        },
        body: {
          left: true,
          url: 'book_keeping2.png',
          bullets: [
            'Take all your invoices, bank statements etc. off of your hands',
            'Process the information in our book-keeping systems',
          ],
          exten: {
            active: true,
            title: 'We use this processed information to prepare:',
            bullets: [
              'Management Accounts',
              'VAT Returns',
              'Key Performance Indicators',
              'End of Year Accounts',
              'Estimated Tax Liabilities, so there’s no end of year surprises',
            ],
          },
          exten2: {
            active: false,
            title: '',
            bullets: [],
          },
          exten3: {
            active: false,
            title: '',
            bullets: [],
          },
        },
      },
    }
  },
}
</script>
