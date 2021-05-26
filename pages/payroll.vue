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
          url: 'payroll.png',
          title: 'Payroll',
        },
        body: {
          left: false,
          url: 'payroll2.png',
          bullets: [],
          exten: {
            active: true,
            title:
              'Payroll can be complex and needs to be done on time to avoid penalties/fines and to ensure your employees are paid on time. ',
            bullets: [],
          },
          exten2: {
            active: true,
            title: 'We can deliver a service which provides the following:',
            bullets: [
              'Employee payslips',
              'Monthly summaries',
              'Departmental reports',
              'Dealing with leavers and starters',
              'Provision of analysis of staff costs',
              'Real Time Information (RTI) PAYE returns for HMRC',
              'Assistance with automated payment set-up to your employees',
              'CIS returns',
              'Year-end employee summary P60s',
              'P11D and P9D benefit and expenses returns',
            ],
          },
          exten3: {
            active: true,
            title: 'We can also work with you on other areas, to include:',
            bullets: [
              'Tax efficient remuneration strategies for you as a business owner',
              'Company car and van strategies',
              'Benefits planning',
            ],
          },
        },
      },
    }
  },
}
</script>
