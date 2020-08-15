class Return {

    constructor (s, thises, error="none") {
        this.status = s;
        this.thises = thises;
        this.error = error;
    }

    finnally (c=function(){}) {

        if (s == false) {

            c(this.thises)

        }

        return this;

    }

    then (c=function(){}) {

        c()

        return this;

    }

    catch (c=function(error){}) {

        if (s == true) {

            c(this.error)

        }

        return this;

    }

}

module.exports = Return