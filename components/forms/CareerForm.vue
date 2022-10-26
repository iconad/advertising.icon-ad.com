<template>
  <div>
       <form @submit.prevent="submitFormTemp" class="form">

        <div class="form-element">
          <input type="text" v-model="form.name" class="form-input" placeholder="Full Name">
        </div>
        <!-- form element -->

        <div class="form-element">
          <client-only>
            <vue-tel-input
              class="form-element"
              :valid-characters-only="true"
              @input="onInput"
              v-bind="bindProps"
              v-model="form.phone"
            ></vue-tel-input>
          </client-only>
        </div>
        <!-- form element -->

       <div class="form-element">
          <input type="text" v-model="form.email" class="form-input" placeholder="Email">
        </div>
        <!-- form element -->

        <div class="form-element">
          <input type="file" class="form-input" placeholder="Upload Your Resume">
        </div>
        <!-- form element -->

        <div class="form-element">
          <textarea type="text" class="form-input" v-model="form.message" placeholder="Message" rows="5"></textarea>
        </div>

        <div v-if="!isLoading" class="form-element flex justify-center">
          <input type="submit" class="mx-auto form-button rainbow cursor-pointer hover:bg-opacity-100" value="Submit">
        </div>
        <div v-else>
          <span class="loader">L &nbsp; ading</span>
        </div>
        <!-- form element -->

      </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        dropFiles: {},
        formToken: "",
        bindProps: {
          mode: "international",
          defaultCountry: "AE",
          placeholder: "Phone number",
          required: true,
          autocomplete: "on",
          styleClasses:"form-input"
        },
        phone: {
          number: "",
          valid: false,
          country: undefined
        },

        form: {
          name: "",
          email: "",
          subject: "Join our team application",
          message: "",
          phone: ""
        },


        errors: {},
        isSubmitted: false
      }
    },
    methods: {

      onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
      },


      async submitFormTemp() {
        let config = {
          headers: {
            Accept: "json",
            "Content-Type": "application/json"
          }
        };

        this.isLoading = true;

        this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
              webform_id: "join_the_team",
              name: this.form.name,
              email: this.form.email,
              subject: this.form.subject,
              phone: this.form.phone,
              message: this.form.message,
            },
            config
          )
          .then(response => {
            this.isLoading = false;
            if (response.sid) {
              this.form = []
              this.$router.push({
                path: "/thank-you"
              });
            }
          })
          .catch(error => {
            this.errors = error.response.data.error
            this.isLoading = false
          });
      },

    submitForm () {

      this.$axios
        .$post(
          "https://drupal.icon-ad.com/webform_rest/join_the_team/upload/resume?_format=json",
          this.dropFiles,
          {
            headers: {
            Accept: "json",
              "Content-Type": "application/octet-stream",
              "Content-Disposition":
                'file; filename="' + this.dropFiles.name + '"'
            }
          }
        )
        .then(response => {
          // this.submitForm(response);
          console.log(response);
        });
      },

      // async submitForm(response) {

      //   let config = {
      //     headers: {
      //       Accept: "json",
      //       "Content-Type": "application/json"
      //     }
      //   };

      //   this.isLoading = true;

      //   this.$axios
      //     .$post(
      //       `https://drupal.icon-ad.com/webform_rest/submit?_format=json`,
      //       {
      //         webform_id: "join_the_team",
      //         name: this.form.name,
      //         email: this.form.email,
      //         message: this.form.message,
      //         phone: this.form.phone,
      //         resume: response.data.fid[0].value
      //       },
      //       config
      //     )
      //     .then(response => {
      //       this.isLoading = false;
      //       if (response.data.sid) {
      //         this.$router.push({
      //           path: "/thank-you"
      //         });
      //       }
      //     })
      //     .catch(error => (this.isLoading = false));
      // }


    },



  }
</script>
