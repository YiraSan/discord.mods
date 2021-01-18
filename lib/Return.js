class Return {

    constructor (success, error="none") {
        this.success = success;
        this.error = error;
    }

    finnally (c=function(){}) {

        if (this.success) { c() }

        return this;

    }

    then (c=function(){}) {

        c()

        return this;

    }

    catch (c=function(error){}) {

        if (!this.success) { c(this.error) }

        return this;

    }

}

module.exports = Return