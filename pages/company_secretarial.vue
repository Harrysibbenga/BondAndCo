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
          url: 'company_secretarial.png',
          title: 'Company Secretarial',
        },
        body: {
          left: true,
          url: 'company_secretarial2.png',
          bullets: [],
          exten: {
            active: true,
            title:
              'We can help you with your company secretarial responsibilities as follows:',
            bullets: [
              'Registered office facilities',
              'Maintenance of statutory registers',
              'Submission of statutory documents',
              'Giving notice of General Meetings',
              'Drafting agendas for company meetings',
              'Preparing Minutes of Meetings',
              'Completion of share transfer forms',
              'Preparation of share certificates',
              'Carrying out company searches',
              'Filing of Confirmation Statement',
              'Acting as Company Secretary',
              'We can also refer you to one of our panel of trusted legal advisers in respect of any company law matters',
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
