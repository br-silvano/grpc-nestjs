protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_out=./protobuf ./src/*.proto \
--ts_proto_opt=outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false
