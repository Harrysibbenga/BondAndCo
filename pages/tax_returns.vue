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
          url: 'tax_return.png',
          title: 'Tax returns and self-assessment',
        },
        body: {
          left: true,
          url: 'tax_returns2.png',
          bullets: [
            'Tax Returns can be completed for:',
            'Individuals and sole traders',
            'Partnerships',
            'Limited Companies',
          ],
          exten: {
            active: true,
            title:
              'The tax world is full of penalties and HMRC enquiry powers are extensive. It’s important that:',
            bullets: [
              'Returns are correctly completed',
              'They are filed on time',
              'All backup records are retained for the appropriate period of time',
            ],
          },
          exten2: {
            active: true,
            title: 'We can also assist with:',
            bullets: [
              'Advice on your tax liabilities',
              'Negotiating with HMRC if necessary',
              'Considering tax planning opportunities',
              'Completing all the necessary tax computations',
              'Dealing with all correspondence from HMRC.',
            ],
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
