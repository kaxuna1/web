/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:
*/
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection||[];
    this.itemsPerPage = itemsPerPage;
    return this;


}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    var pages = 0;
    var i = this.itemCount();
    while (i > 0) {
        pages++;
        i -= this.itemsPerPage;
    }
    return pages;

};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    var i = this.itemCount();
    var pindex = pageIndex;
    if (pageIndex > (this.pageCount() - 1)||pageIndex<0) {
        return -1;
    }
    if (pageIndex < (this.pageCount() - 1)) {
        return this.itemsPerPage;
    }
    if (pageIndex === this.pageCount() - 1) {
        return this.itemCount() - this.itemsPerPage * (pageIndex);
    }

};


// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if(this.collection===[])return -1;
    if (itemIndex > this.itemCount() || itemIndex < 0||this.itemCount()===0)
        return -1;
    else {
        var i=0;
        var ii=itemIndex;
        while(ii>0){
            i++;
            ii-=this.itemsPerPage;
        }
        return i;
    }



};

var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1