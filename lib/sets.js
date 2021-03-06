/**
 * Sets methods
 */

Set.prototype.addValues = function() {
  for ( let value of Object.keys(arguments).map(key => arguments[key]) ) {
    this.add(value);
  }
  return this;
}


Set.prototype.addList = function(list) {
  for ( let value of list) {
    this.add(value);
  }
  return this;
}


Set.prototype.deleteList = function(list) {
  for ( let value of list ) {
    if( this.delete(value) == false) return false;
  }
  return true;
}


Set.prototype.deleteValues = function() {
  for ( let value of Object.keys(arguments).map(key => arguments[key]) ) {
    if( this.delete(value) == false ) return false;
  }
  return true;
}


Set.prototype.getLength = function() {
  return this.size;
}


Set.prototype.remove = function(value) {
  this.delete(value);
  return this;
}


Set.prototype.removeList = function(list) {
  this.deleteList(list);
  return this;
}


Set.prototype.removeValues = function() {
  for ( let value of Object.keys(arguments).map(key => arguments[key]) ) {
    this.delete(value);
  }
  return this;
}


Set.prototype.purge = function() {
  this.clear();
  return this;
}


Set.prototype.toArray = function() {
  return Array.from(this);
}
