<template>
  <div class="about">
    <div class="title">
      <h3>
        <b>TAX INVOICE/CREDIT BILL</b>
      </h3>
      <div class="logo">
        <img src="../assets/logo.jpg" class="center" />
      </div>
      <h5>
        <b>
          #3, Amman Complex, 4th Ranganathan Nagar,Agaram Main Road,
          <br />East Tambaram,Selaiyur, Chennai-600 073.
          <br />Phone: 9787419494 &nbsp;&nbsp;&nbsp;&nbsp; EMail: puja_prince@yahoo.com
          <br />
          <p class="text-xs-center">GSTIN No. 33AEJPU3179H1Z5</p>
        </b>
        <b>
          <td>
            <p class="text-lg-left">
              <br />Date:
              <br />Bill No:
            </p>
          </td>
          <td>
            <p class="text-lg-right">
              <br />Party GSTIN:
              <br />PO No:
            </p>
          </td>
          <td>
            <br />TO:
          </td>
          <br />
        </b>
      </h5>
    </div>
    <div>
      <table class="table">
        <thead class="thead-green">
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
            <td>
              <input class="form-control" v-model="janam.Rate" />
            </td>
            <td>{{janam.Quantity * janam.Rate | currency}}</td>
          </tr>
          <tr>
            <td colspan="6"></td>
            <td>Total:Rs.{{ total | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div>
        <button type="button" class="btn btn-primary plus" @click="addrow">+</button>
      </div>
      <div>
        <button type="button" class="btn btn-secondary" @click="preview">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  components: {},
  data: function() {
    return {
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
      ]
    };
  },
  mounted() {},
  methods: {
    addrow() {
      var arraylength = this.items.length;
      var item = {
        HSNCode: "",
        Particulars: "",
        Quantity: 0,
        Rate: 0,
        Amount: ""
      };
      this.items.push(item);
    },
    deleterow(index) {
      alert(index);
      this.items.splice(index, 1);
    },
    preview() {}
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.plus {
  float: left;
  margin-left: 14px;
}
.thead-green {
  background-color: rgb(191, 194, 188);
}

</style>

