(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{448:function(a,t,e){"use strict";e.r(t);var s=e(50),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"creating-a-smart-chain-on-a-single-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-smart-chain-on-a-single-node"}},[a._v("#")]),a._v(" Creating a Smart Chain on a Single Node")]),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Under most circumstances, a developer should "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html#introduction"}},[a._v("use two separate nodes to set up and create a Smart Chain.")])],1),a._v(" "),e("p",[a._v("However, occasionally a developer may need to create a Smart Chain on a single node. This can be achieved using the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#testnode"}},[a._v("testnode")]),a._v(" runtime parameter. The following tutorial is only neccesary if the developer desires to run two instances of the daemon on the same server.")],1),a._v(" "),e("p",[a._v("In this situation, the developer may create a Smart Chain by running two daemons with slightly different configurations on the same node.")]),a._v(" "),e("h4",{attrs:{id:"tutorial-prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-prerequisites"}},[a._v("#")]),a._v(" Tutorial Prerequisites")]),a._v(" "),e("ul",[e("li",[a._v("Komodo Smart Chain software installed on a compatible machine\n"),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html"}},[a._v("Install instructions here")])],1)])])]),a._v(" "),e("h2",{attrs:{id:"launch-the-first-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-first-daemon"}},[a._v("#")]),a._v(" Launch the First daemon")]),a._v(" "),e("p",[a._v("Select the desired Antara customization parameters.")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html"}},[a._v("Link to Antara Customization Parameters")])],1),a._v(" "),e("p",[a._v("For this example, we use simple configurations.")]),a._v(" "),e("h5",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[a._v("#")]),a._v(" Command")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777777")]),a._v("\n")])])]),e("h5",{attrs:{id:"response-truncated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-truncated"}},[a._v("#")]),a._v(" Response (truncated)")]),a._v(" "),e("p",[a._v("Search for the part of the response that begins with this string: "),e("code",[a._v(">>>>>>>>>")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" HELLOWORLD: p2p.14165 rpc.14166 magic.01362c2a "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20327466")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777777")]),a._v(" coins\n")])])]),e("p",[a._v("The default "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#port"}},[a._v("p2p")]),a._v(" and "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#rpcport"}},[a._v("rpc")]),a._v(" ports of our chain are "),e("code",[a._v("14165")]),a._v(" and "),e("code",[a._v("14166")]),a._v(" respectively.")],1),a._v(" "),e("h4",{attrs:{id:"test-komodo-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-komodo-cli"}},[a._v("#")]),a._v(" Test komodo-cli")]),a._v(" "),e("p",[a._v("To interact with this first daemon, use a "),e("code",[a._v("komodo-cli")]),a._v(" command as follows.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD getinfo\n")])])]),e("h2",{attrs:{id:"create-a-data-directory-for-the-second-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-data-directory-for-the-second-daemon"}},[a._v("#")]),a._v(" Create a Data Directory for the Second Daemon")]),a._v(" "),e("p",[a._v("Create a directory on your machine for the second daemon.")]),a._v(" "),e("p",[a._v("In this guide, we use a directory named "),e("code",[a._v("coinData")]),a._v(" in the Home directory:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/coinData\n")])])]),e("p",[a._v("Create the data directory for the second daemon.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/coinData/HELLOWORLD\n")])])]),e("p",[a._v("Copy the "),e("code",[a._v(".conf")]),a._v(" file created for the first daemon to this new data directory.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ~/.komodo/HELLOWORLD/HELLOWORLD.conf ~/coinData/HELLOWORLD/\n")])])]),e("p",[a._v("Change the values of "),e("code",[a._v("rpcuser")]),a._v(", "),e("code",[a._v("rpcpassword")]),a._v(", and "),e("code",[a._v("rpcport")]),a._v(" in the file "),e("code",[a._v("~/coinData/HELLOWORLD/HELLOWORLD.conf")]),a._v(".")]),a._v(" "),e("h5",{attrs:{id:"the-helloworld-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-helloworld-conf-file"}},[a._v("#")]),a._v(" The HELLOWORLD.CONF File")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("rpcuser=changethis\nrpcpassword=changethis\n... (ommitted) ...\nrpcport=12345\n")])])]),e("p",[a._v("(Change all values shown above on the right side of the "),e("code",[a._v("=")]),a._v(" side. In all values above, the chosen values must be different from the values in the first daemon's .conf file.)")]),a._v(" "),e("p",[a._v("Add a new line "),e("code",[a._v("port=<choose a port number betwen 1 and 65000>")]),a._v(" to the file. This value indicates the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#port"}},[a._v("p2pport")]),a._v(" used by the second daemon.")],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("... (file continued) ...\nport=22020\n")])])]),e("p",[a._v("The value of port should be different from the value of the p2p port for the first daemon.")]),a._v(" "),e("h2",{attrs:{id:"launch-the-second-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-second-daemon"}},[a._v("#")]),a._v(" Launch the Second daemon")]),a._v(" "),e("p",[a._v("When launching the second daemon, use the same Antara customization parameters as the first daemon.")]),a._v(" "),e("p",[a._v("However, now we specify the data directory for the daemon, as well as the "),e("code",[a._v("p2p")]),a._v(" connection.")]),a._v(" "),e("p",[a._v("To accomplish this, we use the "),e("b",[a._v("datadir")]),a._v(" and "),e("b",[a._v("addnode")]),a._v(" common launch parameters.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777777")]),a._v(" -datadir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("USERNAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/coinData/HELLOWORLD -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Replace "),e("code",[a._v("<USERNAME>")]),a._v(" with the USERNAME for your local node. You can find this value by using the "),e("code",[a._v("echo $USER")]),a._v(" command in the terminal.")])]),a._v(" "),e("p",[a._v("To interact with the second daemon, add the "),e("b",[a._v("datadir")]),a._v(" parameter to the "),e("code",[a._v("komodo-cli")]),a._v(" command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -datadir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("USERNAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/coinData/HELLOWORLD getinfo\n")])])]),e("p",[a._v("After launching the second daemon, calling "),e("code",[a._v("getinfo")]),a._v(" to either of the daemons should report "),e("code",[a._v('"connections":1')]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-curl"}},[a._v("#")]),a._v(" Using curl")]),a._v(" "),e("p",[a._v("To issue a "),e("code",[a._v("getinfo")]),a._v(" call using curl, observe the following example.")]),a._v(" "),e("p",[a._v("Replace "),e("code",[a._v("<rpcuser>")]),a._v(", "),e("code",[a._v("<rpcpassword>")]),a._v(", "),e("code",[a._v("<rpcport>")]),a._v(" with the values from the "),e("code",[a._v(".conf")]),a._v(" file in the data directory corresponding to the daemon that needs to be queried.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcuser"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcpassword"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcport"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/\n")])])]),e("p",[a._v("Alternatively, source the "),e("code",[a._v(".conf")]),a._v(" file before using the curl command. Each time you desire to switch daemons, source the "),e("code",[a._v(".conf")]),a._v(" file of your target daemon.")]),a._v(" "),e("h5",{attrs:{id:"source-the-first-daemon-s-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-the-first-daemon-s-conf-file"}},[a._v("#")]),a._v(" Source the First Daemon's .conf File")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Source the .conf file")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.komodo/HELLOWORLD/HELLOWORLD.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Execute the curl command")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcuser")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcpassword")]),a._v(" --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcport")]),a._v("/\n")])])]),e("h5",{attrs:{id:"source-the-second-daemon-s-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-the-second-daemon-s-conf-file"}},[a._v("#")]),a._v(" Source the Second Daemon's .conf File")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Source the .conf file")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/coinData/HELLOWORLD/HELLOWORLD.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Execute the curl command")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcuser")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcpassword")]),a._v(" --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcport")]),a._v("/\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);