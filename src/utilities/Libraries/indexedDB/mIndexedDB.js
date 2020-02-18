// taken from https://github.com/TomAnthony/Min.dexedDB/blob/master/mindexeddb.js
export function MindexedDB(databaseName, objectStores) {
	this.idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
	this.db = databaseName;
	this.objStrs = Array.isArray(objectStores) ? objectStores : [objectStores];
	this.store = "uiEditor";

	this.connect = function(key) {
		var conn = this.idb.open(this.db, 1);
		conn.mdb = this;

		conn.onupgradeneeded = function() {
			var dbl = conn.result;
			this.mdb.objStrs.forEach(element => {
				var store = Object.entries(element);
				dbl.createObjectStore(store[0][0], {keyPath: store[0][1]});
			});
		};

		return new Promise(function(resolve, reject) { 
			conn.onsuccess = function() {
				this.mdb.db = conn.result;
				resolve(this.mdb.db);
			}
			conn.onerror = function() {
				reject(conn.error);
			}
		});
	}

	this.cs = function(store) {
		if (this.db === undefined) throw "[Min.dexedDB] DB not open.";
		var tx = this.db.transaction(store, "readwrite");
		return tx.objectStore(store);
	}

	this.put = function(obj) {
		let os = this.cs(this.store);

		return new Promise(function(resolve, reject) {
			var response = os.put(obj);
			response.onsuccess = function() {
				resolve(response.result);
			};
			response.onerror = function() {
				reject(response.error);
			};
		});
	}

	this.get = function(key) {
		let os = this.cs(this.store);

		return new Promise(function(resolve, reject) {
			var response = os.get(key);
			response.onsuccess = function() {
				resolve(response.result);
			};
			response.onerror = function() {
				reject(response.error);
			};
		});
	}

	this.getAll = function() {
		let os = this.cs(this.store);

		return new Promise(function(resolve, reject) {
			var response = os.getAll();
			response.onsuccess = function() {
				resolve(response.result);
			};
			response.onerror = function() {
				reject(response.error);
			};
		});
	}

	this.close = function() {
		this.db.close();
	}
}