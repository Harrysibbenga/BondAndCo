<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <legals :legals="legals"></legals>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      legals: {
        head: {
          url: 'legal_books.png',
          title: 'Legals & Disclaimer',
        },
        body: {
          content: [
            {
              title: 'Disclaimer',
              text: 'The information provided on this web site is of a general nature. It is not a substitute for specific advice in your own circumstances. You are recommended to obtain specific professional advice from a professional accountant before you take any action or refrain from action. <br /> Whilst we endeavour to use reasonable efforts to furnish accurate, complete, reliable, error free and up-to-date information, we do not warrant that it is such. We and our associates disclaim all warranties. <br /> The information can only provide an overview of the regulations in force at the date of publication, and no action should be taken without consulting the detailed legislation or seeking professional advice.',
            },
            {
              title: 'Third Party Sites',
              text: 'This website may contain links to websites operated by third parties. Such links are provided for your convenience only and we have no control over their individual content. We therefore make no warranties or representations as to the accuracy or completeness of any of the information appearing in relation to any linked websites nor as to the suitability or quality of any of their products or services. The provision of links to third party sites does not imply any endorsement of the sites or those that control them.',
            },
            {
              title: 'Intellectual Property',
              text: 'The contents of this website including but not limited to text, images, sound clips, video clips, page layouts, underlying code and software is our or our affiliates property. The content may not be reproduced, transmitted, or stored in whole or in part other than in accordance with the following permissions. <br /> You may print, reproduce, copy, download or store any of the content of this website for your own personal use or use by others within your organisation provided that any such material is reproduced in full without any amendment and that it is not incorporated into any other material whether in hard copy or electronic form. <br /> You specifically agree that you will not use the content of this website for any commercial purpose.',
            },
            {
              title: 'Changes to this policy',
              text: 'We will post any changes to this policy on our website. Those changes will then apply to any future use by you of our website.',
            },
            {
              title: 'Contact Details',
              text: 'All contact details including legal disclosure requirements can be found at the bottom of this page.',
            },
          ],
        },
      },
    }
  },
}
</script>
