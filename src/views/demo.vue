<template>
  <div class="about">
    <div class="title">
      <h5>
        <b>DELIVERY CHALLAN</b>
      </h5>
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
        <thead class="thead-green">
          <tr>
            <th colspan="7">
              <img src="../assets/logo.jpg" class="center" />
            </th>
          </tr>
          <tr>
            <th colspan="3">
              <div class="form-group">
                <label for="exampleFormControlInput1">DC No:</label>
                <input type="number" class="form-control" placeholder="2019\" />
              </div>
            </th>
            <th>
              <h6>
                <b>
                  #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
                  <br />East Tambaram,Selaiyur, Chennai-600 073.
                  <br />Phone: 9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail: puja_prince@yahoo.com
                </b>
              </h6>
            </th>
            <th colspan="3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date:</span>
                </div>
                <div class="custom-file">
                  <input type="date" class="form-control" />
                </div>
              </div>
            </th>
          </tr>

          <tr>
            <th colspan="3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Party GSTIN:</span>
                </div>
                <div class="custom-file">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </th>
            <th>
              <h6>
                <b>
                  <p class="text-xs-center">
                    GSTIN No. 33AEJPU3179H1Z5
                    <br />LUT ARN NO. & DATE: AD3303190087436(29-03-19)
                  </p>
                </b>
              </h6>
            </th>
            <th colspan="3">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">PO No:</span>
                </div>
                <div class="custom-file">
                  <input type="number" class="form-control" />
                </div>
              </div>
            </th>
          </tr>
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
            <th scope="col" style="width:5%">SINo</th>
            <th scope="col" style="width:10%">HSN Code</th>
            <th scope="col">Particulars</th>
            <th scope="col" style="width:10%">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for-key="(janam,sam) in items">
            <td>
              <button type="button" class="btn btn-primary plus" @click="deleterow(sam)">-</button>
            </td>
            <td>{{sam+1}}</td>
            <td>
              <input class="form-control" v-model="janam.HSNCode" />
            </td>
            <td>
              <input class="form-control" v-model="janam.Particulars" />
            </td>
            <td>
              <input class="form-control" type="number" v-model="janam.Quantity" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="step==2">
      <table class="table table-bordered">
        <thead class="thead-green">
          <tr>
            <th colspan="6">
              <img src="../assets/logo.jpg" class="center" />
            </th>
          </tr>
          <tr>
            <th colspan="2">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Bill No:</span>
                </div>
                <div class="custom-file">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </th>
            <th colspan="2">
              <h6>
                <b>
                  #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
                  <br />East Tambaram,Selaiyur, Chennai-600 073.
                  <br />Phone: 9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail: puja_prince@yahoo.com
                </b>
              </h6>
            </th>
            <th colspan="2">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date:</span>
                </div>
                <div class="custom-file">
                  <input type="date" class="form-control" />
                </div>
              </div>
            </th>
          </tr>

          <tr>
            <th colspan="2">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Party GSTIN:</span>
                </div>
                <div class="custom-file">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </th>
            <th colspan="2">
              <h6>
                <b>
                  <p class="text-xs-center">
                    GSTIN No. 33AEJPU3179H1Z5
                    <br />LUT ARN NO. & DATE: AD3303190087436(29-03-19)
                  </p>
                </b>
              </h6>
            </th>
            <th colspan="2">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">PO No:</span>
                </div>
                <div class="custom-file">
                  <input type="number" class="form-control" />
                </div>
              </div>
            </th>
          </tr>
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
            <th scope="col" style="width:5%">SINo</th>
            <th scope="col" style="width:10%">HSN Code</th>
            <th scope="col">Particulars</th>
            <th scope="col" style="width:10%">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for-key="(janam,sam) in items">
            <td>{{sam+1}}</td>
            <td>{{janam.HSNCode}}</td>
            <td>{{janam.Particulars}}</td>
            <td>{{janam.Quantity}}</td>
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
        <button type="button" class="btn btn-success" @click="preview">Next</button>
      </div>
    </div>
    <div v-else-if="step==2">
      <div>
        <button type="button" class="btn btn-warning back btn-lg" @click="back">Back</button>
      </div>
      <div>
        <button
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
  name: "dc",
  components: {},
  data: function() {
    return {
      items: [
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
        },
        {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
        }
      ],
      step: 1
    };
  },
  mounted() {},
  methods: {
    addrow(count) {
      for (let i = 0; i < count; i++) {
        let item = {
          HSNCode: "",
          Particulars: "",
          Quantity: 0
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
      window.print();
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

.plus {
  float: left;
  margin-left: 14px;
}

.back {
  float: left;
  margin-left: 15px;
}

.print {
  float: right;
  margin-right: 15px;
}

.thead-green {
  background-color: white;
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
</style>