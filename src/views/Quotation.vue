<template>
  <div class="about">
    <div class="title">
      <h5>
        <b>QUOTATION</b>
      </h5>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <!-- <div class="logo">
        <img src="../assets/logo.jpg" class="center" />
      </div>-->

      <!-- Date and Bill number -->
      <!-- <div class="row">
        <div class="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Bill No:</span>
            </div>
            <div class="custom-file">
              <input type="text" class="form-control" />
            </div>
          </div>
        <div class="col-md-6">
          <h6>
            <b>
              #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
              <br />East Tambaram,Selaiyur, Chennai-600 073.
              <br />Phone: 9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail: puja_prince@yahoo.com
            </b>
          </h6>
        </div>
        <div class="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Date:</span>
            </div>
            <div class="custom-file">
              <input type="date" class="form-control" />
            </div>
          </div>
        </div>
      </div>-->

      <!-- Party GSTIN and PostOffice Number -->
      <!-- <div class="row">
        <div class="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Party GSTIN:</span>
            </div>
            <div class="custom-file">
              <input type="number" class="form-control" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <b>
            <p class="text-xs-center">
              GSTIN No. 33AEJPU3179H1Z5
              <br />LUT ARN NO. & DATE: AD3303190087436(29-03-19)
            </p>
          </b>
        </div>
        <div class="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">PO No:</span>
            </div>
            <div class="custom-file">
              <input type="number" class="form-control" />
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <div v-if="step==1">
      <table class="table">
        <thead class="thead-white">
          <tr>
            <th colspan="7">
              <img src="../assets/logo.jpg" class="center" />
            </th>
          </tr>
          <tr>
            <th colspan="3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Party GSTIN:</span>
                </div>
                <div class="custom-file">
                  <input type="text" v-model="gstin" class="form-control" />
                </div>
              </div>
            </th>

            <th>
              <h6>
                <b>
                  #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
                  <br />East Tambaram,Selaiyur, Chennai-600 073.
                  <br />Phone:
                  9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail:
                  puja_prince@yahoo.com
                  <br />GSTIN No. 33AEJPU3179H1Z5
                  <br />LUT ARN NO. & DATE: AD330520002614S(15/05/2020)
                </b>
              </h6>
            </th>
            <th colspan="3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date:</span>
                </div>
                <div class="custom-file">
                  <input type="date" v-model="date" class="form-control" />
                </div>
              </div>
            </th>
          </tr>

          <tr></tr>
          <tr>
            <th colspan="7">
              <div class="row">
                <div class="col-md-12">
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">To:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="to"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div class="col-md-6"></div>
              </div>
            </th>
          </tr>
          <tr>
            <th scope="col" style="width:5%"></th>
            <th scope="col" style="width:5%">SlNo</th>
            <th scope="col" style="width:10%">HSN Code</th>
            <th scope="col">Particulars</th>
            <th scope="col" style="width:10%">Quantity</th>
            <th scope="col" style="width:10%">Rate</th>
            <th scope="col" style="width:10%">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(janam,sam) in items">
            <td>
              <button class="btn" @click="deleterow(sam)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
            <td>{{ sam + 1 }}</td>
            <td>
              <input class="form-control" v-model="janam.HSNCode" />
            </td>
            <td>
              <input class="form-control" v-model="janam.Particulars" />
            </td>
            <td>
              <input class="form-control" type="number" v-model="janam.Quantity" />
            </td>
            <td>
              <input class="form-control" v-model="janam.Rate" />
            </td>
            <td>{{ janam.Quantity * janam.Rate | currency }}</td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td>
              <b>Total:</b>
            </td>
            <td>Rs.{{ total | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="step==2">
      <table class="table">
        <thead>
          <tr>
            <th style="border-color:white;padding: 0px;" colspan="6">
              <img src="../assets/logo.jpg" class="center" />
            </th>
          </tr>
          <tr>
            <th style="border-color:white;padding: 0px;" colspan="2"></th>
            <th style="border-color:white;padding: 0px;" colspan="2">
              <h6>
                <b>
                  #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
                  <br />East Tambaram,Selaiyur, Chennai-600 073.
                  <br />Phone:
                  9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail:
                  puja_prince@yahoo.com
                </b>
              </h6>
            </th>
            <th style="border-color:white;padding: 0px;" colspan="2"></th>
          </tr>

          <tr>
            <th style="border-color:white;padding: 0px;" colspan="2">
              <div class="form-group" style="text-align:left">
                <label for="exampleInputEmail1">Party GSTIN:</label>
                <input type="text" v-model="gstin" class="form-control bold-outline" />
              </div>
            </th>
            <th style="border-color:white;padding: 0px;" colspan="2">
              <h6>
                <b>
                  <p class="text-xs-center">
                    GSTIN No. 33AEJPU3179H1Z5
                    <br />LUT ARN NO. & DATE: AD330520002614S(15/05/2020)
                  </p>
                </b>
              </h6>
            </th>
            <th style="border-color:white;padding: 0px;" colspan="2">
              <div class="form-group" style="text-align:left">
                <label for="exampleInputEmail1">Date:</label>

                <div class="custom-file">
                  <input type="date" v-model="date" class="form-control bold-outline" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th style="border-color:white;padding: 0px;" colspan="7">
              <div class="form-group" style="text-align:left">
                <label for="exampleInputEmail1">To:</label>
                <input type="text" v-model="to" class="form-control bold-outline" />
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <table id="bill-final" class="table table-bordered">
        <thead class>
          <tr>
            <th scope="col" style="width:5%">SlNo</th>
            <th scope="col" style="width:10%">HSN Code</th>
            <th scope="col">Particulars</th>
            <th scope="col" style="width:10%">Quantity</th>
            <th scope="col" style="width:10%">Rate</th>
            <th scope="col" style="width:10%">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(janam,sam) in items">
            <td>{{ sam + 1 }}</td>
            <td>{{ janam.HSNCode }}</td>
            <td id="Particular">{{ janam.Particulars }}</td>
            <td>{{ janam.Quantity }}</td>
            <td>{{ janam.Rate }}</td>
            <td>{{ janam.Quantity * janam.Rate | currency }}</td>
          </tr>
          <tr>
            <td colspan="4"></td>
            <td>
              <b>Total:</b>
            </td>
            <td>Rs.{{ total | currency }}</td>
          </tr>
        </tbody>
      </table>
      <table class="sign-table table table-bordered">
        <tbody>
          <tr>
            <td>
              <div class="column">
                <u><b>Commercial Terms And Conditions</b></u><br>
                Validity: 15 Days from the date of offer.<br>
                Payment: 30 Days from the date of supply.
              </div>
            </td>
            <td>
              <div class="column">
                <img src="../../public/sign.jpg" />
                <br /><B>For Puja Electricals</B>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="step==1">
      <div>
        <button type="button" class="btn btn-primary plus" @click="addrow(1)">Add 1</button>
        <button type="button" class="btn btn-primary plus" @click="addrow(5)">Add 5</button>
      </div>
      <div>
        <button type="button" class="btn btn-success next" @click="preview">
          <span>Next</span>
        </button>
      </div>
    </div>
    <div v-else-if="step==2">
      <div>
        <button
          v-if="backButtonVisible"
          type="button"
          class="btn btn-warning back btn-lg"
          @click="back"
        >Back</button>
      </div>
      <div>
        <button
          v-on:click="isHidden = true"
          type="button"
          class="btn btn-info print btn-lg"
          style="vertical-align:middle"
          @click="print"
        >Print</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bill",
  components: {},
  data: function() {
    return {
      billNo: "",
      date: "",
      gstin: "",
      pono: "",
      to: "",
      items: [
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        }
      ],
      step: 1,
      backButtonVisible: true
    };
  },
  mounted() {
    let date = new Date();
    this.billNo = date.getFullYear() + "/";
  },
  methods: {
    addrow(count) {
      for (let i = 0; i < count; i++) {
        let item = {
          HSNCode: "",
          Particulars: "",
          Quantity: 0,
          Rate: 0,
          Amount: ""
        };

        this.items.push(item);
      }
    },
    deleterow(index) {
      this.items.splice(index, 1);
    },
    preview() {
      this.step = 2;
    },
    back() {
      this.step = 1;
    },
    print() {
      this.backButtonVisible = false;
      this.$nextTick().then(() => {
        window.print();
        this.backButtonVisible = true;
      });
    }
  },
  filters: {
    currency(value) {
      return value.toFixed(2);
    }
  },
  computed: {
    total() {
      return this.items.reduce((acc, item) => {
        return acc + item.Quantity * item.Rate;
      }, 0);
    }
  }
};
</script>

<style>
.about {
  padding-left: 10px;
  padding-right: 10px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.btn {
  background-color: dodgerBlue;
  color: white;
  position: relative;
  margin-left: 14px;
  bottom: 10px;
  font-size: 15px !important;
  box-shadow: -2px 4px 4px 2px #666;
  transform: translateY(4px);
  border-radius: 50%;
}

.btn:hover {
  background-color: red;
}

.btn:active {
  box-shadow: 0px 1px 4px 2px #666;
  border: none;
}

.plus {
  position: relative;
  bottom: -50px;
  float: left;
  margin-left: 14px;
  font-size: 20px !important;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  border-radius: 15px;
}

.plus:focus {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  border-radius: 15px;
}

.next {
  position: relative;
  bottom: -50px;
  float: right;
  font-size: 20px !important;
  margin-right: 15px;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  border-radius: 15px;
  transition: all 0.5s;
}

.back {
  position: relative;
  bottom: -50px;
  float: left;
  margin-left: 15px;
  font-size: 20px !important;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  border-radius: 15px;
}

.print {
  position: relative;
  bottom: -50px;
  float: right;
  margin-right: 15px;
  font-size: 20px !important;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  border-radius: 15px;
}

.print:hover {
  background-color: white;
  border: white;
}

.thead-white {
  background-color: white;
}

.sign-table {
  width: 100%;
}

h5 {
  color: rgb(70, 70, 70);
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.form-group {
  margin: 0px !important;
}

thead.thead-white tr:nth-child(1) th {
  padding: 0px;
  border-color: white;
}

thead.thead-white tr:nth-child(2) th {
  padding: 0px;
  border-color: white;
}

thead.thead-white tr:nth-child(3) th {
  padding: 0px;
  border-color: white;
}

thead.thead-white tr:nth-child(4) th {
  padding: 0px;
  border-color: white;
}

* {
    font-size: 20px;
  }

  #bill-final td, #bill-final th {
    border: 2px solid black !important;
  }

  .sign-table, .sign-table td, .bold-outline {
    border: 2px solid black !important;
  }

  #Particular {
    text-align: left;
  }
</style>