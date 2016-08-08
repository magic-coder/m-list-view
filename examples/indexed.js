webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rmcListView = __webpack_require__(177);
	
	var _rmcListView2 = _interopRequireDefault(_rmcListView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NUM_SECTIONS = 20;
	var NUM_ROWS_PER_SECTION = 10;
	
	var Demo = _react2.default.createClass({
	  displayName: 'Demo',
	  getInitialState: function getInitialState() {
	    var getSectionData = function getSectionData(dataBlob, sectionID) {
	      return dataBlob[sectionID];
	    };
	    var getRowData = function getRowData(dataBlob, sectionID, rowID) {
	      return dataBlob[rowID];
	    };
	
	    var dataSource = new _rmcListView2.default.DataSource({
	      getRowData: getRowData,
	      getSectionHeaderData: getSectionData,
	      rowHasChanged: function rowHasChanged(row1, row2) {
	        return row1 !== row2;
	      },
	      sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
	        return s1 !== s2;
	      }
	    });
	
	    var dataBlob = {};
	    var sectionIDs = [];
	    var rowIDs = [];
	    for (var ii = 0; ii < NUM_SECTIONS; ii++) {
	      var sectionName = String.fromCharCode(65 + ii);
	      sectionIDs.push(sectionName);
	      dataBlob[sectionName] = sectionName;
	      rowIDs[ii] = [];
	
	      for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
	        var rowName = 'S' + ii + ', R' + jj;
	        rowIDs[ii].push(rowName);
	        dataBlob[rowName] = rowName;
	      }
	    }
	    return {
	      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
	      headerPressCount: 0
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: '10px auto', width: '80%', position: 'relative' } },
	      _react2.default.createElement(_rmcListView2.default.IndexedList, {
	        dataSource: this.state.dataSource,
	        renderHeader: function renderHeader() {
	          return _react2.default.createElement(
	            'span',
	            { style: { padding: 10 } },
	            'header'
	          );
	        },
	        renderFooter: function renderFooter() {
	          return _react2.default.createElement(
	            'span',
	            { style: { padding: 10 } },
	            'footer'
	          );
	        },
	        renderSectionHeader: function renderSectionHeader(sectionData) {
	          return _react2.default.createElement(
	            'div',
	            { style: { color: 'blue', padding: 10, backgroundColor: '#ddd' } },
	            sectionData
	          );
	        },
	        renderRow: function renderRow(rowData) {
	          return _react2.default.createElement(
	            'div',
	            { style: { padding: 10 } },
	            'Hello: ',
	            rowData
	          );
	        },
	        renderScrollComponent: function renderScrollComponent(props) {
	          return _react2.default.createElement(MyScroller, _extends({}, props, { style: { height: 600, overflow: 'auto' } }));
	        },
	        quickSearchBarStyle: {
	          position: 'absolute',
	          top: 20, right: 30
	        },
	        onQuickSearch: function onQuickSearch(sectionID) {
	          return console.log(sectionID);
	        },
	        delayTime: 1000,
	        delayActivityIndicator: _react2.default.createElement(
	          'div',
	          { style: { padding: 25, textAlign: 'center' } },
	          'delay rendering...'
	        )
	      })
	    );
	  }
	});
	
	var MyScroller = _react2.default.createClass({
	  displayName: 'MyScroller',
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var onScroll = _props.onScroll;
	
	    var divProps = { style: style, onScroll: onScroll };
	    return _react2.default.createElement(
	      'div',
	      _extends({ className: 'c-s' }, divProps),
	      children
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=indexed.js.map