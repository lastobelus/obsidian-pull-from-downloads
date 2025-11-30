"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/adm-zip/util/constants.js
var require_constants = __commonJS({
  "node_modules/adm-zip/util/constants.js"(exports2, module2) {
    module2.exports = {
      /* The local file header */
      LOCHDR: 30,
      // LOC header size
      LOCSIG: 67324752,
      // "PK\003\004"
      LOCVER: 4,
      // version needed to extract
      LOCFLG: 6,
      // general purpose bit flag
      LOCHOW: 8,
      // compression method
      LOCTIM: 10,
      // modification time (2 bytes time, 2 bytes date)
      LOCCRC: 14,
      // uncompressed file crc-32 value
      LOCSIZ: 18,
      // compressed size
      LOCLEN: 22,
      // uncompressed size
      LOCNAM: 26,
      // filename length
      LOCEXT: 28,
      // extra field length
      /* The Data descriptor */
      EXTSIG: 134695760,
      // "PK\007\008"
      EXTHDR: 16,
      // EXT header size
      EXTCRC: 4,
      // uncompressed file crc-32 value
      EXTSIZ: 8,
      // compressed size
      EXTLEN: 12,
      // uncompressed size
      /* The central directory file header */
      CENHDR: 46,
      // CEN header size
      CENSIG: 33639248,
      // "PK\001\002"
      CENVEM: 4,
      // version made by
      CENVER: 6,
      // version needed to extract
      CENFLG: 8,
      // encrypt, decrypt flags
      CENHOW: 10,
      // compression method
      CENTIM: 12,
      // modification time (2 bytes time, 2 bytes date)
      CENCRC: 16,
      // uncompressed file crc-32 value
      CENSIZ: 20,
      // compressed size
      CENLEN: 24,
      // uncompressed size
      CENNAM: 28,
      // filename length
      CENEXT: 30,
      // extra field length
      CENCOM: 32,
      // file comment length
      CENDSK: 34,
      // volume number start
      CENATT: 36,
      // internal file attributes
      CENATX: 38,
      // external file attributes (host system dependent)
      CENOFF: 42,
      // LOC header offset
      /* The entries in the end of central directory */
      ENDHDR: 22,
      // END header size
      ENDSIG: 101010256,
      // "PK\005\006"
      ENDSUB: 8,
      // number of entries on this disk
      ENDTOT: 10,
      // total number of entries
      ENDSIZ: 12,
      // central directory size in bytes
      ENDOFF: 16,
      // offset of first CEN header
      ENDCOM: 20,
      // zip file comment length
      END64HDR: 20,
      // zip64 END header size
      END64SIG: 117853008,
      // zip64 Locator signature, "PK\006\007"
      END64START: 4,
      // number of the disk with the start of the zip64
      END64OFF: 8,
      // relative offset of the zip64 end of central directory
      END64NUMDISKS: 16,
      // total number of disks
      ZIP64SIG: 101075792,
      // zip64 signature, "PK\006\006"
      ZIP64HDR: 56,
      // zip64 record minimum size
      ZIP64LEAD: 12,
      // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
      ZIP64SIZE: 4,
      // zip64 size of the central directory record
      ZIP64VEM: 12,
      // zip64 version made by
      ZIP64VER: 14,
      // zip64 version needed to extract
      ZIP64DSK: 16,
      // zip64 number of this disk
      ZIP64DSKDIR: 20,
      // number of the disk with the start of the record directory
      ZIP64SUB: 24,
      // number of entries on this disk
      ZIP64TOT: 32,
      // total number of entries
      ZIP64SIZB: 40,
      // zip64 central directory size in bytes
      ZIP64OFF: 48,
      // offset of start of central directory with respect to the starting disk number
      ZIP64EXTRA: 56,
      // extensible data sector
      /* Compression methods */
      STORED: 0,
      // no compression
      SHRUNK: 1,
      // shrunk
      REDUCED1: 2,
      // reduced with compression factor 1
      REDUCED2: 3,
      // reduced with compression factor 2
      REDUCED3: 4,
      // reduced with compression factor 3
      REDUCED4: 5,
      // reduced with compression factor 4
      IMPLODED: 6,
      // imploded
      // 7 reserved for Tokenizing compression algorithm
      DEFLATED: 8,
      // deflated
      ENHANCED_DEFLATED: 9,
      // enhanced deflated
      PKWARE: 10,
      // PKWare DCL imploded
      // 11 reserved by PKWARE
      BZIP2: 12,
      //  compressed using BZIP2
      // 13 reserved by PKWARE
      LZMA: 14,
      // LZMA
      // 15-17 reserved by PKWARE
      IBM_TERSE: 18,
      // compressed using IBM TERSE
      IBM_LZ77: 19,
      // IBM LZ77 z
      AES_ENCRYPT: 99,
      // WinZIP AES encryption method
      /* General purpose bit flag */
      // values can obtained with expression 2**bitnr
      FLG_ENC: 1,
      // Bit 0: encrypted file
      FLG_COMP1: 2,
      // Bit 1, compression option
      FLG_COMP2: 4,
      // Bit 2, compression option
      FLG_DESC: 8,
      // Bit 3, data descriptor
      FLG_ENH: 16,
      // Bit 4, enhanced deflating
      FLG_PATCH: 32,
      // Bit 5, indicates that the file is compressed patched data.
      FLG_STR: 64,
      // Bit 6, strong encryption (patented)
      // Bits 7-10: Currently unused.
      FLG_EFS: 2048,
      // Bit 11: Language encoding flag (EFS)
      // Bit 12: Reserved by PKWARE for enhanced compression.
      // Bit 13: encrypted the Central Directory (patented).
      // Bits 14-15: Reserved by PKWARE.
      FLG_MSK: 4096,
      // mask header values
      /* Load type */
      FILE: 2,
      BUFFER: 1,
      NONE: 0,
      /* 4.5 Extensible data fields */
      EF_ID: 0,
      EF_SIZE: 2,
      /* Header IDs */
      ID_ZIP64: 1,
      ID_AVINFO: 7,
      ID_PFS: 8,
      ID_OS2: 9,
      ID_NTFS: 10,
      ID_OPENVMS: 12,
      ID_UNIX: 13,
      ID_FORK: 14,
      ID_PATCH: 15,
      ID_X509_PKCS7: 20,
      ID_X509_CERTID_F: 21,
      ID_X509_CERTID_C: 22,
      ID_STRONGENC: 23,
      ID_RECORD_MGT: 24,
      ID_X509_PKCS7_RL: 25,
      ID_IBM1: 101,
      ID_IBM2: 102,
      ID_POSZIP: 18064,
      EF_ZIP64_OR_32: 4294967295,
      EF_ZIP64_OR_16: 65535,
      EF_ZIP64_SUNCOMP: 0,
      EF_ZIP64_SCOMP: 8,
      EF_ZIP64_RHO: 16,
      EF_ZIP64_DSN: 24
    };
  }
});

// node_modules/adm-zip/util/errors.js
var require_errors = __commonJS({
  "node_modules/adm-zip/util/errors.js"(exports2) {
    var errors = {
      /* Header error messages */
      INVALID_LOC: "Invalid LOC header (bad signature)",
      INVALID_CEN: "Invalid CEN header (bad signature)",
      INVALID_END: "Invalid END header (bad signature)",
      /* Descriptor */
      DESCRIPTOR_NOT_EXIST: "No descriptor present",
      DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
      DESCRIPTOR_FAULTY: "Descriptor data is malformed",
      /* ZipEntry error messages*/
      NO_DATA: "Nothing to decompress",
      BAD_CRC: "CRC32 checksum failed {0}",
      FILE_IN_THE_WAY: "There is a file in the way: {0}",
      UNKNOWN_METHOD: "Invalid/unsupported compression method",
      /* Inflater error messages */
      AVAIL_DATA: "inflate::Available inflate data did not terminate",
      INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
      TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
      INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
      INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
      INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
      INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
      INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
      INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
      INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
      /* ADM-ZIP error messages */
      CANT_EXTRACT_FILE: "Could not extract the file",
      CANT_OVERRIDE: "Target file already exists",
      DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
      NO_ZIP: "No zip file was loaded",
      NO_ENTRY: "Entry doesn't exist",
      DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
      FILE_NOT_FOUND: 'File not found: "{0}"',
      NOT_IMPLEMENTED: "Not implemented",
      INVALID_FILENAME: "Invalid filename",
      INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
      INVALID_PASS_PARAM: "Incompatible password parameter",
      WRONG_PASSWORD: "Wrong Password",
      /* ADM-ZIP */
      COMMENT_TOO_LONG: "Comment is too long",
      // Comment can be max 65535 bytes long (NOTE: some non-US characters may take more space)
      EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
    };
    function E(message) {
      return function(...args) {
        if (args.length) {
          message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
        }
        return new Error("ADM-ZIP: " + message);
      };
    }
    for (const msg of Object.keys(errors)) {
      exports2[msg] = E(errors[msg]);
    }
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS({
  "node_modules/adm-zip/util/utils.js"(exports2, module2) {
    var fsystem = require("fs");
    var pth = require("path");
    var Constants = require_constants();
    var Errors = require_errors();
    var isWin = typeof process === "object" && "win32" === process.platform;
    var is_Obj = (obj) => typeof obj === "object" && obj !== null;
    var crcTable = new Uint32Array(256).map((t, c) => {
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 3988292384 ^ c >>> 1;
        } else {
          c >>>= 1;
        }
      }
      return c >>> 0;
    });
    function Utils(opts) {
      this.sep = pth.sep;
      this.fs = fsystem;
      if (is_Obj(opts)) {
        if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
          this.fs = opts.fs;
        }
      }
    }
    module2.exports = Utils;
    Utils.prototype.makeDir = function(folder) {
      const self = this;
      function mkdirSync(fpath) {
        let resolvedPath = fpath.split(self.sep)[0];
        fpath.split(self.sep).forEach(function(name) {
          if (!name || name.substr(-1, 1) === ":") return;
          resolvedPath += self.sep + name;
          var stat;
          try {
            stat = self.fs.statSync(resolvedPath);
          } catch (e) {
            self.fs.mkdirSync(resolvedPath);
          }
          if (stat && stat.isFile()) throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
        });
      }
      mkdirSync(folder);
    };
    Utils.prototype.writeFileTo = function(path3, content, overwrite, attr) {
      const self = this;
      if (self.fs.existsSync(path3)) {
        if (!overwrite) return false;
        var stat = self.fs.statSync(path3);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path3);
      if (!self.fs.existsSync(folder)) {
        self.makeDir(folder);
      }
      var fd;
      try {
        fd = self.fs.openSync(path3, "w", 438);
      } catch (e) {
        self.fs.chmodSync(path3, 438);
        fd = self.fs.openSync(path3, "w", 438);
      }
      if (fd) {
        try {
          self.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self.fs.closeSync(fd);
        }
      }
      self.fs.chmodSync(path3, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path3, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self = this;
      self.fs.exists(path3, function(exist) {
        if (exist && !overwrite) return callback(false);
        self.fs.stat(path3, function(err, stat) {
          if (exist && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path3);
          self.fs.exists(folder, function(exists2) {
            if (!exists2) self.makeDir(folder);
            self.fs.open(path3, "w", 438, function(err2, fd) {
              if (err2) {
                self.fs.chmod(path3, 438, function() {
                  self.fs.open(path3, "w", 438, function(err3, fd2) {
                    self.fs.write(fd2, content, 0, content.length, 0, function() {
                      self.fs.close(fd2, function() {
                        self.fs.chmod(path3, attr || 438, function() {
                          callback(true);
                        });
                      });
                    });
                  });
                });
              } else if (fd) {
                self.fs.write(fd, content, 0, content.length, 0, function() {
                  self.fs.close(fd, function() {
                    self.fs.chmod(path3, attr || 438, function() {
                      callback(true);
                    });
                  });
                });
              } else {
                self.fs.chmod(path3, attr || 438, function() {
                  callback(true);
                });
              }
            });
          });
        });
      });
    };
    Utils.prototype.findFiles = function(path3) {
      const self = this;
      function findSync(dir, pattern, recursive) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self.fs.readdirSync(dir).forEach(function(file) {
          const path4 = pth.join(dir, file);
          const stat = self.fs.statSync(path4);
          if (!pattern || pattern.test(path4)) {
            files.push(pth.normalize(path4) + (stat.isDirectory() ? self.sep : ""));
          }
          if (stat.isDirectory() && recursive) files = files.concat(findSync(path4, pattern, recursive));
        });
        return files;
      }
      return findSync(path3, void 0, true);
    };
    Utils.prototype.findFilesAsync = function(dir, cb) {
      const self = this;
      let results = [];
      self.fs.readdir(dir, function(err, list) {
        if (err) return cb(err);
        let list_length = list.length;
        if (!list_length) return cb(null, results);
        list.forEach(function(file) {
          file = pth.join(dir, file);
          self.fs.stat(file, function(err2, stat) {
            if (err2) return cb(err2);
            if (stat) {
              results.push(pth.normalize(file) + (stat.isDirectory() ? self.sep : ""));
              if (stat.isDirectory()) {
                self.findFilesAsync(file, function(err3, res) {
                  if (err3) return cb(err3);
                  results = results.concat(res);
                  if (!--list_length) cb(null, results);
                });
              } else {
                if (!--list_length) cb(null, results);
              }
            }
          });
        });
      });
    };
    Utils.prototype.getAttributes = function() {
    };
    Utils.prototype.setAttributes = function() {
    };
    Utils.crc32update = function(crc, byte) {
      return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
    };
    Utils.crc32 = function(buf) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, "utf8");
      }
      let len = buf.length;
      let crc = ~0;
      for (let off = 0; off < len; ) crc = Utils.crc32update(crc, buf[off++]);
      return ~crc >>> 0;
    };
    Utils.methodToString = function(method) {
      switch (method) {
        case Constants.STORED:
          return "STORED (" + method + ")";
        case Constants.DEFLATED:
          return "DEFLATED (" + method + ")";
        default:
          return "UNSUPPORTED (" + method + ")";
      }
    };
    Utils.canonical = function(path3) {
      if (!path3) return "";
      const safeSuffix = pth.posix.normalize("/" + path3.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path3) {
      if (!path3) return "";
      const safeSuffix = pth.posix.normalize("/" + path3.split("\\").join("/"));
      return pth.posix.join(".", safeSuffix);
    };
    Utils.findLast = function(arr, callback) {
      if (!Array.isArray(arr)) throw new TypeError("arr is not array");
      const len = arr.length >>> 0;
      for (let i = len - 1; i >= 0; i--) {
        if (callback(arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    };
    Utils.sanitize = function(prefix, name) {
      prefix = pth.resolve(pth.normalize(prefix));
      var parts = name.split("/");
      for (var i = 0, l = parts.length; i < l; i++) {
        var path3 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path3.indexOf(prefix) === 0) {
          return path3;
        }
      }
      return pth.normalize(pth.join(prefix, pth.basename(name)));
    };
    Utils.toBuffer = function toBuffer(input, encoder) {
      if (Buffer.isBuffer(input)) {
        return input;
      } else if (input instanceof Uint8Array) {
        return Buffer.from(input);
      } else {
        return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
      }
    };
    Utils.readBigUInt64LE = function(buffer, index) {
      var slice = Buffer.from(buffer.slice(index, index + 8));
      slice.swap64();
      return parseInt(`0x${slice.toString("hex")}`);
    };
    Utils.fromDOS2Date = function(val) {
      return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
    };
    Utils.fromDate2DOS = function(val) {
      let date = 0;
      let time = 0;
      if (val.getFullYear() > 1979) {
        date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
        time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
      }
      return date << 16 | time;
    };
    Utils.isWin = isWin;
    Utils.crcTable = crcTable;
  }
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS({
  "node_modules/adm-zip/util/fattr.js"(exports2, module2) {
    var pth = require("path");
    module2.exports = function(path3, { fs: fs2 }) {
      var _path = path3 || "", _obj = newAttr(), _stat = null;
      function newAttr() {
        return {
          directory: false,
          readonly: false,
          hidden: false,
          executable: false,
          mtime: 0,
          atime: 0
        };
      }
      if (_path && fs2.existsSync(_path)) {
        _stat = fs2.statSync(_path);
        _obj.directory = _stat.isDirectory();
        _obj.mtime = _stat.mtime;
        _obj.atime = _stat.atime;
        _obj.executable = (73 & _stat.mode) !== 0;
        _obj.readonly = (128 & _stat.mode) === 0;
        _obj.hidden = pth.basename(_path)[0] === ".";
      } else {
        console.warn("Invalid path: " + _path);
      }
      return {
        get directory() {
          return _obj.directory;
        },
        get readOnly() {
          return _obj.readonly;
        },
        get hidden() {
          return _obj.hidden;
        },
        get mtime() {
          return _obj.mtime;
        },
        get atime() {
          return _obj.atime;
        },
        get executable() {
          return _obj.executable;
        },
        decodeAttributes: function() {
        },
        encodeAttributes: function() {
        },
        toJSON: function() {
          return {
            path: _path,
            isDirectory: _obj.directory,
            isReadOnly: _obj.readonly,
            isHidden: _obj.hidden,
            isExecutable: _obj.executable,
            mTime: _obj.mtime,
            aTime: _obj.atime
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS({
  "node_modules/adm-zip/util/decoder.js"(exports2, module2) {
    module2.exports = {
      efs: true,
      encode: (data) => Buffer.from(data, "utf8"),
      decode: (data) => data.toString("utf8")
    };
  }
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS({
  "node_modules/adm-zip/util/index.js"(exports2, module2) {
    module2.exports = require_utils();
    module2.exports.Constants = require_constants();
    module2.exports.Errors = require_errors();
    module2.exports.FileAttr = require_fattr();
    module2.exports.decoder = require_decoder();
  }
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS({
  "node_modules/adm-zip/headers/entryHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
      _verMade |= Utils.isWin ? 2560 : 768;
      _flags |= Constants.FLG_EFS;
      const _localHeader = {
        extraLen: 0
      };
      const uint32 = (val) => Math.max(0, val) >>> 0;
      const uint16 = (val) => Math.max(0, val) & 65535;
      const uint8 = (val) => Math.max(0, val) & 255;
      _time = Utils.fromDate2DOS(/* @__PURE__ */ new Date());
      return {
        get made() {
          return _verMade;
        },
        set made(val) {
          _verMade = val;
        },
        get version() {
          return _version;
        },
        set version(val) {
          _version = val;
        },
        get flags() {
          return _flags;
        },
        set flags(val) {
          _flags = val;
        },
        get flags_efs() {
          return (_flags & Constants.FLG_EFS) > 0;
        },
        set flags_efs(val) {
          if (val) {
            _flags |= Constants.FLG_EFS;
          } else {
            _flags &= ~Constants.FLG_EFS;
          }
        },
        get flags_desc() {
          return (_flags & Constants.FLG_DESC) > 0;
        },
        set flags_desc(val) {
          if (val) {
            _flags |= Constants.FLG_DESC;
          } else {
            _flags &= ~Constants.FLG_DESC;
          }
        },
        get method() {
          return _method;
        },
        set method(val) {
          switch (val) {
            case Constants.STORED:
              this.version = 10;
            case Constants.DEFLATED:
            default:
              this.version = 20;
          }
          _method = val;
        },
        get time() {
          return Utils.fromDOS2Date(this.timeval);
        },
        set time(val) {
          this.timeval = Utils.fromDate2DOS(val);
        },
        get timeval() {
          return _time;
        },
        set timeval(val) {
          _time = uint32(val);
        },
        get timeHighByte() {
          return uint8(_time >>> 8);
        },
        get crc() {
          return _crc;
        },
        set crc(val) {
          _crc = uint32(val);
        },
        get compressedSize() {
          return _compressedSize;
        },
        set compressedSize(val) {
          _compressedSize = uint32(val);
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = uint32(val);
        },
        get fileNameLength() {
          return _fnameLen;
        },
        set fileNameLength(val) {
          _fnameLen = val;
        },
        get extraLength() {
          return _extraLen;
        },
        set extraLength(val) {
          _extraLen = val;
        },
        get extraLocalLength() {
          return _localHeader.extraLen;
        },
        set extraLocalLength(val) {
          _localHeader.extraLen = val;
        },
        get commentLength() {
          return _comLen;
        },
        set commentLength(val) {
          _comLen = val;
        },
        get diskNumStart() {
          return _diskStart;
        },
        set diskNumStart(val) {
          _diskStart = uint32(val);
        },
        get inAttr() {
          return _inattr;
        },
        set inAttr(val) {
          _inattr = uint32(val);
        },
        get attr() {
          return _attr;
        },
        set attr(val) {
          _attr = uint32(val);
        },
        // get Unix file permissions
        get fileAttr() {
          return (_attr || 0) >> 16 & 4095;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = uint32(val);
        },
        get encrypted() {
          return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
        },
        get centralHeaderSize() {
          return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
        },
        get realDataOffset() {
          return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
        },
        get localHeader() {
          return _localHeader;
        },
        loadLocalHeaderFromBinary: function(input) {
          var data = input.slice(_offset, _offset + Constants.LOCHDR);
          if (data.readUInt32LE(0) !== Constants.LOCSIG) {
            throw Utils.Errors.INVALID_LOC();
          }
          _localHeader.version = data.readUInt16LE(Constants.LOCVER);
          _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
          _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
          _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
          _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
          _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
          _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
          _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
          _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
          const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
          const extraEnd = extraStart + _localHeader.extraLen;
          return input.slice(extraStart, extraEnd);
        },
        loadFromBinary: function(data) {
          if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
            throw Utils.Errors.INVALID_CEN();
          }
          _verMade = data.readUInt16LE(Constants.CENVEM);
          _version = data.readUInt16LE(Constants.CENVER);
          _flags = data.readUInt16LE(Constants.CENFLG);
          _method = data.readUInt16LE(Constants.CENHOW);
          _time = data.readUInt32LE(Constants.CENTIM);
          _crc = data.readUInt32LE(Constants.CENCRC);
          _compressedSize = data.readUInt32LE(Constants.CENSIZ);
          _size = data.readUInt32LE(Constants.CENLEN);
          _fnameLen = data.readUInt16LE(Constants.CENNAM);
          _extraLen = data.readUInt16LE(Constants.CENEXT);
          _comLen = data.readUInt16LE(Constants.CENCOM);
          _diskStart = data.readUInt16LE(Constants.CENDSK);
          _inattr = data.readUInt16LE(Constants.CENATT);
          _attr = data.readUInt32LE(Constants.CENATX);
          _offset = data.readUInt32LE(Constants.CENOFF);
        },
        localHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.LOCHDR);
          data.writeUInt32LE(Constants.LOCSIG, 0);
          data.writeUInt16LE(_version, Constants.LOCVER);
          data.writeUInt16LE(_flags, Constants.LOCFLG);
          data.writeUInt16LE(_method, Constants.LOCHOW);
          data.writeUInt32LE(_time, Constants.LOCTIM);
          data.writeUInt32LE(_crc, Constants.LOCCRC);
          data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
          data.writeUInt32LE(_size, Constants.LOCLEN);
          data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
          data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
          return data;
        },
        centralHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
          data.writeUInt32LE(Constants.CENSIG, 0);
          data.writeUInt16LE(_verMade, Constants.CENVEM);
          data.writeUInt16LE(_version, Constants.CENVER);
          data.writeUInt16LE(_flags, Constants.CENFLG);
          data.writeUInt16LE(_method, Constants.CENHOW);
          data.writeUInt32LE(_time, Constants.CENTIM);
          data.writeUInt32LE(_crc, Constants.CENCRC);
          data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
          data.writeUInt32LE(_size, Constants.CENLEN);
          data.writeUInt16LE(_fnameLen, Constants.CENNAM);
          data.writeUInt16LE(_extraLen, Constants.CENEXT);
          data.writeUInt16LE(_comLen, Constants.CENCOM);
          data.writeUInt16LE(_diskStart, Constants.CENDSK);
          data.writeUInt16LE(_inattr, Constants.CENATT);
          data.writeUInt32LE(_attr, Constants.CENATX);
          data.writeUInt32LE(_offset, Constants.CENOFF);
          return data;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return nr + " bytes";
          };
          return {
            made: _verMade,
            version: _version,
            flags: _flags,
            method: Utils.methodToString(_method),
            time: this.time,
            crc: "0x" + _crc.toString(16).toUpperCase(),
            compressedSize: bytes(_compressedSize),
            size: bytes(_size),
            fileNameLength: bytes(_fnameLen),
            extraLength: bytes(_extraLen),
            commentLength: bytes(_comLen),
            diskNumStart: _diskStart,
            inAttr: _inattr,
            attr: _attr,
            offset: _offset,
            centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS({
  "node_modules/adm-zip/headers/mainHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
      return {
        get diskEntries() {
          return _volumeEntries;
        },
        set diskEntries(val) {
          _volumeEntries = _totalEntries = val;
        },
        get totalEntries() {
          return _totalEntries;
        },
        set totalEntries(val) {
          _totalEntries = _volumeEntries = val;
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = val;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = val;
        },
        get commentLength() {
          return _commentLength;
        },
        set commentLength(val) {
          _commentLength = val;
        },
        get mainHeaderSize() {
          return Constants.ENDHDR + _commentLength;
        },
        loadFromBinary: function(data) {
          if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
            throw Utils.Errors.INVALID_END();
          }
          if (data.readUInt32LE(0) === Constants.ENDSIG) {
            _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
            _totalEntries = data.readUInt16LE(Constants.ENDTOT);
            _size = data.readUInt32LE(Constants.ENDSIZ);
            _offset = data.readUInt32LE(Constants.ENDOFF);
            _commentLength = data.readUInt16LE(Constants.ENDCOM);
          } else {
            _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
            _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
            _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZE);
            _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
            _commentLength = 0;
          }
        },
        toBinary: function() {
          var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
          b.writeUInt32LE(Constants.ENDSIG, 0);
          b.writeUInt32LE(0, 4);
          b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
          b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
          b.writeUInt32LE(_size, Constants.ENDSIZ);
          b.writeUInt32LE(_offset, Constants.ENDOFF);
          b.writeUInt16LE(_commentLength, Constants.ENDCOM);
          b.fill(" ", Constants.ENDHDR);
          return b;
        },
        toJSON: function() {
          const offset = function(nr, len) {
            let offs = nr.toString(16).toUpperCase();
            while (offs.length < len) offs = "0" + offs;
            return "0x" + offs;
          };
          return {
            diskEntries: _volumeEntries,
            totalEntries: _totalEntries,
            size: _size + " bytes",
            offset: offset(_offset, 4),
            commentLength: _commentLength
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/index.js
var require_headers = __commonJS({
  "node_modules/adm-zip/headers/index.js"(exports2) {
    exports2.EntryHeader = require_entryHeader();
    exports2.MainHeader = require_mainHeader();
  }
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS({
  "node_modules/adm-zip/methods/deflater.js"(exports2, module2) {
    module2.exports = function(inbuf) {
      var zlib = require("zlib");
      var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
      return {
        deflate: function() {
          return zlib.deflateRawSync(inbuf, opts);
        },
        deflateAsync: function(callback) {
          var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS({
  "node_modules/adm-zip/methods/inflater.js"(exports2, module2) {
    var version = +(process.versions ? process.versions.node : "").split(".")[0] || 0;
    module2.exports = function(inbuf, expectedLength) {
      var zlib = require("zlib");
      const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
      return {
        inflate: function() {
          return zlib.inflateRawSync(inbuf, option);
        },
        inflateAsync: function(callback) {
          var tmp = zlib.createInflateRaw(option), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS({
  "node_modules/adm-zip/methods/zipcrypto.js"(exports2, module2) {
    "use strict";
    var { randomFillSync } = require("crypto");
    var Errors = require_errors();
    var crctable = new Uint32Array(256).map((t, crc) => {
      for (let j = 0; j < 8; j++) {
        if (0 !== (crc & 1)) {
          crc = crc >>> 1 ^ 3988292384;
        } else {
          crc >>>= 1;
        }
      }
      return crc >>> 0;
    });
    var uMul = (a, b) => Math.imul(a, b) >>> 0;
    var crc32update = (pCrc32, bval) => {
      return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
    };
    var genSalt = () => {
      if ("function" === typeof randomFillSync) {
        return randomFillSync(Buffer.alloc(12));
      } else {
        return genSalt.node();
      }
    };
    genSalt.node = () => {
      const salt = Buffer.alloc(12);
      const len = salt.length;
      for (let i = 0; i < len; i++) salt[i] = Math.random() * 256 & 255;
      return salt;
    };
    var config = {
      genSalt
    };
    function Initkeys(pw) {
      const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
      this.keys = new Uint32Array([305419896, 591751049, 878082192]);
      for (let i = 0; i < pass.length; i++) {
        this.updateKeys(pass[i]);
      }
    }
    Initkeys.prototype.updateKeys = function(byteValue) {
      const keys = this.keys;
      keys[0] = crc32update(keys[0], byteValue);
      keys[1] += keys[0] & 255;
      keys[1] = uMul(keys[1], 134775813) + 1;
      keys[2] = crc32update(keys[2], keys[1] >>> 24);
      return byteValue;
    };
    Initkeys.prototype.next = function() {
      const k = (this.keys[2] | 2) >>> 0;
      return uMul(k, k ^ 1) >> 8 & 255;
    };
    function make_decrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data) {
        const result = Buffer.alloc(data.length);
        let pos = 0;
        for (let c of data) {
          result[pos++] = keys.updateKeys(c ^ keys.next());
        }
        return result;
      };
    }
    function make_encrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data, result, pos = 0) {
        if (!result) result = Buffer.alloc(data.length);
        for (let c of data) {
          const k = keys.next();
          result[pos++] = c ^ k;
          keys.updateKeys(c);
        }
        return result;
      };
    }
    function decrypt(data, header, pwd) {
      if (!data || !Buffer.isBuffer(data) || data.length < 12) {
        return Buffer.alloc(0);
      }
      const decrypter = make_decrypter(pwd);
      const salt = decrypter(data.slice(0, 12));
      const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
      if (salt[11] !== verifyByte) {
        throw Errors.WRONG_PASSWORD();
      }
      return decrypter(data.slice(12));
    }
    function _salter(data) {
      if (Buffer.isBuffer(data) && data.length >= 12) {
        config.genSalt = function() {
          return data.slice(0, 12);
        };
      } else if (data === "node") {
        config.genSalt = genSalt.node;
      } else {
        config.genSalt = genSalt;
      }
    }
    function encrypt(data, header, pwd, oldlike = false) {
      if (data == null) data = Buffer.alloc(0);
      if (!Buffer.isBuffer(data)) data = Buffer.from(data.toString());
      const encrypter = make_encrypter(pwd);
      const salt = config.genSalt();
      salt[11] = header.crc >>> 24 & 255;
      if (oldlike) salt[10] = header.crc >>> 16 & 255;
      const result = Buffer.alloc(data.length + 12);
      encrypter(salt, result);
      return encrypter(data, result, 12);
    }
    module2.exports = { decrypt, encrypt, _salter };
  }
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS({
  "node_modules/adm-zip/methods/index.js"(exports2) {
    exports2.Deflater = require_deflater();
    exports2.Inflater = require_inflater();
    exports2.ZipCrypto = require_zipcrypto();
  }
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/adm-zip/zipEntry.js"(exports2, module2) {
    var Utils = require_util();
    var Headers = require_headers();
    var Constants = Utils.Constants;
    var Methods = require_methods();
    module2.exports = function(options, input) {
      var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
      const opts = options;
      const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
      _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
      function getCompressedDataFromZip() {
        if (!input || !(input instanceof Uint8Array)) {
          return Buffer.alloc(0);
        }
        _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
        return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
      }
      function crc32OK(data) {
        if (!_centralHeader.flags_desc) {
          if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
            return false;
          }
        } else {
          const descriptor = {};
          const dataEndOffset = _centralHeader.realDataOffset + _centralHeader.compressedSize;
          if (input.readUInt32LE(dataEndOffset) == Constants.LOCSIG || input.readUInt32LE(dataEndOffset) == Constants.CENSIG) {
            throw Utils.Errors.DESCRIPTOR_NOT_EXIST();
          }
          if (input.readUInt32LE(dataEndOffset) == Constants.EXTSIG) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN);
          } else if (input.readUInt16LE(dataEndOffset + 12) === 19280) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC - 4);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ - 4);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN - 4);
          } else {
            throw Utils.Errors.DESCRIPTOR_UNKNOWN();
          }
          if (descriptor.compressedSize !== _centralHeader.compressedSize || descriptor.size !== _centralHeader.size || descriptor.crc !== _centralHeader.crc) {
            throw Utils.Errors.DESCRIPTOR_FAULTY();
          }
          if (Utils.crc32(data) !== descriptor.crc) {
            return false;
          }
        }
        return true;
      }
      function decompress(async, callback, pass) {
        if (typeof callback === "undefined" && typeof async === "string") {
          pass = async;
          async = void 0;
        }
        if (_isDirectory) {
          if (async && callback) {
            callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
          }
          return Buffer.alloc(0);
        }
        var compressedData = getCompressedDataFromZip();
        if (compressedData.length === 0) {
          if (async && callback) callback(compressedData);
          return compressedData;
        }
        if (_centralHeader.encrypted) {
          if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
            throw Utils.Errors.INVALID_PASS_PARAM();
          }
          compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
        }
        var data = Buffer.alloc(_centralHeader.size);
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            compressedData.copy(data);
            if (!crc32OK(data)) {
              if (async && callback) callback(data, Utils.Errors.BAD_CRC());
              throw Utils.Errors.BAD_CRC();
            } else {
              if (async && callback) callback(data);
              return data;
            }
          case Utils.Constants.DEFLATED:
            var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
            if (!async) {
              const result = inflater.inflate(data);
              result.copy(data, 0);
              if (!crc32OK(data)) {
                throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
              }
              return data;
            } else {
              inflater.inflateAsync(function(result) {
                result.copy(result, 0);
                if (callback) {
                  if (!crc32OK(result)) {
                    callback(result, Utils.Errors.BAD_CRC());
                  } else {
                    callback(result);
                  }
                }
              });
            }
            break;
          default:
            if (async && callback) callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
            throw Utils.Errors.UNKNOWN_METHOD();
        }
      }
      function compress(async, callback) {
        if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
          if (async && callback) callback(getCompressedDataFromZip());
          return getCompressedDataFromZip();
        }
        if (uncompressedData.length && !_isDirectory) {
          var compressedData;
          switch (_centralHeader.method) {
            case Utils.Constants.STORED:
              _centralHeader.compressedSize = _centralHeader.size;
              compressedData = Buffer.alloc(uncompressedData.length);
              uncompressedData.copy(compressedData);
              if (async && callback) callback(compressedData);
              return compressedData;
            default:
            case Utils.Constants.DEFLATED:
              var deflater = new Methods.Deflater(uncompressedData);
              if (!async) {
                var deflated = deflater.deflate();
                _centralHeader.compressedSize = deflated.length;
                return deflated;
              } else {
                deflater.deflateAsync(function(data) {
                  compressedData = Buffer.alloc(data.length);
                  _centralHeader.compressedSize = data.length;
                  data.copy(compressedData);
                  callback && callback(compressedData);
                });
              }
              deflater = null;
              break;
          }
        } else if (async && callback) {
          callback(Buffer.alloc(0));
        } else {
          return Buffer.alloc(0);
        }
      }
      function readUInt64LE(buffer, offset) {
        return (buffer.readUInt32LE(offset + 4) << 4) + buffer.readUInt32LE(offset);
      }
      function parseExtra(data) {
        try {
          var offset = 0;
          var signature, size, part;
          while (offset + 4 < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        } catch (error) {
          throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
        }
      }
      function parseZip64ExtendedInformation(data) {
        var size, compressedSize, offset, diskNumStart;
        if (data.length >= Constants.EF_ZIP64_SCOMP) {
          size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
          if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
            _centralHeader.size = size;
          }
        }
        if (data.length >= Constants.EF_ZIP64_RHO) {
          compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
          if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
            _centralHeader.compressedSize = compressedSize;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN) {
          offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
          if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
            _centralHeader.offset = offset;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN + 4) {
          diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
          if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
            _centralHeader.diskNumStart = diskNumStart;
          }
        }
      }
      return {
        get entryName() {
          return decoder.decode(_entryName);
        },
        get rawEntryName() {
          return _entryName;
        },
        set entryName(val) {
          _entryName = Utils.toBuffer(val, decoder.encode);
          var lastChar = _entryName[_entryName.length - 1];
          _isDirectory = lastChar === 47 || lastChar === 92;
          _centralHeader.fileNameLength = _entryName.length;
        },
        get efs() {
          if (typeof _efs === "function") {
            return _efs(this.entryName);
          } else {
            return _efs;
          }
        },
        get extra() {
          return _extra;
        },
        set extra(val) {
          _extra = val;
          _centralHeader.extraLength = val.length;
          parseExtra(val);
        },
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          _centralHeader.commentLength = _comment.length;
          if (_comment.length > 65535) throw Utils.Errors.COMMENT_TOO_LONG();
        },
        get name() {
          var n = decoder.decode(_entryName);
          return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
        },
        get isDirectory() {
          return _isDirectory;
        },
        getCompressedData: function() {
          return compress(false, null);
        },
        getCompressedDataAsync: function(callback) {
          compress(true, callback);
        },
        setData: function(value) {
          uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
          if (!_isDirectory && uncompressedData.length) {
            _centralHeader.size = uncompressedData.length;
            _centralHeader.method = Utils.Constants.DEFLATED;
            _centralHeader.crc = Utils.crc32(value);
            _centralHeader.changed = true;
          } else {
            _centralHeader.method = Utils.Constants.STORED;
          }
        },
        getData: function(pass) {
          if (_centralHeader.changed) {
            return uncompressedData;
          } else {
            return decompress(false, null, pass);
          }
        },
        getDataAsync: function(callback, pass) {
          if (_centralHeader.changed) {
            callback(uncompressedData);
          } else {
            decompress(true, callback, pass);
          }
        },
        set attr(attr) {
          _centralHeader.attr = attr;
        },
        get attr() {
          return _centralHeader.attr;
        },
        set header(data) {
          _centralHeader.loadFromBinary(data);
        },
        get header() {
          return _centralHeader;
        },
        packCentralHeader: function() {
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLength = _extra.length;
          var header = _centralHeader.centralHeaderToBinary();
          var addpos = Utils.Constants.CENHDR;
          _entryName.copy(header, addpos);
          addpos += _entryName.length;
          _extra.copy(header, addpos);
          addpos += _centralHeader.extraLength;
          _comment.copy(header, addpos);
          return header;
        },
        packLocalHeader: function() {
          let addpos = 0;
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLocalLength = _extralocal.length;
          const localHeaderBuf = _centralHeader.localHeaderToBinary();
          const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
          localHeaderBuf.copy(localHeader, addpos);
          addpos += localHeaderBuf.length;
          _entryName.copy(localHeader, addpos);
          addpos += _entryName.length;
          _extralocal.copy(localHeader, addpos);
          addpos += _extralocal.length;
          return localHeader;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
          };
          return {
            entryName: this.entryName,
            name: this.name,
            comment: this.comment,
            isDirectory: this.isDirectory,
            header: _centralHeader.toJSON(),
            compressedData: bytes(input),
            data: bytes(uncompressedData)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS({
  "node_modules/adm-zip/zipFile.js"(exports2, module2) {
    var ZipEntry = require_zipEntry();
    var Headers = require_headers();
    var Utils = require_util();
    module2.exports = function(inBuffer, options) {
      var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
      var password = null;
      const temporary = /* @__PURE__ */ new Set();
      const opts = options;
      const { noSort, decoder } = opts;
      if (inBuffer) {
        readMainHeader(opts.readEntries);
      } else {
        loadedEntries = true;
      }
      function makeTemporaryFolders() {
        const foldersList = /* @__PURE__ */ new Set();
        for (const elem of Object.keys(entryTable)) {
          const elements = elem.split("/");
          elements.pop();
          if (!elements.length) continue;
          for (let i = 0; i < elements.length; i++) {
            const sub = elements.slice(0, i + 1).join("/") + "/";
            foldersList.add(sub);
          }
        }
        for (const elem of foldersList) {
          if (!(elem in entryTable)) {
            const tempfolder = new ZipEntry(opts);
            tempfolder.entryName = elem;
            tempfolder.attr = 16;
            tempfolder.temporary = true;
            entryList.push(tempfolder);
            entryTable[tempfolder.entryName] = tempfolder;
            temporary.add(tempfolder);
          }
        }
      }
      function readEntries() {
        loadedEntries = true;
        entryTable = {};
        if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
          throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
        }
        entryList = new Array(mainHeader.diskEntries);
        var index = mainHeader.offset;
        for (var i = 0; i < entryList.length; i++) {
          var tmp = index, entry = new ZipEntry(opts, inBuffer);
          entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
          entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
          if (entry.header.extraLength) {
            entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
          }
          if (entry.header.commentLength) entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
          index += entry.header.centralHeaderSize;
          entryList[i] = entry;
          entryTable[entry.entryName] = entry;
        }
        temporary.clear();
        makeTemporaryFolders();
      }
      function readMainHeader(readNow) {
        var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
        const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
        if (trailingSpace) max = 0;
        for (i; i >= n; i--) {
          if (inBuffer[i] !== 80) continue;
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
            endOffset = i;
            commentEnd = i;
            endStart = i + Utils.Constants.ENDHDR;
            n = i - Utils.Constants.END64HDR;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
            n = max;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
            endOffset = i;
            endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
            break;
          }
        }
        if (endOffset == -1) throw Utils.Errors.INVALID_FORMAT();
        mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
        if (mainHeader.commentLength) {
          _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
        }
        if (readNow) readEntries();
      }
      function sortEntries() {
        if (entryList.length > 1 && !noSort) {
          entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
        }
      }
      return {
        /**
         * Returns an array of ZipEntry objects existent in the current opened archive
         * @return Array
         */
        get entries() {
          if (!loadedEntries) {
            readEntries();
          }
          return entryList.filter((e) => !temporary.has(e));
        },
        /**
         * Archive comment
         * @return {String}
         */
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          mainHeader.commentLength = _comment.length;
        },
        getEntryCount: function() {
          if (!loadedEntries) {
            return mainHeader.diskEntries;
          }
          return entryList.length;
        },
        forEach: function(callback) {
          this.entries.forEach(callback);
        },
        /**
         * Returns a reference to the entry with the given name or null if entry is inexistent
         *
         * @param entryName
         * @return ZipEntry
         */
        getEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          return entryTable[entryName] || null;
        },
        /**
         * Adds the given entry to the entry list
         *
         * @param entry
         */
        setEntry: function(entry) {
          if (!loadedEntries) {
            readEntries();
          }
          entryList.push(entry);
          entryTable[entry.entryName] = entry;
          mainHeader.totalEntries = entryList.length;
        },
        /**
         * Removes the file with the given name from the entry list.
         *
         * If the entry is a directory, then all nested files and directories will be removed
         * @param entryName
         * @returns {void}
         */
        deleteFile: function(entryName, withsubfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
          list.forEach(this.deleteEntry);
        },
        /**
         * Removes the entry with the given name from the entry list.
         *
         * @param {string} entryName
         * @returns {void}
         */
        deleteEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const index = entryList.indexOf(entry);
          if (index >= 0) {
            entryList.splice(index, 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          }
        },
        /**
         *  Iterates and returns all nested files and directories of the given entry
         *
         * @param entry
         * @return Array
         */
        getEntryChildren: function(entry, subfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          if (typeof entry === "object") {
            if (entry.isDirectory && subfolders) {
              const list = [];
              const name = entry.entryName;
              for (const zipEntry of entryList) {
                if (zipEntry.entryName.startsWith(name)) {
                  list.push(zipEntry);
                }
              }
              return list;
            } else {
              return [entry];
            }
          }
          return [];
        },
        /**
         *  How many child elements entry has
         *
         * @param {ZipEntry} entry
         * @return {integer}
         */
        getChildCount: function(entry) {
          if (entry && entry.isDirectory) {
            const list = this.getEntryChildren(entry);
            return list.includes(entry) ? list.length - 1 : list.length;
          }
          return 0;
        },
        /**
         * Returns the zip file
         *
         * @return Buffer
         */
        compressToBuffer: function() {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const headerBlocks = [];
          let totalSize = 0;
          let dindex = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          let totalEntries = 0;
          for (const entry of this.entries) {
            const compressedData = entry.getCompressedData();
            entry.header.offset = dindex;
            const localHeader = entry.packLocalHeader();
            const dataLength = localHeader.length + compressedData.length;
            dindex += dataLength;
            dataBlock.push(localHeader);
            dataBlock.push(compressedData);
            const centralHeader = entry.packCentralHeader();
            headerBlocks.push(centralHeader);
            mainHeader.size += centralHeader.length;
            totalSize += dataLength + centralHeader.length;
            totalEntries++;
          }
          totalSize += mainHeader.mainHeaderSize;
          mainHeader.offset = dindex;
          mainHeader.totalEntries = totalEntries;
          dindex = 0;
          const outBuffer = Buffer.alloc(totalSize);
          for (const content of dataBlock) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          for (const content of headerBlocks) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          const mh = mainHeader.toBinary();
          if (_comment) {
            _comment.copy(mh, Utils.Constants.ENDHDR);
          }
          mh.copy(outBuffer, dindex);
          inBuffer = outBuffer;
          loadedEntries = false;
          return outBuffer;
        },
        toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          try {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const centralHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            let totalEntries = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            const compress2Buffer = function(entryLists) {
              if (entryLists.length > 0) {
                const entry = entryLists.shift();
                const name = entry.entryName + entry.extra.toString();
                if (onItemStart) onItemStart(name);
                entry.getCompressedDataAsync(function(compressedData) {
                  if (onItemEnd) onItemEnd(name);
                  entry.header.offset = dindex;
                  const localHeader = entry.packLocalHeader();
                  const dataLength = localHeader.length + compressedData.length;
                  dindex += dataLength;
                  dataBlock.push(localHeader);
                  dataBlock.push(compressedData);
                  const centalHeader = entry.packCentralHeader();
                  centralHeaders.push(centalHeader);
                  mainHeader.size += centalHeader.length;
                  totalSize += dataLength + centalHeader.length;
                  totalEntries++;
                  compress2Buffer(entryLists);
                });
              } else {
                totalSize += mainHeader.mainHeaderSize;
                mainHeader.offset = dindex;
                mainHeader.totalEntries = totalEntries;
                dindex = 0;
                const outBuffer = Buffer.alloc(totalSize);
                dataBlock.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                centralHeaders.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                const mh = mainHeader.toBinary();
                if (_comment) {
                  _comment.copy(mh, Utils.Constants.ENDHDR);
                }
                mh.copy(outBuffer, dindex);
                inBuffer = outBuffer;
                loadedEntries = false;
                onSuccess(outBuffer);
              }
            };
            compress2Buffer(Array.from(this.entries));
          } catch (e) {
            onFail(e);
          }
        }
      };
    };
  }
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS({
  "node_modules/adm-zip/adm-zip.js"(exports2, module2) {
    var Utils = require_util();
    var pth = require("path");
    var ZipEntry = require_zipEntry();
    var ZipFile = require_zipFile();
    var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
    var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
    var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
    var defaultOptions = {
      // option "noSort" : if true it disables files sorting
      noSort: false,
      // read entries during load (initial loading may be slower)
      readEntries: false,
      // default method is none
      method: Utils.Constants.NONE,
      // file system
      fs: null
    };
    module2.exports = function(input, options) {
      let inBuffer = null;
      const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
      if (input && "object" === typeof input) {
        if (!(input instanceof Uint8Array)) {
          Object.assign(opts, input);
          input = opts.input ? opts.input : void 0;
          if (opts.input) delete opts.input;
        }
        if (Buffer.isBuffer(input)) {
          inBuffer = input;
          opts.method = Utils.Constants.BUFFER;
          input = void 0;
        }
      }
      Object.assign(opts, options);
      const filetools = new Utils(opts);
      if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
        opts.decoder = Utils.decoder;
      }
      if (input && "string" === typeof input) {
        if (filetools.fs.existsSync(input)) {
          opts.method = Utils.Constants.FILE;
          opts.filename = input;
          inBuffer = filetools.fs.readFileSync(input);
        } else {
          throw Utils.Errors.INVALID_FILENAME();
        }
      }
      const _zip = new ZipFile(inBuffer, opts);
      const { canonical, sanitize, zipnamefix } = Utils;
      function getEntry(entry) {
        if (entry && _zip) {
          var item;
          if (typeof entry === "string") item = _zip.getEntry(pth.posix.normalize(entry));
          if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined") item = _zip.getEntry(entry.entryName);
          if (item) {
            return item;
          }
        }
        return null;
      }
      function fixPath(zipPath) {
        const { join: join2, normalize, sep } = pth.posix;
        return join2(".", normalize(sep + zipPath.split("\\").join(sep) + sep));
      }
      function filenameFilter(filterfn) {
        if (filterfn instanceof RegExp) {
          return /* @__PURE__ */ (function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          })(filterfn);
        } else if ("function" !== typeof filterfn) {
          return () => true;
        }
        return filterfn;
      }
      const relativePath = (local, entry) => {
        let lastChar = entry.slice(-1);
        lastChar = lastChar === filetools.sep ? filetools.sep : "";
        return pth.relative(local, entry) + lastChar;
      };
      return {
        /**
         * Extracts the given entry from the archive and returns the content as a Buffer object
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {Buffer|string} [pass] - password
         * @return Buffer or Null in case of error
         */
        readFile: function(entry, pass) {
          var item = getEntry(entry);
          return item && item.getData(pass) || null;
        },
        /**
         * Returns how many child elements has on entry (directories) on files it is always 0
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @returns {integer}
         */
        childCount: function(entry) {
          const item = getEntry(entry);
          if (item) {
            return _zip.getChildCount(item);
          }
        },
        /**
         * Asynchronous readFile
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         *
         * @return Buffer or Null in case of error
         */
        readFileAsync: function(entry, callback) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(callback);
          } else {
            callback(null, "getEntry failed for:" + entry);
          }
        },
        /**
         * Extracts the given entry from the archive and returns the content as plain text in the given encoding
         * @param {ZipEntry|string} entry - ZipEntry object or String with the full path of the entry
         * @param {string} encoding - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsText: function(entry, encoding) {
          var item = getEntry(entry);
          if (item) {
            var data = item.getData();
            if (data && data.length) {
              return data.toString(encoding || "utf8");
            }
          }
          return "";
        },
        /**
         * Asynchronous readAsText
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         * @param {string} [encoding] - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsTextAsync: function(entry, callback, encoding) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(function(data, err) {
              if (err) {
                callback(data, err);
                return;
              }
              if (data && data.length) {
                callback(data.toString(encoding || "utf8"));
              } else {
                callback("");
              }
            });
          } else {
            callback("");
          }
        },
        /**
         * Remove the entry from the file or the entry and all it's nested directories and files if the given entry is a directory
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteFile: function(entry, withsubfolders = true) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteFile(item.entryName, withsubfolders);
          }
        },
        /**
         * Remove the entry from the file or directory without affecting any nested entries
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteEntry: function(entry) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteEntry(item.entryName);
          }
        },
        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param {string} comment
         */
        addZipComment: function(comment) {
          _zip.comment = comment;
        },
        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment: function() {
          return _zip.comment || "";
        },
        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param {ZipEntry} entry
         * @param {string} comment
         */
        addZipEntryComment: function(entry, comment) {
          var item = getEntry(entry);
          if (item) {
            item.comment = comment;
          }
        },
        /**
         * Returns the comment of the specified entry
         *
         * @param {ZipEntry} entry
         * @return String
         */
        getZipEntryComment: function(entry) {
          var item = getEntry(entry);
          if (item) {
            return item.comment || "";
          }
          return "";
        },
        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param {ZipEntry} entry
         * @param {Buffer} content
         */
        updateFile: function(entry, content) {
          var item = getEntry(entry);
          if (item) {
            item.setData(content);
          }
        },
        /**
         * Adds a file from the disk to the archive
         *
         * @param {string} localPath File to add to zip
         * @param {string} [zipPath] Optional path inside the zip
         * @param {string} [zipName] Optional name for the file
         * @param {string} [comment] Optional file comment
         */
        addLocalFile: function(localPath2, zipPath, zipName, comment) {
          if (filetools.fs.existsSync(localPath2)) {
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            const _attr = filetools.fs.statSync(localPath2);
            const data = _attr.isFile() ? filetools.fs.readFileSync(localPath2) : Buffer.alloc(0);
            if (_attr.isDirectory()) zipPath += filetools.sep;
            this.addFile(zipPath, data, comment, _attr);
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Callback for showing if everything was done.
         *
         * @callback doneCallback
         * @param {Error} err - Error object
         * @param {boolean} done - was request fully completed
         */
        /**
         * Adds a file from the disk to the archive
         *
         * @param {(object|string)} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the file.
         * @param {string} [options.comment] - Optional file comment.
         * @param {string} [options.zipPath] - Optional path inside the zip
         * @param {string} [options.zipName] - Optional name for the file
         * @param {doneCallback} callback - The callback that handles the response.
         */
        addLocalFileAsync: function(options2, callback) {
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath2 = pth.resolve(options2.localPath);
          const { comment } = options2;
          let { zipPath, zipName } = options2;
          const self = this;
          filetools.fs.stat(localPath2, function(err, stats) {
            if (err) return callback(err, false);
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            if (stats.isFile()) {
              filetools.fs.readFile(localPath2, function(err2, data) {
                if (err2) return callback(err2, false);
                self.addFile(zipPath, data, comment, stats);
                return setImmediate(callback, void 0, true);
              });
            } else if (stats.isDirectory()) {
              zipPath += filetools.sep;
              self.addFile(zipPath, Buffer.alloc(0), comment, stats);
              return setImmediate(callback, void 0, true);
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - local path to the folder
         * @param {string} [zipPath] - optional path inside zip
         * @param {(RegExp|function)} [filter] - optional RegExp or Function if files match will be included.
         */
        addLocalFolder: function(localPath2, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          if (filetools.fs.existsSync(localPath2)) {
            const items = filetools.findFiles(localPath2);
            const self = this;
            if (items.length) {
              for (const filepath of items) {
                const p = pth.join(zipPath, relativePath(localPath2, filepath));
                if (filter(p)) {
                  self.addLocalFile(filepath, pth.dirname(p));
                }
              }
            }
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Asynchronous addLocalFolder
         * @param {string} localPath
         * @param {callback} callback
         * @param {string} [zipPath] optional path inside zip
         * @param {RegExp|function} [filter] optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolderAsync: function(localPath2, callback, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          var self = this;
          filetools.fs.open(localPath2, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath2));
            } else if (err) {
              callback(void 0, err);
            } else {
              var items = filetools.findFiles(localPath2);
              var i = -1;
              var next = function() {
                i += 1;
                if (i < items.length) {
                  var filepath = items[i];
                  var p = relativePath(localPath2, filepath).split("\\").join("/");
                  p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                  if (filter(p)) {
                    filetools.fs.stat(filepath, function(er0, stats) {
                      if (er0) callback(void 0, er0);
                      if (stats.isFile()) {
                        filetools.fs.readFile(filepath, function(er1, data) {
                          if (er1) {
                            callback(void 0, er1);
                          } else {
                            self.addFile(zipPath + p, data, "", stats);
                            next();
                          }
                        });
                      } else {
                        self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                        next();
                      }
                    });
                  } else {
                    process.nextTick(() => {
                      next();
                    });
                  }
                } else {
                  callback(true, void 0);
                }
              };
              next();
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {object | string} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the folder.
         * @param {string} [options.zipPath] - optional path inside zip.
         * @param {RegExp|function} [options.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [options.namefix] - optional function to help fix filename
         * @param {doneCallback} callback - The callback that handles the response.
         *
         */
        addLocalFolderAsync2: function(options2, callback) {
          const self = this;
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          localPath = pth.resolve(fixPath(options2.localPath));
          let { zipPath, filter, namefix } = options2;
          if (filter instanceof RegExp) {
            filter = /* @__PURE__ */ (function(rx) {
              return function(filename) {
                return rx.test(filename);
              };
            })(filter);
          } else if ("function" !== typeof filter) {
            filter = function() {
              return true;
            };
          }
          zipPath = zipPath ? fixPath(zipPath) : "";
          if (namefix == "latin1") {
            namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
          }
          if (typeof namefix !== "function") namefix = (str) => str;
          const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath, entry)));
          const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
          filetools.fs.open(localPath, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath));
            } else if (err) {
              callback(void 0, err);
            } else {
              filetools.findFilesAsync(localPath, function(err2, fileEntries) {
                if (err2) return callback(err2);
                fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
                if (!fileEntries.length) callback(void 0, false);
                setImmediate(
                  fileEntries.reverse().reduce(function(next, entry) {
                    return function(err3, done) {
                      if (err3 || done === false) return setImmediate(next, err3, false);
                      self.addLocalFileAsync(
                        {
                          localPath: entry,
                          zipPath: pth.dirname(relPathFix(entry)),
                          zipName: fileNameFix(entry)
                        },
                        next
                      );
                    };
                  }, callback)
                );
              });
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - path where files will be extracted
         * @param {object} props - optional properties
         * @param {string} [props.zipPath] - optional path inside zip
         * @param {RegExp|function} [props.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [props.namefix] - optional function to help fix filename
         */
        addLocalFolderPromise: function(localPath2, props) {
          return new Promise((resolve, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
              if (err) reject(err);
              if (done) resolve(this);
            });
          });
        },
        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param {string} entryName
         * @param {Buffer | string} content - file content as buffer or utf8 coded string
         * @param {string} [comment] - file comment
         * @param {number | object} [attr] - number as unix file permissions, object as filesystem Stats object
         */
        addFile: function(entryName, content, comment, attr) {
          entryName = zipnamefix(entryName);
          let entry = getEntry(entryName);
          const update = entry != null;
          if (!update) {
            entry = new ZipEntry(opts);
            entry.entryName = entryName;
          }
          entry.comment = comment || "";
          const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
          if (isStat) {
            entry.header.time = attr.mtime;
          }
          var fileattr = entry.isDirectory ? 16 : 0;
          let unix = entry.isDirectory ? 16384 : 32768;
          if (isStat) {
            unix |= 4095 & attr.mode;
          } else if ("number" === typeof attr) {
            unix |= 4095 & attr;
          } else {
            unix |= entry.isDirectory ? 493 : 420;
          }
          fileattr = (fileattr | unix << 16) >>> 0;
          entry.attr = fileattr;
          entry.setData(content);
          if (!update) _zip.setEntry(entry);
          return entry;
        },
        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @param {string} [password]
         * @returns Array
         */
        getEntries: function(password) {
          _zip.password = password;
          return _zip ? _zip.entries : [];
        },
        /**
         * Returns a ZipEntry object representing the file or folder specified by ``name``.
         *
         * @param {string} name
         * @return ZipEntry
         */
        getEntry: function(name) {
          return getEntry(name);
        },
        getEntryCount: function() {
          return _zip.getEntryCount();
        },
        forEach: function(callback) {
          return _zip.forEach(callback);
        },
        /**
         * Extracts the given entry to the given targetPath
         * If the entry is a directory inside the archive, the entire directory and it's subdirectories will be extracted
         *
         * @param {string|ZipEntry} entry - ZipEntry object or String with the full path of the entry
         * @param {string} targetPath - Target folder where to write the file
         * @param {boolean} [maintainEntryPath=true] - If maintainEntryPath is true and the entry is inside a folder, the entry folder will be created in targetPath as well. Default is TRUE
         * @param {boolean} [overwrite=false] - If the file already exists at the target path, the file will be overwriten if this is true.
         * @param {boolean} [keepOriginalPermission=false] - The file will be set as the permission from the entry if this is true.
         * @param {string} [outFileName] - String If set will override the filename of the extracted file (Only works if the entry is a file)
         *
         * @return Boolean
         */
        extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
          overwrite = get_Bool(false, overwrite);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          maintainEntryPath = get_Bool(true, maintainEntryPath);
          outFileName = get_Str(keepOriginalPermission, outFileName);
          var item = getEntry(entry);
          if (!item) {
            throw Utils.Errors.NO_ENTRY();
          }
          var entryName = canonical(item.entryName);
          var target = sanitize(targetPath, outFileName && !item.isDirectory ? outFileName : maintainEntryPath ? entryName : pth.basename(entryName));
          if (item.isDirectory) {
            var children = _zip.getEntryChildren(item);
            children.forEach(function(child) {
              if (child.isDirectory) return;
              var content2 = child.getData();
              if (!content2) {
                throw Utils.Errors.CANT_EXTRACT_FILE();
              }
              var name = canonical(child.entryName);
              var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
              const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
              filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
            });
            return true;
          }
          var content = item.getData(_zip.password);
          if (!content) throw Utils.Errors.CANT_EXTRACT_FILE();
          if (filetools.fs.existsSync(target) && !overwrite) {
            throw Utils.Errors.CANT_OVERRIDE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
          filetools.writeFileTo(target, content, overwrite, fileAttr);
          return true;
        },
        /**
         * Test the archive
         * @param {string} [pass]
         */
        test: function(pass) {
          if (!_zip) {
            return false;
          }
          for (var entry in _zip.entries) {
            try {
              if (entry.isDirectory) {
                continue;
              }
              var content = _zip.entries[entry].getData(pass);
              if (!content) {
                return false;
              }
            } catch (err) {
              return false;
            }
          }
          return true;
        },
        /**
         * Extracts the entire archive to the given location
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {string|Buffer} [pass] password
         */
        extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          pass = get_Str(keepOriginalPermission, pass);
          overwrite = get_Bool(false, overwrite);
          if (!_zip) throw Utils.Errors.NO_ZIP();
          _zip.entries.forEach(function(entry) {
            var entryName = sanitize(targetPath, canonical(entry.entryName));
            if (entry.isDirectory) {
              filetools.makeDir(entryName);
              return;
            }
            var content = entry.getData(pass);
            if (!content) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(entryName, content, overwrite, fileAttr);
            try {
              filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
            } catch (err) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
          });
        },
        /**
         * Asynchronous extractAllTo
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {function} callback The callback will be executed when all entries are extracted successfully or any error is thrown.
         */
        extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
          callback = get_Fun(overwrite, keepOriginalPermission, callback);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          overwrite = get_Bool(false, overwrite);
          if (!callback) {
            return new Promise((resolve, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve(this);
                }
              });
            });
          }
          if (!_zip) {
            callback(Utils.Errors.NO_ZIP());
            return;
          }
          targetPath = pth.resolve(targetPath);
          const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
          const getError = (msg, file) => new Error(msg + ': "' + file + '"');
          const dirEntries = [];
          const fileEntries = [];
          _zip.entries.forEach((e) => {
            if (e.isDirectory) {
              dirEntries.push(e);
            } else {
              fileEntries.push(e);
            }
          });
          for (const entry of dirEntries) {
            const dirPath = getPath(entry);
            const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            try {
              filetools.makeDir(dirPath);
              if (dirAttr) filetools.fs.chmodSync(dirPath, dirAttr);
              filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
            } catch (er) {
              callback(getError("Unable to create folder", dirPath));
            }
          }
          fileEntries.reverse().reduce(function(next, entry) {
            return function(err) {
              if (err) {
                next(err);
              } else {
                const entryName = pth.normalize(canonical(entry.entryName));
                const filePath = sanitize(targetPath, entryName);
                entry.getDataAsync(function(content, err_1) {
                  if (err_1) {
                    next(err_1);
                  } else if (!content) {
                    next(Utils.Errors.CANT_EXTRACT_FILE());
                  } else {
                    const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                    filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                      if (!succ) {
                        next(getError("Unable to write file", filePath));
                      }
                      filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                        if (err_2) {
                          next(getError("Unable to set times", filePath));
                        } else {
                          next();
                        }
                      });
                    });
                  }
                });
              }
            };
          }, callback)();
        },
        /**
         * Writes the newly created zip file to disk at the specified location or if a zip was opened and no ``targetFileName`` is provided, it will overwrite the opened zip
         *
         * @param {string} targetFileName
         * @param {function} callback
         */
        writeZip: function(targetFileName, callback) {
          if (arguments.length === 1) {
            if (typeof targetFileName === "function") {
              callback = targetFileName;
              targetFileName = "";
            }
          }
          if (!targetFileName && opts.filename) {
            targetFileName = opts.filename;
          }
          if (!targetFileName) return;
          var zipData = _zip.compressToBuffer();
          if (zipData) {
            var ok = filetools.writeFileTo(targetFileName, zipData, true);
            if (typeof callback === "function") callback(!ok ? new Error("failed") : null, "");
          }
        },
        /**
                 *
                 * @param {string} targetFileName
                 * @param {object} [props]
                 * @param {boolean} [props.overwrite=true] If the file already exists at the target path, the file will be overwriten if this is true.
                 * @param {boolean} [props.perm] The file will be set as the permission from the entry if this is true.
        
                 * @returns {Promise<void>}
                 */
        writeZipPromise: function(targetFileName, props) {
          const { overwrite, perm } = Object.assign({ overwrite: true }, props);
          return new Promise((resolve, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve, reject) => {
            _zip.toAsyncBuffer(resolve, reject);
          });
        },
        /**
         * Returns the content of the entire zip file as a Buffer object
         *
         * @prop {function} [onSuccess]
         * @prop {function} [onFail]
         * @prop {function} [onItemStart]
         * @prop {function} [onItemEnd]
         * @returns {Buffer}
         */
        toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          if (typeof onSuccess === "function") {
            _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
            return null;
          }
          return _zip.compressToBuffer();
        }
      };
    };
  }
});

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PullFromDownloadsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");
var path2 = __toESM(require("path"));
var fs = __toESM(require("fs"));
var import_fs = require("fs");
var os = __toESM(require("os"));
var import_adm_zip = __toESM(require_adm_zip());

// download-modal.ts
var import_obsidian = require("obsidian");
var path = __toESM(require("path"));
var DownloadSelectModal = class extends import_obsidian.SuggestModal {
  constructor(app, items, settings, onSelect) {
    super(app);
    this.items = items;
    this.settings = settings;
    this.onSelect = onSelect;
    this.infoEl = null;
    this.setPlaceholder("Select a file to pull\u2026");
  }
  onOpen() {
    super.onOpen();
    const parent = this.inputEl.parentElement;
    if (parent && !this.infoEl) {
      const legend = parent.createDiv({ cls: "pull-dl-legend" });
      this.inputEl.insertAdjacentElement("afterend", legend);
      this.infoEl = legend;
    }
    this.updateInfo();
  }
  getSuggestions(query) {
    const lowered = query.toLowerCase();
    return this.items.filter((item) => item.name.toLowerCase().includes(lowered));
  }
  renderSuggestion(item, el) {
    renderDownloadRow(item, el);
  }
  onChooseSuggestion(item) {
    this.onSelect(item);
  }
  updateInfo() {
    if (!this.infoEl) return;
    const moveCopy = this.settings.behavior === "copy" ? "Copy Files" : "Move Files";
    const zipMode = this.settings.expandZips ? "Extract zips" : "Keep zips intact";
    this.infoEl.setText(`${moveCopy} \u2022 ${zipMode}`);
  }
};
var FuzzyDownloadModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app, items, settings, onSelect) {
    super(app);
    this.items = items;
    this.settings = settings;
    this.onSelect = onSelect;
    this.infoEl = null;
    this.setPlaceholder("Select a file to pull\u2026");
  }
  onOpen() {
    super.onOpen();
    const parent = this.inputEl.parentElement;
    if (parent && !this.infoEl) {
      const legend = parent.createDiv({ cls: "pull-dl-legend" });
      this.inputEl.insertAdjacentElement("afterend", legend);
      this.infoEl = legend;
    }
    this.updateInfo();
  }
  getItems() {
    return this.items;
  }
  getItemText(item) {
    return item.name;
  }
  renderSuggestion(match, el) {
    renderDownloadRow(match.item, el);
  }
  onChooseItem(item) {
    this.onSelect(item);
  }
  updateInfo() {
    if (!this.infoEl) return;
    const moveCopy = this.settings.behavior === "copy" ? "Copy" : "Move";
    const zipMode = this.settings.expandZips ? "Extract zips" : "Keep zips intact";
    this.infoEl.setText(`${moveCopy} \u2022 ${zipMode}`);
  }
};
function renderDownloadRow(item, el) {
  const row = el.createDiv({ cls: "pull-dl-row" });
  const nameEl = row.createDiv({ cls: "pull-dl-name" });
  nameEl.setText(item.name);
  const ext = path.extname(item.name).replace(/^\./, "").toUpperCase();
  if (ext) {
    const badge = row.createDiv({ cls: "pull-dl-badge" });
    badge.setText(ext);
  }
  const meta = el.createDiv({ cls: "pull-dl-meta" });
  meta.setText(
    `${formatRelative(item.mtime)} \u2022 ${item.mtime.toLocaleString()} \u2022 ${formatBytes(item.size)}`
  );
}
function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return `${value.toFixed(value >= 10 || i === 0 ? 0 : 1)} ${sizes[i]}`;
}
function formatRelative(date) {
  const diffMs = Date.now() - date.getTime();
  const sec = Math.floor(diffMs / 1e3);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (sec < 60) return "just now";
  if (min < 60) return `${min} min ago`;
  if (hr < 24) return `${hr} hr${hr === 1 ? "" : "s"} ago`;
  if (day < 7) return `${day} day${day === 1 ? "" : "s"} ago`;
  return date.toLocaleDateString();
}

// main.ts
var DEFAULT_SETTINGS = {
  downloadsDir: "~/Downloads",
  listLimit: 10,
  behavior: "move",
  whitelist: [],
  blacklist: [],
  zipCollision: "version",
  expandZips: true,
  selectionMode: "list"
};
var PullFromDownloadsPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULT_SETTINGS };
  }
  async onload() {
    await this.loadSettings();
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        const targetFolder = this.getTargetFolder(file);
        if (!targetFolder) return;
        menu.addItem((item) => {
          item.setTitle("Pull from Downloads\u2026").setIcon("download").onClick(() => this.handlePull(targetFolder));
        });
      })
    );
    this.addSettingTab(new PullSettingsTab(this.app, this));
  }
  async handlePull(targetFolder) {
    const downloadsPath = expandHome(this.settings.downloadsDir);
    let candidates = [];
    try {
      candidates = await getRecentFiles(downloadsPath, this.settings);
    } catch (error) {
      console.error(error);
      new import_obsidian2.Notice("Unable to read downloads directory. Check settings.");
      return;
    }
    if (candidates.length === 0) {
      new import_obsidian2.Notice("No matching files found in Downloads.");
      return;
    }
    const modalClass = this.settings.selectionMode === "fuzzy" ? FuzzyDownloadModal : DownloadSelectModal;
    const modal = new modalClass(
      this.app,
      candidates,
      this.settings,
      async (item) => {
        await this.processSelection(item, targetFolder);
      }
    );
    modal.open();
  }
  async processSelection(item, targetFolder) {
    const baseAdapter = this.app.vault.adapter;
    if (!baseAdapter.getBasePath) {
      new import_obsidian2.Notice("File system adapter not available on this platform.");
      return;
    }
    const vaultBase = baseAdapter.getBasePath();
    const targetDir = path2.join(vaultBase, normalizePath(targetFolder.path));
    try {
      await ensureDir(targetDir);
      const isZip = path2.extname(item.name).toLowerCase() === ".zip";
      if (isZip && this.settings.expandZips) {
        await extractZip(item.absolutePath, targetDir, this.settings.zipCollision);
      } else {
        await moveOrCopyFile(item.absolutePath, targetDir, this.settings.behavior);
      }
      new import_obsidian2.Notice(`Pulled ${item.name} into ${targetFolder.path}`);
    } catch (error) {
      console.error(error);
      new import_obsidian2.Notice(`Pull failed: ${error.message}`);
    }
  }
  getTargetFolder(file) {
    if (!file) return null;
    if (file instanceof import_obsidian2.TFolder) return file;
    if (file instanceof import_obsidian2.TFile) return file.parent;
    return null;
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = normalizeSettings({ ...DEFAULT_SETTINGS, ...data ?? {} });
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var PullSettingsTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "Pull from Downloads" });
    containerEl.createEl("a", { text: "Created by lastobelus", href: "https://github.com/lastobelus/" });
    containerEl.createEl("h2", { text: "Settings" });
    new import_obsidian2.Setting(containerEl).setName("Downloads directory").setDesc("Path to scan; ~ is expanded.").addText(
      (text) => text.setPlaceholder("~/Downloads").setValue(this.plugin.settings.downloadsDir).onChange(async (value) => {
        this.plugin.settings.downloadsDir = value || DEFAULT_SETTINGS.downloadsDir;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Number of files").setDesc("How many recent files to show (1-100)").addText(
      (text) => text.setPlaceholder("10").setValue(String(this.plugin.settings.listLimit)).onChange(async (value) => {
        const num = clampNumber(parseInt(value, 10), 1, 100, DEFAULT_SETTINGS.listLimit);
        this.plugin.settings.listLimit = num;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Behavior").setDesc("Move (default) removes from Downloads; Copy leaves it there.").addDropdown(
      (dropdown) => dropdown.addOption("move", "Move").addOption("copy", "Copy").setValue(this.plugin.settings.behavior).onChange(async (value) => {
        this.plugin.settings.behavior = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Selection mode").setDesc("Choose the picker style: list filter or fuzzy search.").addDropdown(
      (dropdown) => dropdown.addOption("list", "List (filter as you type)").addOption("fuzzy", "Fuzzy (Quick Switcher style)").setValue(this.plugin.settings.selectionMode).onChange(async (value) => {
        this.plugin.settings.selectionMode = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Whitelist extensions").setDesc(
      "Comma/space separated. If set, only these extensions are shown and blacklist is ignored."
    ).addText(
      (text) => text.setPlaceholder("zip, pdf, png").setValue(formatExtList(this.plugin.settings.whitelist)).onChange(async (value) => {
        this.plugin.settings.whitelist = parseExtList(value);
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Blacklist extensions").setDesc(
      "Comma/space separated. Ignored when whitelist is non-empty. Leave whitelist empty to use blacklist."
    ).addText(
      (text) => text.setPlaceholder("tmp, crdownload").setValue(formatExtList(this.plugin.settings.blacklist)).onChange(async (value) => {
        this.plugin.settings.blacklist = parseExtList(value);
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Zip files" });
    new import_obsidian2.Setting(containerEl).setName("Extract zip files").setDesc("If off, zips are moved/copied without extracting.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.expandZips).onChange(async (value) => {
        this.plugin.settings.expandZips = value;
        await this.plugin.saveSettings();
        this.display();
      })
    );
    const collisionSetting = new import_obsidian2.Setting(containerEl).setName("Zip collision handling").setDesc(
      this.plugin.settings.expandZips ? "Choose how to handle existing files when extracting zips." : "Enable 'Extract zip files' to configure collision handling."
    );
    collisionSetting.addDropdown(
      (dropdown) => dropdown.addOption("version", "Version existing files").addOption("overwrite", "Overwrite existing files").setValue(this.plugin.settings.zipCollision).onChange(async (value) => {
        this.plugin.settings.zipCollision = value;
        await this.plugin.saveSettings();
      })
    ).setDisabled(!this.plugin.settings.expandZips);
  }
};
function normalizePath(p) {
  return p.replace(/\\/g, "/");
}
function expandHome(input) {
  if (input.startsWith("~")) {
    return path2.join(os.homedir(), input.slice(1));
  }
  return input;
}
function parseExtList(input) {
  return input.split(/[\s,]+/).map((s) => s.trim().replace(/^\./, "").toLowerCase()).filter(Boolean);
}
function formatExtList(list) {
  return list.join(", ");
}
function clampNumber(value, min, max, fallback) {
  if (Number.isNaN(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}
function normalizeSettings(settings) {
  return {
    downloadsDir: settings.downloadsDir?.trim() || DEFAULT_SETTINGS.downloadsDir,
    listLimit: clampNumber(settings.listLimit, 1, 100, DEFAULT_SETTINGS.listLimit),
    behavior: settings.behavior === "copy" ? "copy" : "move",
    whitelist: parseExtList(formatExtList(settings.whitelist || [])),
    blacklist: parseExtList(formatExtList(settings.blacklist || [])),
    zipCollision: settings.zipCollision === "overwrite" ? "overwrite" : "version",
    expandZips: settings.expandZips !== false,
    selectionMode: settings.selectionMode === "fuzzy" ? "fuzzy" : "list"
  };
}
async function getRecentFiles(dir, settings) {
  const entries = await import_fs.promises.readdir(dir, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());
  const stats = await Promise.all(
    files.map(async (entry) => {
      const absolutePath = path2.join(dir, entry.name);
      const stat = await import_fs.promises.stat(absolutePath);
      return { entry, stat, absolutePath };
    })
  );
  const whitelist = settings.whitelist;
  const blacklist = settings.blacklist;
  const filtered = stats.filter(({ entry }) => shouldInclude(entry.name, whitelist, blacklist)).sort((a, b) => b.stat.mtimeMs - a.stat.mtimeMs).slice(0, settings.listLimit).map(({ entry, stat, absolutePath }) => ({
    name: entry.name,
    absolutePath,
    mtime: stat.mtime,
    size: stat.size
  }));
  return filtered;
}
function shouldInclude(name, whitelist, blacklist) {
  const ext = path2.extname(name).replace(/^\./, "").toLowerCase();
  if (whitelist.length > 0) {
    return whitelist.includes(ext);
  }
  if (blacklist.length > 0) {
    return !blacklist.includes(ext);
  }
  return true;
}
async function ensureDir(dir) {
  await import_fs.promises.mkdir(dir, { recursive: true });
}
async function moveOrCopyFile(source, targetDir, behavior) {
  const targetPath = await uniquePath(path2.join(targetDir, path2.basename(source)));
  if (behavior === "copy") {
    await import_fs.promises.copyFile(source, targetPath);
    return;
  }
  try {
    await import_fs.promises.rename(source, targetPath);
  } catch (error) {
    if (error.code === "EXDEV") {
      await import_fs.promises.copyFile(source, targetPath);
      await import_fs.promises.unlink(source);
    } else {
      throw error;
    }
  }
}
async function extractZip(zipPath, targetDir, strategy) {
  const zip = new import_adm_zip.default(zipPath);
  const entries = zip.getEntries();
  for (const entry of entries) {
    const entryName = normalizePath(entry.entryName);
    const destPath = path2.join(targetDir, entryName);
    if (entry.isDirectory) {
      await ensureDir(destPath);
      continue;
    }
    const finalPath = strategy === "overwrite" ? destPath : await uniquePath(destPath);
    await ensureDir(path2.dirname(finalPath));
    const data = entry.getData();
    await import_fs.promises.writeFile(finalPath, data);
  }
}
async function uniquePath(targetPath) {
  if (!await exists(targetPath)) return targetPath;
  const dir = path2.dirname(targetPath);
  const ext = path2.extname(targetPath);
  const base = path2.basename(targetPath, ext);
  let counter = 1;
  while (true) {
    const candidate = path2.join(dir, `${base}-${counter}${ext}`);
    if (!await exists(candidate)) return candidate;
    counter += 1;
  }
}
async function exists(p) {
  try {
    await import_fs.promises.access(p, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC9lcnJvcnMuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC91dGlscy5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2ZhdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL3V0aWwvZGVjb2Rlci5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvZW50cnlIZWFkZXIuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvaGVhZGVycy9tYWluSGVhZGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvbWV0aG9kcy9kZWZsYXRlci5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC9tZXRob2RzL2luZmxhdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL21ldGhvZHMvemlwY3J5cHRvLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL21ldGhvZHMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvemlwRW50cnkuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvemlwRmlsZS5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC9hZG0temlwLmpzIiwgIm1haW4udHMiLCAiZG93bmxvYWQtbW9kYWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qIFRoZSBsb2NhbCBmaWxlIGhlYWRlciAqL1xuICAgIExPQ0hEUiAgICAgICAgICAgOiAzMCwgLy8gTE9DIGhlYWRlciBzaXplXG4gICAgTE9DU0lHICAgICAgICAgICA6IDB4MDQwMzRiNTAsIC8vIFwiUEtcXDAwM1xcMDA0XCJcbiAgICBMT0NWRVIgICAgICAgICAgIDogNCxcdC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICBMT0NGTEcgICAgICAgICAgIDogNiwgLy8gZ2VuZXJhbCBwdXJwb3NlIGJpdCBmbGFnXG4gICAgTE9DSE9XICAgICAgICAgICA6IDgsIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgIExPQ1RJTSAgICAgICAgICAgOiAxMCwgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgIExPQ0NSQyAgICAgICAgICAgOiAxNCwgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgTE9DU0laICAgICAgICAgICA6IDE4LCAvLyBjb21wcmVzc2VkIHNpemVcbiAgICBMT0NMRU4gICAgICAgICAgIDogMjIsIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgTE9DTkFNICAgICAgICAgICA6IDI2LCAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICBMT0NFWFQgICAgICAgICAgIDogMjgsIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuXG4gICAgLyogVGhlIERhdGEgZGVzY3JpcHRvciAqL1xuICAgIEVYVFNJRyAgICAgICAgICAgOiAweDA4MDc0YjUwLCAvLyBcIlBLXFwwMDdcXDAwOFwiXG4gICAgRVhUSERSICAgICAgICAgICA6IDE2LCAvLyBFWFQgaGVhZGVyIHNpemVcbiAgICBFWFRDUkMgICAgICAgICAgIDogNCwgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgRVhUU0laICAgICAgICAgICA6IDgsIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgIEVYVExFTiAgICAgICAgICAgOiAxMiwgLy8gdW5jb21wcmVzc2VkIHNpemVcblxuICAgIC8qIFRoZSBjZW50cmFsIGRpcmVjdG9yeSBmaWxlIGhlYWRlciAqL1xuICAgIENFTkhEUiAgICAgICAgICAgOiA0NiwgLy8gQ0VOIGhlYWRlciBzaXplXG4gICAgQ0VOU0lHICAgICAgICAgICA6IDB4MDIwMTRiNTAsIC8vIFwiUEtcXDAwMVxcMDAyXCJcbiAgICBDRU5WRU0gICAgICAgICAgIDogNCwgLy8gdmVyc2lvbiBtYWRlIGJ5XG4gICAgQ0VOVkVSICAgICAgICAgICA6IDYsIC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICBDRU5GTEcgICAgICAgICAgIDogOCwgLy8gZW5jcnlwdCwgZGVjcnlwdCBmbGFnc1xuICAgIENFTkhPVyAgICAgICAgICAgOiAxMCwgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgQ0VOVElNICAgICAgICAgICA6IDEyLCAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgQ0VOQ1JDICAgICAgICAgICA6IDE2LCAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICBDRU5TSVogICAgICAgICAgIDogMjAsIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgIENFTkxFTiAgICAgICAgICAgOiAyNCwgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICBDRU5OQU0gICAgICAgICAgIDogMjgsIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgIENFTkVYVCAgICAgICAgICAgOiAzMCwgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG4gICAgQ0VOQ09NICAgICAgICAgICA6IDMyLCAvLyBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgQ0VORFNLICAgICAgICAgICA6IDM0LCAvLyB2b2x1bWUgbnVtYmVyIHN0YXJ0XG4gICAgQ0VOQVRUICAgICAgICAgICA6IDM2LCAvLyBpbnRlcm5hbCBmaWxlIGF0dHJpYnV0ZXNcbiAgICBDRU5BVFggICAgICAgICAgIDogMzgsIC8vIGV4dGVybmFsIGZpbGUgYXR0cmlidXRlcyAoaG9zdCBzeXN0ZW0gZGVwZW5kZW50KVxuICAgIENFTk9GRiAgICAgICAgICAgOiA0MiwgLy8gTE9DIGhlYWRlciBvZmZzZXRcblxuICAgIC8qIFRoZSBlbnRyaWVzIGluIHRoZSBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgKi9cbiAgICBFTkRIRFIgICAgICAgICAgIDogMjIsIC8vIEVORCBoZWFkZXIgc2l6ZVxuICAgIEVORFNJRyAgICAgICAgICAgOiAweDA2MDU0YjUwLCAvLyBcIlBLXFwwMDVcXDAwNlwiXG4gICAgRU5EU1VCICAgICAgICAgICA6IDgsIC8vIG51bWJlciBvZiBlbnRyaWVzIG9uIHRoaXMgZGlza1xuICAgIEVORFRPVCAgICAgICAgICAgOiAxMCwgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICBFTkRTSVogICAgICAgICAgIDogMTIsIC8vIGNlbnRyYWwgZGlyZWN0b3J5IHNpemUgaW4gYnl0ZXNcbiAgICBFTkRPRkYgICAgICAgICAgIDogMTYsIC8vIG9mZnNldCBvZiBmaXJzdCBDRU4gaGVhZGVyXG4gICAgRU5EQ09NICAgICAgICAgICA6IDIwLCAvLyB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuXG4gICAgRU5ENjRIRFIgICAgICAgICA6IDIwLCAvLyB6aXA2NCBFTkQgaGVhZGVyIHNpemVcbiAgICBFTkQ2NFNJRyAgICAgICAgIDogMHgwNzA2NGI1MCwgLy8gemlwNjQgTG9jYXRvciBzaWduYXR1cmUsIFwiUEtcXDAwNlxcMDA3XCJcbiAgICBFTkQ2NFNUQVJUICAgICAgIDogNCwgLy8gbnVtYmVyIG9mIHRoZSBkaXNrIHdpdGggdGhlIHN0YXJ0IG9mIHRoZSB6aXA2NFxuICAgIEVORDY0T0ZGICAgICAgICAgOiA4LCAvLyByZWxhdGl2ZSBvZmZzZXQgb2YgdGhlIHppcDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVxuICAgIEVORDY0TlVNRElTS1MgICAgOiAxNiwgLy8gdG90YWwgbnVtYmVyIG9mIGRpc2tzXG5cbiAgICBaSVA2NFNJRyAgICAgICAgIDogMHgwNjA2NGI1MCwgLy8gemlwNjQgc2lnbmF0dXJlLCBcIlBLXFwwMDZcXDAwNlwiXG4gICAgWklQNjRIRFIgICAgICAgICA6IDU2LCAvLyB6aXA2NCByZWNvcmQgbWluaW11bSBzaXplXG4gICAgWklQNjRMRUFEICAgICAgICA6IDEyLCAvLyBsZWFkaW5nIGJ5dGVzIGF0IHRoZSBzdGFydCBvZiB0aGUgcmVjb3JkLCBub3QgY291bnRlZCBieSB0aGUgdmFsdWUgc3RvcmVkIGluIFpJUDY0U0laRVxuICAgIFpJUDY0U0laRSAgICAgICAgOiA0LCAvLyB6aXA2NCBzaXplIG9mIHRoZSBjZW50cmFsIGRpcmVjdG9yeSByZWNvcmRcbiAgICBaSVA2NFZFTSAgICAgICAgIDogMTIsIC8vIHppcDY0IHZlcnNpb24gbWFkZSBieVxuICAgIFpJUDY0VkVSICAgICAgICAgOiAxNCwgLy8gemlwNjQgdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgIFpJUDY0RFNLICAgICAgICAgOiAxNiwgLy8gemlwNjQgbnVtYmVyIG9mIHRoaXMgZGlza1xuICAgIFpJUDY0RFNLRElSICAgICAgOiAyMCwgLy8gbnVtYmVyIG9mIHRoZSBkaXNrIHdpdGggdGhlIHN0YXJ0IG9mIHRoZSByZWNvcmQgZGlyZWN0b3J5XG4gICAgWklQNjRTVUIgICAgICAgICA6IDI0LCAvLyBudW1iZXIgb2YgZW50cmllcyBvbiB0aGlzIGRpc2tcbiAgICBaSVA2NFRPVCAgICAgICAgIDogMzIsIC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgWklQNjRTSVpCICAgICAgICA6IDQwLCAvLyB6aXA2NCBjZW50cmFsIGRpcmVjdG9yeSBzaXplIGluIGJ5dGVzXG4gICAgWklQNjRPRkYgICAgICAgICA6IDQ4LCAvLyBvZmZzZXQgb2Ygc3RhcnQgb2YgY2VudHJhbCBkaXJlY3Rvcnkgd2l0aCByZXNwZWN0IHRvIHRoZSBzdGFydGluZyBkaXNrIG51bWJlclxuICAgIFpJUDY0RVhUUkEgICAgICAgOiA1NiwgLy8gZXh0ZW5zaWJsZSBkYXRhIHNlY3RvclxuXG4gICAgLyogQ29tcHJlc3Npb24gbWV0aG9kcyAqL1xuICAgIFNUT1JFRCAgICAgICAgICAgOiAwLCAvLyBubyBjb21wcmVzc2lvblxuICAgIFNIUlVOSyAgICAgICAgICAgOiAxLCAvLyBzaHJ1bmtcbiAgICBSRURVQ0VEMSAgICAgICAgIDogMiwgLy8gcmVkdWNlZCB3aXRoIGNvbXByZXNzaW9uIGZhY3RvciAxXG4gICAgUkVEVUNFRDIgICAgICAgICA6IDMsIC8vIHJlZHVjZWQgd2l0aCBjb21wcmVzc2lvbiBmYWN0b3IgMlxuICAgIFJFRFVDRUQzICAgICAgICAgOiA0LCAvLyByZWR1Y2VkIHdpdGggY29tcHJlc3Npb24gZmFjdG9yIDNcbiAgICBSRURVQ0VENCAgICAgICAgIDogNSwgLy8gcmVkdWNlZCB3aXRoIGNvbXByZXNzaW9uIGZhY3RvciA0XG4gICAgSU1QTE9ERUQgICAgICAgICA6IDYsIC8vIGltcGxvZGVkXG4gICAgLy8gNyByZXNlcnZlZCBmb3IgVG9rZW5pemluZyBjb21wcmVzc2lvbiBhbGdvcml0aG1cbiAgICBERUZMQVRFRCAgICAgICAgIDogOCwgLy8gZGVmbGF0ZWRcbiAgICBFTkhBTkNFRF9ERUZMQVRFRDogOSwgLy8gZW5oYW5jZWQgZGVmbGF0ZWRcbiAgICBQS1dBUkUgICAgICAgICAgIDogMTAsLy8gUEtXYXJlIERDTCBpbXBsb2RlZFxuICAgIC8vIDExIHJlc2VydmVkIGJ5IFBLV0FSRVxuICAgIEJaSVAyICAgICAgICAgICAgOiAxMiwgLy8gIGNvbXByZXNzZWQgdXNpbmcgQlpJUDJcbiAgICAvLyAxMyByZXNlcnZlZCBieSBQS1dBUkVcbiAgICBMWk1BICAgICAgICAgICAgIDogMTQsIC8vIExaTUFcbiAgICAvLyAxNS0xNyByZXNlcnZlZCBieSBQS1dBUkVcbiAgICBJQk1fVEVSU0UgICAgICAgIDogMTgsIC8vIGNvbXByZXNzZWQgdXNpbmcgSUJNIFRFUlNFXG4gICAgSUJNX0xaNzcgICAgICAgICA6IDE5LCAvLyBJQk0gTFo3NyB6XG4gICAgQUVTX0VOQ1JZUFQgICAgICA6IDk5LCAvLyBXaW5aSVAgQUVTIGVuY3J5cHRpb24gbWV0aG9kXG5cbiAgICAvKiBHZW5lcmFsIHB1cnBvc2UgYml0IGZsYWcgKi9cbiAgICAvLyB2YWx1ZXMgY2FuIG9idGFpbmVkIHdpdGggZXhwcmVzc2lvbiAyKipiaXRuclxuICAgIEZMR19FTkMgICAgICAgICAgOiAxLCAgICAvLyBCaXQgMDogZW5jcnlwdGVkIGZpbGVcbiAgICBGTEdfQ09NUDEgICAgICAgIDogMiwgICAgLy8gQml0IDEsIGNvbXByZXNzaW9uIG9wdGlvblxuICAgIEZMR19DT01QMiAgICAgICAgOiA0LCAgICAvLyBCaXQgMiwgY29tcHJlc3Npb24gb3B0aW9uXG4gICAgRkxHX0RFU0MgICAgICAgICA6IDgsICAgIC8vIEJpdCAzLCBkYXRhIGRlc2NyaXB0b3JcbiAgICBGTEdfRU5IICAgICAgICAgIDogMTYsICAgLy8gQml0IDQsIGVuaGFuY2VkIGRlZmxhdGluZ1xuICAgIEZMR19QQVRDSCAgICAgICAgOiAzMiwgICAvLyBCaXQgNSwgaW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgY29tcHJlc3NlZCBwYXRjaGVkIGRhdGEuXG4gICAgRkxHX1NUUiAgICAgICAgICA6IDY0LCAgIC8vIEJpdCA2LCBzdHJvbmcgZW5jcnlwdGlvbiAocGF0ZW50ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJpdHMgNy0xMDogQ3VycmVudGx5IHVudXNlZC5cbiAgICBGTEdfRUZTICAgICAgICAgIDogMjA0OCwgLy8gQml0IDExOiBMYW5ndWFnZSBlbmNvZGluZyBmbGFnIChFRlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJpdCAxMjogUmVzZXJ2ZWQgYnkgUEtXQVJFIGZvciBlbmhhbmNlZCBjb21wcmVzc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQml0IDEzOiBlbmNyeXB0ZWQgdGhlIENlbnRyYWwgRGlyZWN0b3J5IChwYXRlbnRlZCkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJpdHMgMTQtMTU6IFJlc2VydmVkIGJ5IFBLV0FSRS5cbiAgICBGTEdfTVNLICAgICAgICAgIDogNDA5NiwgLy8gbWFzayBoZWFkZXIgdmFsdWVzXG5cbiAgICAvKiBMb2FkIHR5cGUgKi9cbiAgICBGSUxFICAgICAgICAgICAgIDogMixcbiAgICBCVUZGRVIgICAgICAgICAgIDogMSxcbiAgICBOT05FICAgICAgICAgICAgIDogMCxcblxuICAgIC8qIDQuNSBFeHRlbnNpYmxlIGRhdGEgZmllbGRzICovXG4gICAgRUZfSUQgICAgICAgICAgICA6IDAsXG4gICAgRUZfU0laRSAgICAgICAgICA6IDIsXG5cbiAgICAvKiBIZWFkZXIgSURzICovXG4gICAgSURfWklQNjQgICAgICAgICA6IDB4MDAwMSxcbiAgICBJRF9BVklORk8gICAgICAgIDogMHgwMDA3LFxuICAgIElEX1BGUyAgICAgICAgICAgOiAweDAwMDgsXG4gICAgSURfT1MyICAgICAgICAgICA6IDB4MDAwOSxcbiAgICBJRF9OVEZTICAgICAgICAgIDogMHgwMDBhLFxuICAgIElEX09QRU5WTVMgICAgICAgOiAweDAwMGMsXG4gICAgSURfVU5JWCAgICAgICAgICA6IDB4MDAwZCxcbiAgICBJRF9GT1JLICAgICAgICAgIDogMHgwMDBlLFxuICAgIElEX1BBVENIICAgICAgICAgOiAweDAwMGYsXG4gICAgSURfWDUwOV9QS0NTNyAgICA6IDB4MDAxNCxcbiAgICBJRF9YNTA5X0NFUlRJRF9GIDogMHgwMDE1LFxuICAgIElEX1g1MDlfQ0VSVElEX0MgOiAweDAwMTYsXG4gICAgSURfU1RST05HRU5DICAgICA6IDB4MDAxNyxcbiAgICBJRF9SRUNPUkRfTUdUICAgIDogMHgwMDE4LFxuICAgIElEX1g1MDlfUEtDUzdfUkwgOiAweDAwMTksXG4gICAgSURfSUJNMSAgICAgICAgICA6IDB4MDA2NSxcbiAgICBJRF9JQk0yICAgICAgICAgIDogMHgwMDY2LFxuICAgIElEX1BPU1pJUCAgICAgICAgOiAweDQ2OTAsXG5cbiAgICBFRl9aSVA2NF9PUl8zMiAgIDogMHhmZmZmZmZmZixcbiAgICBFRl9aSVA2NF9PUl8xNiAgIDogMHhmZmZmLFxuICAgIEVGX1pJUDY0X1NVTkNPTVAgOiAwLFxuICAgIEVGX1pJUDY0X1NDT01QICAgOiA4LFxuICAgIEVGX1pJUDY0X1JITyAgICAgOiAxNixcbiAgICBFRl9aSVA2NF9EU04gICAgIDogMjRcbn07XG4iLCAiY29uc3QgZXJyb3JzID0ge1xuICAgIC8qIEhlYWRlciBlcnJvciBtZXNzYWdlcyAqL1xuICAgIElOVkFMSURfTE9DOiBcIkludmFsaWQgTE9DIGhlYWRlciAoYmFkIHNpZ25hdHVyZSlcIixcbiAgICBJTlZBTElEX0NFTjogXCJJbnZhbGlkIENFTiBoZWFkZXIgKGJhZCBzaWduYXR1cmUpXCIsXG4gICAgSU5WQUxJRF9FTkQ6IFwiSW52YWxpZCBFTkQgaGVhZGVyIChiYWQgc2lnbmF0dXJlKVwiLFxuXG4gICAgLyogRGVzY3JpcHRvciAqL1xuICAgIERFU0NSSVBUT1JfTk9UX0VYSVNUOiBcIk5vIGRlc2NyaXB0b3IgcHJlc2VudFwiLFxuICAgIERFU0NSSVBUT1JfVU5LTk9XTjogXCJVbmtub3duIGRlc2NyaXB0b3IgZm9ybWF0XCIsXG4gICAgREVTQ1JJUFRPUl9GQVVMVFk6IFwiRGVzY3JpcHRvciBkYXRhIGlzIG1hbGZvcm1lZFwiLFxuXG4gICAgLyogWmlwRW50cnkgZXJyb3IgbWVzc2FnZXMqL1xuICAgIE5PX0RBVEE6IFwiTm90aGluZyB0byBkZWNvbXByZXNzXCIsXG4gICAgQkFEX0NSQzogXCJDUkMzMiBjaGVja3N1bSBmYWlsZWQgezB9XCIsXG4gICAgRklMRV9JTl9USEVfV0FZOiBcIlRoZXJlIGlzIGEgZmlsZSBpbiB0aGUgd2F5OiB7MH1cIixcbiAgICBVTktOT1dOX01FVEhPRDogXCJJbnZhbGlkL3Vuc3VwcG9ydGVkIGNvbXByZXNzaW9uIG1ldGhvZFwiLFxuXG4gICAgLyogSW5mbGF0ZXIgZXJyb3IgbWVzc2FnZXMgKi9cbiAgICBBVkFJTF9EQVRBOiBcImluZmxhdGU6OkF2YWlsYWJsZSBpbmZsYXRlIGRhdGEgZGlkIG5vdCB0ZXJtaW5hdGVcIixcbiAgICBJTlZBTElEX0RJU1RBTkNFOiBcImluZmxhdGU6OkludmFsaWQgbGl0ZXJhbC9sZW5ndGggb3IgZGlzdGFuY2UgY29kZSBpbiBmaXhlZCBvciBkeW5hbWljIGJsb2NrXCIsXG4gICAgVE9fTUFOWV9DT0RFUzogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IHRvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBjb2Rlc1wiLFxuICAgIElOVkFMSURfUkVQRUFUX0xFTjogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IHJlcGVhdCBtb3JlIHRoYW4gc3BlY2lmaWVkIGxlbmd0aHNcIixcbiAgICBJTlZBTElEX1JFUEVBVF9GSVJTVDogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IHJlcGVhdCBsZW5ndGhzIHdpdGggbm8gZmlyc3QgbGVuZ3RoXCIsXG4gICAgSU5DT01QTEVURV9DT0RFUzogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IGNvZGUgbGVuZ3RocyBjb2RlcyBpbmNvbXBsZXRlXCIsXG4gICAgSU5WQUxJRF9EWU5fRElTVEFOQ0U6IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiBpbnZhbGlkIGRpc3RhbmNlIGNvZGUgbGVuZ3Roc1wiLFxuICAgIElOVkFMSURfQ09ERVNfTEVOOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlIGxlbmd0aHNcIixcbiAgICBJTlZBTElEX1NUT1JFX0JMT0NLOiBcImluZmxhdGU6OlN0b3JlZCBibG9jayBsZW5ndGggZGlkIG5vdCBtYXRjaCBvbmUncyBjb21wbGVtZW50XCIsXG4gICAgSU5WQUxJRF9CTE9DS19UWVBFOiBcImluZmxhdGU6OkludmFsaWQgYmxvY2sgdHlwZSAodHlwZSA9PSAzKVwiLFxuXG4gICAgLyogQURNLVpJUCBlcnJvciBtZXNzYWdlcyAqL1xuICAgIENBTlRfRVhUUkFDVF9GSUxFOiBcIkNvdWxkIG5vdCBleHRyYWN0IHRoZSBmaWxlXCIsXG4gICAgQ0FOVF9PVkVSUklERTogXCJUYXJnZXQgZmlsZSBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIERJU0tfRU5UUllfVE9PX0xBUkdFOiBcIk51bWJlciBvZiBkaXNrIGVudHJpZXMgaXMgdG9vIGxhcmdlXCIsXG4gICAgTk9fWklQOiBcIk5vIHppcCBmaWxlIHdhcyBsb2FkZWRcIixcbiAgICBOT19FTlRSWTogXCJFbnRyeSBkb2Vzbid0IGV4aXN0XCIsXG4gICAgRElSRUNUT1JZX0NPTlRFTlRfRVJST1I6IFwiQSBkaXJlY3RvcnkgY2Fubm90IGhhdmUgY29udGVudFwiLFxuICAgIEZJTEVfTk9UX0ZPVU5EOiAnRmlsZSBub3QgZm91bmQ6IFwiezB9XCInLFxuICAgIE5PVF9JTVBMRU1FTlRFRDogXCJOb3QgaW1wbGVtZW50ZWRcIixcbiAgICBJTlZBTElEX0ZJTEVOQU1FOiBcIkludmFsaWQgZmlsZW5hbWVcIixcbiAgICBJTlZBTElEX0ZPUk1BVDogXCJJbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHppcCBmb3JtYXQuIE5vIEVORCBoZWFkZXIgZm91bmRcIixcbiAgICBJTlZBTElEX1BBU1NfUEFSQU06IFwiSW5jb21wYXRpYmxlIHBhc3N3b3JkIHBhcmFtZXRlclwiLFxuICAgIFdST05HX1BBU1NXT1JEOiBcIldyb25nIFBhc3N3b3JkXCIsXG5cbiAgICAvKiBBRE0tWklQICovXG4gICAgQ09NTUVOVF9UT09fTE9ORzogXCJDb21tZW50IGlzIHRvbyBsb25nXCIsIC8vIENvbW1lbnQgY2FuIGJlIG1heCA2NTUzNSBieXRlcyBsb25nIChOT1RFOiBzb21lIG5vbi1VUyBjaGFyYWN0ZXJzIG1heSB0YWtlIG1vcmUgc3BhY2UpXG4gICAgRVhUUkFfRklFTERfUEFSU0VfRVJST1I6IFwiRXh0cmEgZmllbGQgcGFyc2luZyBlcnJvclwiXG59O1xuXG4vLyB0ZW1wbGF0ZVxuZnVuY3Rpb24gRShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCkgeyAvLyBBbGxvdyB7MH0gLi4gezl9IGFyZ3VtZW50cyBpbiBlcnJvciBtZXNzYWdlLCBiYXNlZCBvbiBhcmd1bWVudCBudW1iZXJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xceyhcXGQpXFx9L2csIChfLCBuKSA9PiBhcmdzW25dIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FETS1aSVA6ICcgKyBtZXNzYWdlKTtcbiAgICB9O1xufVxuXG4vLyBJbml0IGVycm9ycyB3aXRoIHRlbXBsYXRlXG5mb3IgKGNvbnN0IG1zZyBvZiBPYmplY3Qua2V5cyhlcnJvcnMpKSB7XG4gICAgZXhwb3J0c1ttc2ddID0gRShlcnJvcnNbbXNnXSk7XG59XG4iLCAiY29uc3QgZnN5c3RlbSA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHB0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuY29uc3QgaXNXaW4gPSB0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBcIndpbjMyXCIgPT09IHByb2Nlc3MucGxhdGZvcm07XG5cbmNvbnN0IGlzX09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgb2JqICE9PSBudWxsO1xuXG4vLyBnZW5lcmF0ZSBDUkMzMiBsb29rdXAgdGFibGVcbmNvbnN0IGNyY1RhYmxlID0gbmV3IFVpbnQzMkFycmF5KDI1NikubWFwKCh0LCBjKSA9PiB7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgICAgaWYgKChjICYgMSkgIT09IDApIHtcbiAgICAgICAgICAgIGMgPSAweGVkYjg4MzIwIF4gKGMgPj4+IDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYyA+Pj49IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGMgPj4+IDA7XG59KTtcblxuLy8gVVRJTFMgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIFV0aWxzKG9wdHMpIHtcbiAgICB0aGlzLnNlcCA9IHB0aC5zZXA7XG4gICAgdGhpcy5mcyA9IGZzeXN0ZW07XG5cbiAgICBpZiAoaXNfT2JqKG9wdHMpKSB7XG4gICAgICAgIC8vIGN1c3RvbSBmaWxlc3lzdGVtXG4gICAgICAgIGlmIChpc19PYmoob3B0cy5mcykgJiYgdHlwZW9mIG9wdHMuZnMuc3RhdFN5bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5mcyA9IG9wdHMuZnM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cbi8vIElOU1RBTlRJQUJMRSBmdW5jdGlvbnNcblxuVXRpbHMucHJvdG90eXBlLm1ha2VEaXIgPSBmdW5jdGlvbiAoLypTdHJpbmcqLyBmb2xkZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIFN5bmMgLSBtYWtlIGRpcmVjdG9yaWVzIHRyZWVcbiAgICBmdW5jdGlvbiBta2RpclN5bmMoLypTdHJpbmcqLyBmcGF0aCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWRQYXRoID0gZnBhdGguc3BsaXQoc2VsZi5zZXApWzBdO1xuICAgICAgICBmcGF0aC5zcGxpdChzZWxmLnNlcCkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCFuYW1lIHx8IG5hbWUuc3Vic3RyKC0xLCAxKSA9PT0gXCI6XCIpIHJldHVybjtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCArPSBzZWxmLnNlcCArIG5hbWU7XG4gICAgICAgICAgICB2YXIgc3RhdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RhdCA9IHNlbGYuZnMuc3RhdFN5bmMocmVzb2x2ZWRQYXRoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZzLm1rZGlyU3luYyhyZXNvbHZlZFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXQgJiYgc3RhdC5pc0ZpbGUoKSkgdGhyb3cgRXJyb3JzLkZJTEVfSU5fVEhFX1dBWShgXCIke3Jlc29sdmVkUGF0aH1cImApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBta2RpclN5bmMoZm9sZGVyKTtcbn07XG5cblV0aWxzLnByb3RvdHlwZS53cml0ZUZpbGVUbyA9IGZ1bmN0aW9uICgvKlN0cmluZyovIHBhdGgsIC8qQnVmZmVyKi8gY29udGVudCwgLypCb29sZWFuKi8gb3ZlcndyaXRlLCAvKk51bWJlciovIGF0dHIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5mcy5leGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICAgIGlmICghb3ZlcndyaXRlKSByZXR1cm4gZmFsc2U7IC8vIGNhbm5vdCBvdmVyd3JpdGVcblxuICAgICAgICB2YXIgc3RhdCA9IHNlbGYuZnMuc3RhdFN5bmMocGF0aCk7XG4gICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZm9sZGVyID0gcHRoLmRpcm5hbWUocGF0aCk7XG4gICAgaWYgKCFzZWxmLmZzLmV4aXN0c1N5bmMoZm9sZGVyKSkge1xuICAgICAgICBzZWxmLm1ha2VEaXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICB2YXIgZmQ7XG4gICAgdHJ5IHtcbiAgICAgICAgZmQgPSBzZWxmLmZzLm9wZW5TeW5jKHBhdGgsIFwid1wiLCAwbzY2Nik7IC8vIDA2NjZcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGYuZnMuY2htb2RTeW5jKHBhdGgsIDBvNjY2KTtcbiAgICAgICAgZmQgPSBzZWxmLmZzLm9wZW5TeW5jKHBhdGgsIFwid1wiLCAwbzY2Nik7XG4gICAgfVxuICAgIGlmIChmZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi5mcy53cml0ZVN5bmMoZmQsIGNvbnRlbnQsIDAsIGNvbnRlbnQubGVuZ3RoLCAwKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNlbGYuZnMuY2xvc2VTeW5jKGZkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxmLmZzLmNobW9kU3luYyhwYXRoLCBhdHRyIHx8IDBvNjY2KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblV0aWxzLnByb3RvdHlwZS53cml0ZUZpbGVUb0FzeW5jID0gZnVuY3Rpb24gKC8qU3RyaW5nKi8gcGF0aCwgLypCdWZmZXIqLyBjb250ZW50LCAvKkJvb2xlYW4qLyBvdmVyd3JpdGUsIC8qTnVtYmVyKi8gYXR0ciwgLypGdW5jdGlvbiovIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBhdHRyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBhdHRyO1xuICAgICAgICBhdHRyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgc2VsZi5mcy5leGlzdHMocGF0aCwgZnVuY3Rpb24gKGV4aXN0KSB7XG4gICAgICAgIGlmIChleGlzdCAmJiAhb3ZlcndyaXRlKSByZXR1cm4gY2FsbGJhY2soZmFsc2UpO1xuXG4gICAgICAgIHNlbGYuZnMuc3RhdChwYXRoLCBmdW5jdGlvbiAoZXJyLCBzdGF0KSB7XG4gICAgICAgICAgICBpZiAoZXhpc3QgJiYgc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGZvbGRlciA9IHB0aC5kaXJuYW1lKHBhdGgpO1xuICAgICAgICAgICAgc2VsZi5mcy5leGlzdHMoZm9sZGVyLCBmdW5jdGlvbiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHNlbGYubWFrZURpcihmb2xkZXIpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5mcy5vcGVuKHBhdGgsIFwid1wiLCAwbzY2NiwgZnVuY3Rpb24gKGVyciwgZmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jaG1vZChwYXRoLCAwbzY2NiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMub3BlbihwYXRoLCBcIndcIiwgMG82NjYsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMud3JpdGUoZmQsIGNvbnRlbnQsIDAsIGNvbnRlbnQubGVuZ3RoLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNsb3NlKGZkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jaG1vZChwYXRoLCBhdHRyIHx8IDBvNjY2LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMud3JpdGUoZmQsIGNvbnRlbnQsIDAsIGNvbnRlbnQubGVuZ3RoLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jbG9zZShmZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNobW9kKHBhdGgsIGF0dHIgfHwgMG82NjYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jaG1vZChwYXRoLCBhdHRyIHx8IDBvNjY2LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuVXRpbHMucHJvdG90eXBlLmZpbmRGaWxlcyA9IGZ1bmN0aW9uICgvKlN0cmluZyovIHBhdGgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZpbmRTeW5jKC8qU3RyaW5nKi8gZGlyLCAvKlJlZ0V4cCovIHBhdHRlcm4sIC8qQm9vbGVhbiovIHJlY3Vyc2l2ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICByZWN1cnNpdmUgPSBwYXR0ZXJuO1xuICAgICAgICAgICAgcGF0dGVybiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICAgICAgc2VsZi5mcy5yZWFkZGlyU3luYyhkaXIpLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBwdGguam9pbihkaXIsIGZpbGUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdCA9IHNlbGYuZnMuc3RhdFN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGlmICghcGF0dGVybiB8fCBwYXR0ZXJuLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKHB0aC5ub3JtYWxpemUocGF0aCkgKyAoc3RhdC5pc0RpcmVjdG9yeSgpID8gc2VsZi5zZXAgOiBcIlwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkgJiYgcmVjdXJzaXZlKSBmaWxlcyA9IGZpbGVzLmNvbmNhdChmaW5kU3luYyhwYXRoLCBwYXR0ZXJuLCByZWN1cnNpdmUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmluZFN5bmMocGF0aCwgdW5kZWZpbmVkLCB0cnVlKTtcbn07XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIHNob3dpbmcgaWYgZXZlcnl0aGluZyB3YXMgZG9uZS5cbiAqXG4gKiBAY2FsbGJhY2sgZmlsZWxpc3RDYWxsYmFja1xuICogQHBhcmFtIHtFcnJvcn0gZXJyIC0gRXJyb3Igb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBsaXN0IC0gd2FzIHJlcXVlc3QgZnVsbHkgY29tcGxldGVkXG4gKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpclxuICogQHBhcmFtIHtmaWxlbGlzdENhbGxiYWNrfSBjYlxuICovXG5VdGlscy5wcm90b3R5cGUuZmluZEZpbGVzQXN5bmMgPSBmdW5jdGlvbiAoZGlyLCBjYikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgc2VsZi5mcy5yZWFkZGlyKGRpciwgZnVuY3Rpb24gKGVyciwgbGlzdCkge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgbGV0IGxpc3RfbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgICAgIGlmICghbGlzdF9sZW5ndGgpIHJldHVybiBjYihudWxsLCByZXN1bHRzKTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBmaWxlID0gcHRoLmpvaW4oZGlyLCBmaWxlKTtcbiAgICAgICAgICAgIHNlbGYuZnMuc3RhdChmaWxlLCBmdW5jdGlvbiAoZXJyLCBzdGF0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHB0aC5ub3JtYWxpemUoZmlsZSkgKyAoc3RhdC5pc0RpcmVjdG9yeSgpID8gc2VsZi5zZXAgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmluZEZpbGVzQXN5bmMoZmlsZSwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWxpc3RfbGVuZ3RoKSBjYihudWxsLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWxpc3RfbGVuZ3RoKSBjYihudWxsLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblV0aWxzLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge307XG5cblV0aWxzLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge307XG5cbi8vIFNUQVRJQyBmdW5jdGlvbnNcblxuLy8gY3JjMzIgc2luZ2xlIHVwZGF0ZSAoaXQgaXMgcGFydCBvZiBjcmMzMilcblV0aWxzLmNyYzMydXBkYXRlID0gZnVuY3Rpb24gKGNyYywgYnl0ZSkge1xuICAgIHJldHVybiBjcmNUYWJsZVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIChjcmMgPj4+IDgpO1xufTtcblxuVXRpbHMuY3JjMzIgPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgaWYgKHR5cGVvZiBidWYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgYnVmID0gQnVmZmVyLmZyb20oYnVmLCBcInV0ZjhcIik7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGJ1Zi5sZW5ndGg7XG4gICAgbGV0IGNyYyA9IH4wO1xuICAgIGZvciAobGV0IG9mZiA9IDA7IG9mZiA8IGxlbjsgKSBjcmMgPSBVdGlscy5jcmMzMnVwZGF0ZShjcmMsIGJ1ZltvZmYrK10pO1xuICAgIC8vIHhvciBhbmQgY2FzdCBhcyB1aW50MzIgbnVtYmVyXG4gICAgcmV0dXJuIH5jcmMgPj4+IDA7XG59O1xuXG5VdGlscy5tZXRob2RUb1N0cmluZyA9IGZ1bmN0aW9uICgvKk51bWJlciovIG1ldGhvZCkge1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlNUT1JFRDpcbiAgICAgICAgICAgIHJldHVybiBcIlNUT1JFRCAoXCIgKyBtZXRob2QgKyBcIilcIjtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuREVGTEFURUQ6XG4gICAgICAgICAgICByZXR1cm4gXCJERUZMQVRFRCAoXCIgKyBtZXRob2QgKyBcIilcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIlVOU1VQUE9SVEVEIChcIiArIG1ldGhvZCArIFwiKVwiO1xuICAgIH1cbn07XG5cbi8qKlxuICogcmVtb3ZlcyBcIi4uXCIgc3R5bGUgcGF0aCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBmaXhhYmxlIHBhdGhcbiAqIEByZXR1cm5zIHN0cmluZyAtIGZpeGVkIGZpbGVwYXRoXG4gKi9cblV0aWxzLmNhbm9uaWNhbCA9IGZ1bmN0aW9uICgvKnN0cmluZyovIHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHJldHVybiBcIlwiO1xuICAgIC8vIHRyaWNrIG5vcm1hbGl6ZSB0aGluayBwYXRoIGlzIGFic29sdXRlXG4gICAgY29uc3Qgc2FmZVN1ZmZpeCA9IHB0aC5wb3NpeC5ub3JtYWxpemUoXCIvXCIgKyBwYXRoLnNwbGl0KFwiXFxcXFwiKS5qb2luKFwiL1wiKSk7XG4gICAgcmV0dXJuIHB0aC5qb2luKFwiLlwiLCBzYWZlU3VmZml4KTtcbn07XG5cbi8qKlxuICogZml4IGZpbGUgbmFtZXMgaW4gYWNoaXZlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGZpeGFibGUgcGF0aFxuICogQHJldHVybnMgc3RyaW5nIC0gZml4ZWQgZmlsZXBhdGhcbiAqL1xuXG5VdGlscy56aXBuYW1lZml4ID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHJldHVybiBcIlwiO1xuICAgIC8vIHRyaWNrIG5vcm1hbGl6ZSB0aGluayBwYXRoIGlzIGFic29sdXRlXG4gICAgY29uc3Qgc2FmZVN1ZmZpeCA9IHB0aC5wb3NpeC5ub3JtYWxpemUoXCIvXCIgKyBwYXRoLnNwbGl0KFwiXFxcXFwiKS5qb2luKFwiL1wiKSk7XG4gICAgcmV0dXJuIHB0aC5wb3NpeC5qb2luKFwiLlwiLCBzYWZlU3VmZml4KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zXG4gKi9cblV0aWxzLmZpbmRMYXN0ID0gZnVuY3Rpb24gKGFyciwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyciBpcyBub3QgYXJyYXlcIik7XG5cbiAgICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoID4+PiAwO1xuICAgIGZvciAobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoY2FsbGJhY2soYXJyW2ldLCBpLCBhcnIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG59O1xuXG4vLyBtYWtlIGFib2x1dGUgcGF0aHMgdGFraW5nIHByZWZpeCBhcyByb290IGZvbGRlclxuVXRpbHMuc2FuaXRpemUgPSBmdW5jdGlvbiAoLypzdHJpbmcqLyBwcmVmaXgsIC8qc3RyaW5nKi8gbmFtZSkge1xuICAgIHByZWZpeCA9IHB0aC5yZXNvbHZlKHB0aC5ub3JtYWxpemUocHJlZml4KSk7XG4gICAgdmFyIHBhcnRzID0gbmFtZS5zcGxpdChcIi9cIik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSBwdGgubm9ybWFsaXplKHB0aC5qb2luKHByZWZpeCwgcGFydHMuc2xpY2UoaSwgbCkuam9pbihwdGguc2VwKSkpO1xuICAgICAgICBpZiAocGF0aC5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwdGgubm9ybWFsaXplKHB0aC5qb2luKHByZWZpeCwgcHRoLmJhc2VuYW1lKG5hbWUpKSk7XG59O1xuXG4vLyBjb252ZXJ0cyBidWZmZXIsIFVpbnQ4QXJyYXksIHN0cmluZyB0eXBlcyB0byBidWZmZXJcblV0aWxzLnRvQnVmZmVyID0gZnVuY3Rpb24gdG9CdWZmZXIoLypidWZmZXIsIFVpbnQ4QXJyYXksIHN0cmluZyovIGlucHV0LCAvKiBmdW5jdGlvbiAqLyBlbmNvZGVyKSB7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXhwZWN0IHN0cmluZyBhbGwgb3RoZXIgdmFsdWVzIGFyZSBpbnZhbGlkIGFuZCByZXR1cm4gZW1wdHkgYnVmZmVyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIgPyBlbmNvZGVyKGlucHV0KSA6IEJ1ZmZlci5hbGxvYygwKTtcbiAgICB9XG59O1xuXG5VdGlscy5yZWFkQmlnVUludDY0TEUgPSBmdW5jdGlvbiAoLypCdWZmZXIqLyBidWZmZXIsIC8qaW50Ki8gaW5kZXgpIHtcbiAgICB2YXIgc2xpY2UgPSBCdWZmZXIuZnJvbShidWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgOCkpO1xuICAgIHNsaWNlLnN3YXA2NCgpO1xuXG4gICAgcmV0dXJuIHBhcnNlSW50KGAweCR7c2xpY2UudG9TdHJpbmcoXCJoZXhcIil9YCk7XG59O1xuXG5VdGlscy5mcm9tRE9TMkRhdGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCgodmFsID4+IDI1KSAmIDB4N2YpICsgMTk4MCwgTWF0aC5tYXgoKCh2YWwgPj4gMjEpICYgMHgwZikgLSAxLCAwKSwgTWF0aC5tYXgoKHZhbCA+PiAxNikgJiAweDFmLCAxKSwgKHZhbCA+PiAxMSkgJiAweDFmLCAodmFsID4+IDUpICYgMHgzZiwgKHZhbCAmIDB4MWYpIDw8IDEpO1xufTtcblxuVXRpbHMuZnJvbURhdGUyRE9TID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIGxldCBkYXRlID0gMDtcbiAgICBsZXQgdGltZSA9IDA7XG4gICAgaWYgKHZhbC5nZXRGdWxsWWVhcigpID4gMTk3OSkge1xuICAgICAgICBkYXRlID0gKCgodmFsLmdldEZ1bGxZZWFyKCkgLSAxOTgwKSAmIDB4N2YpIDw8IDkpIHwgKCh2YWwuZ2V0TW9udGgoKSArIDEpIDw8IDUpIHwgdmFsLmdldERhdGUoKTtcbiAgICAgICAgdGltZSA9ICh2YWwuZ2V0SG91cnMoKSA8PCAxMSkgfCAodmFsLmdldE1pbnV0ZXMoKSA8PCA1KSB8ICh2YWwuZ2V0U2Vjb25kcygpID4+IDEpO1xuICAgIH1cbiAgICByZXR1cm4gKGRhdGUgPDwgMTYpIHwgdGltZTtcbn07XG5cblV0aWxzLmlzV2luID0gaXNXaW47IC8vIERvIHdlIGhhdmUgd2luZG93cyBzeXN0ZW1cblV0aWxzLmNyY1RhYmxlID0gY3JjVGFibGU7XG4iLCAiY29uc3QgcHRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qU3RyaW5nKi8gcGF0aCwgLypVdGlscyBvYmplY3QqLyB7IGZzIH0pIHtcbiAgICB2YXIgX3BhdGggPSBwYXRoIHx8IFwiXCIsXG4gICAgICAgIF9vYmogPSBuZXdBdHRyKCksXG4gICAgICAgIF9zdGF0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG5ld0F0dHIoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGV4ZWN1dGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgbXRpbWU6IDAsXG4gICAgICAgICAgICBhdGltZTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChfcGF0aCAmJiBmcy5leGlzdHNTeW5jKF9wYXRoKSkge1xuICAgICAgICBfc3RhdCA9IGZzLnN0YXRTeW5jKF9wYXRoKTtcbiAgICAgICAgX29iai5kaXJlY3RvcnkgPSBfc3RhdC5pc0RpcmVjdG9yeSgpO1xuICAgICAgICBfb2JqLm10aW1lID0gX3N0YXQubXRpbWU7XG4gICAgICAgIF9vYmouYXRpbWUgPSBfc3RhdC5hdGltZTtcbiAgICAgICAgX29iai5leGVjdXRhYmxlID0gKDBvMTExICYgX3N0YXQubW9kZSkgIT09IDA7IC8vIGZpbGUgaXMgZXhlY3V0YWJsZSB3aG8gZXZlciBoYXIgcmlnaHQgbm90IGp1c3Qgb3duZXJcbiAgICAgICAgX29iai5yZWFkb25seSA9ICgwbzIwMCAmIF9zdGF0Lm1vZGUpID09PSAwOyAvLyByZWFkb25seSBpZiBvd25lciBoYXMgbm8gd3JpdGUgcmlnaHRcbiAgICAgICAgX29iai5oaWRkZW4gPSBwdGguYmFzZW5hbWUoX3BhdGgpWzBdID09PSBcIi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHBhdGg6IFwiICsgX3BhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBkaXJlY3RvcnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5kaXJlY3Rvcnk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHJlYWRPbmx5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmoucmVhZG9ubHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGhpZGRlbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLmhpZGRlbjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbXRpbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5tdGltZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgYXRpbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5hdGltZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZXhlY3V0YWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLmV4ZWN1dGFibGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVjb2RlQXR0cmlidXRlczogZnVuY3Rpb24gKCkge30sXG5cbiAgICAgICAgZW5jb2RlQXR0cmlidXRlczogZnVuY3Rpb24gKCkge30sXG5cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgICAgICAgIGlzRGlyZWN0b3J5OiBfb2JqLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBpc1JlYWRPbmx5OiBfb2JqLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIGlzSGlkZGVuOiBfb2JqLmhpZGRlbixcbiAgICAgICAgICAgICAgICBpc0V4ZWN1dGFibGU6IF9vYmouZXhlY3V0YWJsZSxcbiAgICAgICAgICAgICAgICBtVGltZTogX29iai5tdGltZSxcbiAgICAgICAgICAgICAgICBhVGltZTogX29iai5hdGltZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCksIG51bGwsIFwiXFx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZWZzOiB0cnVlLFxuICAgIGVuY29kZTogKGRhdGEpID0+IEJ1ZmZlci5mcm9tKGRhdGEsIFwidXRmOFwiKSxcbiAgICBkZWNvZGU6IChkYXRhKSA9PiBkYXRhLnRvU3RyaW5nKFwidXRmOFwiKVxufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xubW9kdWxlLmV4cG9ydHMuQ29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xubW9kdWxlLmV4cG9ydHMuRXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xubW9kdWxlLmV4cG9ydHMuRmlsZUF0dHIgPSByZXF1aXJlKFwiLi9mYXR0clwiKTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZXIgPSByZXF1aXJlKFwiLi9kZWNvZGVyXCIpO1xuIiwgInZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLFxuICAgIENvbnN0YW50cyA9IFV0aWxzLkNvbnN0YW50cztcblxuLyogVGhlIGNlbnRyYWwgZGlyZWN0b3J5IGZpbGUgaGVhZGVyICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Zlck1hZGUgPSAyMCwgLy8gdjIuMFxuICAgICAgICBfdmVyc2lvbiA9IDEwLCAvLyB2MS4wXG4gICAgICAgIF9mbGFncyA9IDAsXG4gICAgICAgIF9tZXRob2QgPSAwLFxuICAgICAgICBfdGltZSA9IDAsXG4gICAgICAgIF9jcmMgPSAwLFxuICAgICAgICBfY29tcHJlc3NlZFNpemUgPSAwLFxuICAgICAgICBfc2l6ZSA9IDAsXG4gICAgICAgIF9mbmFtZUxlbiA9IDAsXG4gICAgICAgIF9leHRyYUxlbiA9IDAsXG4gICAgICAgIF9jb21MZW4gPSAwLFxuICAgICAgICBfZGlza1N0YXJ0ID0gMCxcbiAgICAgICAgX2luYXR0ciA9IDAsXG4gICAgICAgIF9hdHRyID0gMCxcbiAgICAgICAgX29mZnNldCA9IDA7XG5cbiAgICBfdmVyTWFkZSB8PSBVdGlscy5pc1dpbiA/IDB4MGEwMCA6IDB4MDMwMDtcblxuICAgIC8vIFNldCBFRlMgZmxhZyBzaW5jZSBmaWxlbmFtZSBhbmQgY29tbWVudCBmaWVsZHMgYXJlIGFsbCBieSBkZWZhdWx0IGVuY29kZWQgdXNpbmcgVVRGLTguXG4gICAgLy8gV2l0aG91dCBpdCBmaWxlIG5hbWVzIG1heSBiZSBjb3JydXB0ZWQgZm9yIG90aGVyIGFwcHMgd2hlbiBmaWxlIG5hbWVzIHVzZSB1bmljb2RlIGNoYXJzXG4gICAgX2ZsYWdzIHw9IENvbnN0YW50cy5GTEdfRUZTO1xuXG4gICAgY29uc3QgX2xvY2FsSGVhZGVyID0ge1xuICAgICAgICBleHRyYUxlbjogMFxuICAgIH07XG5cbiAgICAvLyBjYXN0aW5nXG4gICAgY29uc3QgdWludDMyID0gKHZhbCkgPT4gTWF0aC5tYXgoMCwgdmFsKSA+Pj4gMDtcbiAgICBjb25zdCB1aW50MTYgPSAodmFsKSA9PiBNYXRoLm1heCgwLCB2YWwpICYgMHhmZmZmO1xuICAgIGNvbnN0IHVpbnQ4ID0gKHZhbCkgPT4gTWF0aC5tYXgoMCwgdmFsKSAmIDB4ZmY7XG5cbiAgICBfdGltZSA9IFV0aWxzLmZyb21EYXRlMkRPUyhuZXcgRGF0ZSgpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBtYWRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF92ZXJNYWRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbWFkZSh2YWwpIHtcbiAgICAgICAgICAgIF92ZXJNYWRlID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF92ZXJzaW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgdmVyc2lvbih2YWwpIHtcbiAgICAgICAgICAgIF92ZXJzaW9uID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBmbGFncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfZmxhZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBmbGFncyh2YWwpIHtcbiAgICAgICAgICAgIF9mbGFncyA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZmxhZ3NfZWZzKCkge1xuICAgICAgICAgICAgcmV0dXJuIChfZmxhZ3MgJiBDb25zdGFudHMuRkxHX0VGUykgPiAwO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZmxhZ3NfZWZzKHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgIF9mbGFncyB8PSBDb25zdGFudHMuRkxHX0VGUztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2ZsYWdzICY9IH5Db25zdGFudHMuRkxHX0VGUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZmxhZ3NfZGVzYygpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2ZsYWdzICYgQ29uc3RhbnRzLkZMR19ERVNDKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBmbGFnc19kZXNjKHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgIF9mbGFncyB8PSBDb25zdGFudHMuRkxHX0RFU0M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9mbGFncyAmPSB+Q29uc3RhbnRzLkZMR19ERVNDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBtZXRob2QoKSB7XG4gICAgICAgICAgICByZXR1cm4gX21ldGhvZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG1ldGhvZCh2YWwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdGFudHMuU1RPUkVEOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxMDtcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0YW50cy5ERUZMQVRFRDpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tZXRob2QgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuZnJvbURPUzJEYXRlKHRoaXMudGltZXZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB0aW1lKHZhbCkge1xuICAgICAgICAgICAgdGhpcy50aW1ldmFsID0gVXRpbHMuZnJvbURhdGUyRE9TKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpbWV2YWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RpbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB0aW1ldmFsKHZhbCkge1xuICAgICAgICAgICAgX3RpbWUgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdGltZUhpZ2hCeXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVpbnQ4KF90aW1lID4+PiA4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGNyYygpIHtcbiAgICAgICAgICAgIHJldHVybiBfY3JjO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY3JjKHZhbCkge1xuICAgICAgICAgICAgX2NyYyA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjb21wcmVzc2VkU2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29tcHJlc3NlZFNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjb21wcmVzc2VkU2l6ZSh2YWwpIHtcbiAgICAgICAgICAgIF9jb21wcmVzc2VkU2l6ZSA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgc2l6ZSh2YWwpIHtcbiAgICAgICAgICAgIF9zaXplID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGZpbGVOYW1lTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9mbmFtZUxlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGZpbGVOYW1lTGVuZ3RoKHZhbCkge1xuICAgICAgICAgICAgX2ZuYW1lTGVuID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBleHRyYUxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0cmFMZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBleHRyYUxlbmd0aCh2YWwpIHtcbiAgICAgICAgICAgIF9leHRyYUxlbiA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZXh0cmFMb2NhbExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbG9jYWxIZWFkZXIuZXh0cmFMZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBleHRyYUxvY2FsTGVuZ3RoKHZhbCkge1xuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmV4dHJhTGVuID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjb21tZW50TGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb21MZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjb21tZW50TGVuZ3RoKHZhbCkge1xuICAgICAgICAgICAgX2NvbUxlbiA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZGlza051bVN0YXJ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9kaXNrU3RhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBkaXNrTnVtU3RhcnQodmFsKSB7XG4gICAgICAgICAgICBfZGlza1N0YXJ0ID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGluQXR0cigpIHtcbiAgICAgICAgICAgIHJldHVybiBfaW5hdHRyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaW5BdHRyKHZhbCkge1xuICAgICAgICAgICAgX2luYXR0ciA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBhdHRyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9hdHRyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgYXR0cih2YWwpIHtcbiAgICAgICAgICAgIF9hdHRyID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZ2V0IFVuaXggZmlsZSBwZXJtaXNzaW9uc1xuICAgICAgICBnZXQgZmlsZUF0dHIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9hdHRyIHx8IDApID4+IDE2ICYgMHhmZmY7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb2Zmc2V0KHZhbCkge1xuICAgICAgICAgICAgX29mZnNldCA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9mbGFncyAmIENvbnN0YW50cy5GTEdfRU5DKSA9PT0gQ29uc3RhbnRzLkZMR19FTkM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNlbnRyYWxIZWFkZXJTaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5DRU5IRFIgKyBfZm5hbWVMZW4gKyBfZXh0cmFMZW4gKyBfY29tTGVuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCByZWFsRGF0YU9mZnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2Zmc2V0ICsgQ29uc3RhbnRzLkxPQ0hEUiArIF9sb2NhbEhlYWRlci5mbmFtZUxlbiArIF9sb2NhbEhlYWRlci5leHRyYUxlbjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbG9jYWxIZWFkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xvY2FsSGVhZGVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRMb2NhbEhlYWRlckZyb21CaW5hcnk6IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGlucHV0LnNsaWNlKF9vZmZzZXQsIF9vZmZzZXQgKyBDb25zdGFudHMuTE9DSERSKTtcbiAgICAgICAgICAgIC8vIDMwIGJ5dGVzIGFuZCBzaG91bGQgc3RhcnQgd2l0aCBcIlBLXFwwMDNcXDAwNFwiXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWFkVUludDMyTEUoMCkgIT09IENvbnN0YW50cy5MT0NTSUcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9MT0MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLnZlcnNpb24gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuTE9DVkVSKTtcbiAgICAgICAgICAgIC8vIGdlbmVyYWwgcHVycG9zZSBiaXQgZmxhZ1xuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmZsYWdzID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkxPQ0ZMRyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5tZXRob2QgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuTE9DSE9XKTtcbiAgICAgICAgICAgIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci50aW1lID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkxPQ1RJTSk7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdVxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmNyYyA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5MT0NDUkMpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuTE9DU0laKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuc2l6ZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5MT0NMRU4pO1xuICAgICAgICAgICAgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuZm5hbWVMZW4gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuTE9DTkFNKTtcbiAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmV4dHJhTGVuID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkxPQ0VYVCk7XG5cbiAgICAgICAgICAgIC8vIHJlYWQgZXh0cmEgZGF0YVxuICAgICAgICAgICAgY29uc3QgZXh0cmFTdGFydCA9IF9vZmZzZXQgKyBDb25zdGFudHMuTE9DSERSICsgX2xvY2FsSGVhZGVyLmZuYW1lTGVuO1xuICAgICAgICAgICAgY29uc3QgZXh0cmFFbmQgPSBleHRyYVN0YXJ0ICsgX2xvY2FsSGVhZGVyLmV4dHJhTGVuO1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnNsaWNlKGV4dHJhU3RhcnQsIGV4dHJhRW5kKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkRnJvbUJpbmFyeTogZnVuY3Rpb24gKC8qQnVmZmVyKi8gZGF0YSkge1xuICAgICAgICAgICAgLy8gZGF0YSBzaG91bGQgYmUgNDYgYnl0ZXMgYW5kIHN0YXJ0IHdpdGggXCJQSyAwMSAwMlwiXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggIT09IENvbnN0YW50cy5DRU5IRFIgfHwgZGF0YS5yZWFkVUludDMyTEUoMCkgIT09IENvbnN0YW50cy5DRU5TSUcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9DRU4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcnNpb24gbWFkZSBieVxuICAgICAgICAgICAgX3Zlck1hZGUgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOVkVNKTtcbiAgICAgICAgICAgIC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICAgICAgICAgIF92ZXJzaW9uID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTlZFUik7XG4gICAgICAgICAgICAvLyBlbmNyeXB0LCBkZWNyeXB0IGZsYWdzXG4gICAgICAgICAgICBfZmxhZ3MgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VORkxHKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgICAgICAgICAgX21ldGhvZCA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5IT1cpO1xuICAgICAgICAgICAgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgICAgICAgICAgX3RpbWUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOVElNKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgICAgICAgICAgX2NyYyA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5DUkMpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBfY29tcHJlc3NlZFNpemUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOU0laKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBfc2l6ZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5MRU4pO1xuICAgICAgICAgICAgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgICAgICAgICBfZm5hbWVMZW4gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOTkFNKTtcbiAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuICAgICAgICAgICAgX2V4dHJhTGVuID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkVYVCk7XG4gICAgICAgICAgICAvLyBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICBfY29tTGVuID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkNPTSk7XG4gICAgICAgICAgICAvLyB2b2x1bWUgbnVtYmVyIHN0YXJ0XG4gICAgICAgICAgICBfZGlza1N0YXJ0ID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkRTSyk7XG4gICAgICAgICAgICAvLyBpbnRlcm5hbCBmaWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIF9pbmF0dHIgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOQVRUKTtcbiAgICAgICAgICAgIC8vIGV4dGVybmFsIGZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgX2F0dHIgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOQVRYKTtcbiAgICAgICAgICAgIC8vIExPQyBoZWFkZXIgb2Zmc2V0XG4gICAgICAgICAgICBfb2Zmc2V0ID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTk9GRik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9jYWxIZWFkZXJUb0JpbmFyeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTE9DIGhlYWRlciBzaXplICgzMCBieXRlcylcbiAgICAgICAgICAgIHZhciBkYXRhID0gQnVmZmVyLmFsbG9jKENvbnN0YW50cy5MT0NIRFIpO1xuICAgICAgICAgICAgLy8gXCJQS1xcMDAzXFwwMDRcIlxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKENvbnN0YW50cy5MT0NTSUcsIDApO1xuICAgICAgICAgICAgLy8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF92ZXJzaW9uLCBDb25zdGFudHMuTE9DVkVSKTtcbiAgICAgICAgICAgIC8vIGdlbmVyYWwgcHVycG9zZSBiaXQgZmxhZ1xuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9mbGFncywgQ29uc3RhbnRzLkxPQ0ZMRyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfbWV0aG9kLCBDb25zdGFudHMuTE9DSE9XKTtcbiAgICAgICAgICAgIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfdGltZSwgQ29uc3RhbnRzLkxPQ1RJTSk7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfY3JjLCBDb25zdGFudHMuTE9DQ1JDKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9jb21wcmVzc2VkU2l6ZSwgQ29uc3RhbnRzLkxPQ1NJWik7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9zaXplLCBDb25zdGFudHMuTE9DTEVOKTtcbiAgICAgICAgICAgIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9mbmFtZUxlbiwgQ29uc3RhbnRzLkxPQ05BTSk7XG4gICAgICAgICAgICAvLyBleHRyYSBmaWVsZCBsZW5ndGhcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfbG9jYWxIZWFkZXIuZXh0cmFMZW4sIENvbnN0YW50cy5MT0NFWFQpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2VudHJhbEhlYWRlclRvQmluYXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDRU4gaGVhZGVyIHNpemUgKDQ2IGJ5dGVzKVxuICAgICAgICAgICAgdmFyIGRhdGEgPSBCdWZmZXIuYWxsb2MoQ29uc3RhbnRzLkNFTkhEUiArIF9mbmFtZUxlbiArIF9leHRyYUxlbiArIF9jb21MZW4pO1xuICAgICAgICAgICAgLy8gXCJQS1xcMDAxXFwwMDJcIlxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKENvbnN0YW50cy5DRU5TSUcsIDApO1xuICAgICAgICAgICAgLy8gdmVyc2lvbiBtYWRlIGJ5XG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX3Zlck1hZGUsIENvbnN0YW50cy5DRU5WRU0pO1xuICAgICAgICAgICAgLy8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF92ZXJzaW9uLCBDb25zdGFudHMuQ0VOVkVSKTtcbiAgICAgICAgICAgIC8vIGVuY3J5cHQsIGRlY3J5cHQgZmxhZ3NcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZmxhZ3MsIENvbnN0YW50cy5DRU5GTEcpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX21ldGhvZCwgQ29uc3RhbnRzLkNFTkhPVyk7XG4gICAgICAgICAgICAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX3RpbWUsIENvbnN0YW50cy5DRU5USU0pO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX2NyYywgQ29uc3RhbnRzLkNFTkNSQyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfY29tcHJlc3NlZFNpemUsIENvbnN0YW50cy5DRU5TSVopO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfc2l6ZSwgQ29uc3RhbnRzLkNFTkxFTik7XG4gICAgICAgICAgICAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZm5hbWVMZW4sIENvbnN0YW50cy5DRU5OQU0pO1xuICAgICAgICAgICAgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2V4dHJhTGVuLCBDb25zdGFudHMuQ0VORVhUKTtcbiAgICAgICAgICAgIC8vIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfY29tTGVuLCBDb25zdGFudHMuQ0VOQ09NKTtcbiAgICAgICAgICAgIC8vIHZvbHVtZSBudW1iZXIgc3RhcnRcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZGlza1N0YXJ0LCBDb25zdGFudHMuQ0VORFNLKTtcbiAgICAgICAgICAgIC8vIGludGVybmFsIGZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9pbmF0dHIsIENvbnN0YW50cy5DRU5BVFQpO1xuICAgICAgICAgICAgLy8gZXh0ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX2F0dHIsIENvbnN0YW50cy5DRU5BVFgpO1xuICAgICAgICAgICAgLy8gTE9DIGhlYWRlciBvZmZzZXRcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfb2Zmc2V0LCBDb25zdGFudHMuQ0VOT0ZGKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBmdW5jdGlvbiAobnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnIgKyBcIiBieXRlc1wiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYWRlOiBfdmVyTWFkZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBfdmVyc2lvbixcbiAgICAgICAgICAgICAgICBmbGFnczogX2ZsYWdzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogVXRpbHMubWV0aG9kVG9TdHJpbmcoX21ldGhvZCksXG4gICAgICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgICAgICAgICAgIGNyYzogXCIweFwiICsgX2NyYy50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBjb21wcmVzc2VkU2l6ZTogYnl0ZXMoX2NvbXByZXNzZWRTaXplKSxcbiAgICAgICAgICAgICAgICBzaXplOiBieXRlcyhfc2l6ZSksXG4gICAgICAgICAgICAgICAgZmlsZU5hbWVMZW5ndGg6IGJ5dGVzKF9mbmFtZUxlbiksXG4gICAgICAgICAgICAgICAgZXh0cmFMZW5ndGg6IGJ5dGVzKF9leHRyYUxlbiksXG4gICAgICAgICAgICAgICAgY29tbWVudExlbmd0aDogYnl0ZXMoX2NvbUxlbiksXG4gICAgICAgICAgICAgICAgZGlza051bVN0YXJ0OiBfZGlza1N0YXJ0LFxuICAgICAgICAgICAgICAgIGluQXR0cjogX2luYXR0cixcbiAgICAgICAgICAgICAgICBhdHRyOiBfYXR0cixcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IF9vZmZzZXQsXG4gICAgICAgICAgICAgICAgY2VudHJhbEhlYWRlclNpemU6IGJ5dGVzKENvbnN0YW50cy5DRU5IRFIgKyBfZm5hbWVMZW4gKyBfZXh0cmFMZW4gKyBfY29tTGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCksIG51bGwsIFwiXFx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAidmFyIFV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxcIiksXG4gICAgQ29uc3RhbnRzID0gVXRpbHMuQ29uc3RhbnRzO1xuXG4vKiBUaGUgZW50cmllcyBpbiB0aGUgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZvbHVtZUVudHJpZXMgPSAwLFxuICAgICAgICBfdG90YWxFbnRyaWVzID0gMCxcbiAgICAgICAgX3NpemUgPSAwLFxuICAgICAgICBfb2Zmc2V0ID0gMCxcbiAgICAgICAgX2NvbW1lbnRMZW5ndGggPSAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGRpc2tFbnRyaWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF92b2x1bWVFbnRyaWVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZGlza0VudHJpZXMoLypOdW1iZXIqLyB2YWwpIHtcbiAgICAgICAgICAgIF92b2x1bWVFbnRyaWVzID0gX3RvdGFsRW50cmllcyA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdG90YWxFbnRyaWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90b3RhbEVudHJpZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB0b3RhbEVudHJpZXMoLypOdW1iZXIqLyB2YWwpIHtcbiAgICAgICAgICAgIF90b3RhbEVudHJpZXMgPSBfdm9sdW1lRW50cmllcyA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHNpemUoLypOdW1iZXIqLyB2YWwpIHtcbiAgICAgICAgICAgIF9zaXplID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9mZnNldCgvKk51bWJlciovIHZhbCkge1xuICAgICAgICAgICAgX29mZnNldCA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY29tbWVudExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29tbWVudExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNvbW1lbnRMZW5ndGgoLypOdW1iZXIqLyB2YWwpIHtcbiAgICAgICAgICAgIF9jb21tZW50TGVuZ3RoID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBtYWluSGVhZGVyU2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb25zdGFudHMuRU5ESERSICsgX2NvbW1lbnRMZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZEZyb21CaW5hcnk6IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIGRhdGEgc2hvdWxkIGJlIDIyIGJ5dGVzIGFuZCBzdGFydCB3aXRoIFwiUEsgMDUgMDZcIlxuICAgICAgICAgICAgLy8gb3IgYmUgNTYrIGJ5dGVzIGFuZCBzdGFydCB3aXRoIFwiUEsgMDYgMDZcIiBmb3IgWmlwNjRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZGF0YS5sZW5ndGggIT09IENvbnN0YW50cy5FTkRIRFIgfHwgZGF0YS5yZWFkVUludDMyTEUoMCkgIT09IENvbnN0YW50cy5FTkRTSUcpICYmXG4gICAgICAgICAgICAgICAgKGRhdGEubGVuZ3RoIDwgQ29uc3RhbnRzLlpJUDY0SERSIHx8IGRhdGEucmVhZFVJbnQzMkxFKDApICE9PSBDb25zdGFudHMuWklQNjRTSUcpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9FTkQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEucmVhZFVJbnQzMkxFKDApID09PSBDb25zdGFudHMuRU5EU0lHKSB7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGVudHJpZXMgb24gdGhpcyB2b2x1bWVcbiAgICAgICAgICAgICAgICBfdm9sdW1lRW50cmllcyA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5FTkRTVUIpO1xuICAgICAgICAgICAgICAgIC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgICAgICAgICAgICAgX3RvdGFsRW50cmllcyA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5FTkRUT1QpO1xuICAgICAgICAgICAgICAgIC8vIGNlbnRyYWwgZGlyZWN0b3J5IHNpemUgaW4gYnl0ZXNcbiAgICAgICAgICAgICAgICBfc2l6ZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5FTkRTSVopO1xuICAgICAgICAgICAgICAgIC8vIG9mZnNldCBvZiBmaXJzdCBDRU4gaGVhZGVyXG4gICAgICAgICAgICAgICAgX29mZnNldCA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5FTkRPRkYpO1xuICAgICAgICAgICAgICAgIC8vIHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICAgICAgX2NvbW1lbnRMZW5ndGggPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuRU5EQ09NKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGVudHJpZXMgb24gdGhpcyB2b2x1bWVcbiAgICAgICAgICAgICAgICBfdm9sdW1lRW50cmllcyA9IFV0aWxzLnJlYWRCaWdVSW50NjRMRShkYXRhLCBDb25zdGFudHMuWklQNjRTVUIpO1xuICAgICAgICAgICAgICAgIC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgICAgICAgICAgICAgX3RvdGFsRW50cmllcyA9IFV0aWxzLnJlYWRCaWdVSW50NjRMRShkYXRhLCBDb25zdGFudHMuWklQNjRUT1QpO1xuICAgICAgICAgICAgICAgIC8vIGNlbnRyYWwgZGlyZWN0b3J5IHNpemUgaW4gYnl0ZXNcbiAgICAgICAgICAgICAgICBfc2l6ZSA9IFV0aWxzLnJlYWRCaWdVSW50NjRMRShkYXRhLCBDb25zdGFudHMuWklQNjRTSVpFKTtcbiAgICAgICAgICAgICAgICAvLyBvZmZzZXQgb2YgZmlyc3QgQ0VOIGhlYWRlclxuICAgICAgICAgICAgICAgIF9vZmZzZXQgPSBVdGlscy5yZWFkQmlnVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLlpJUDY0T0ZGKTtcblxuICAgICAgICAgICAgICAgIF9jb21tZW50TGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0b0JpbmFyeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGIgPSBCdWZmZXIuYWxsb2MoQ29uc3RhbnRzLkVOREhEUiArIF9jb21tZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIFwiUEsgMDUgMDZcIiBzaWduYXR1cmVcbiAgICAgICAgICAgIGIud3JpdGVVSW50MzJMRShDb25zdGFudHMuRU5EU0lHLCAwKTtcbiAgICAgICAgICAgIGIud3JpdGVVSW50MzJMRSgwLCA0KTtcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBlbnRyaWVzIG9uIHRoaXMgdm9sdW1lXG4gICAgICAgICAgICBiLndyaXRlVUludDE2TEUoX3ZvbHVtZUVudHJpZXMsIENvbnN0YW50cy5FTkRTVUIpO1xuICAgICAgICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICAgICAgICAgIGIud3JpdGVVSW50MTZMRShfdG90YWxFbnRyaWVzLCBDb25zdGFudHMuRU5EVE9UKTtcbiAgICAgICAgICAgIC8vIGNlbnRyYWwgZGlyZWN0b3J5IHNpemUgaW4gYnl0ZXNcbiAgICAgICAgICAgIGIud3JpdGVVSW50MzJMRShfc2l6ZSwgQ29uc3RhbnRzLkVORFNJWik7XG4gICAgICAgICAgICAvLyBvZmZzZXQgb2YgZmlyc3QgQ0VOIGhlYWRlclxuICAgICAgICAgICAgYi53cml0ZVVJbnQzMkxFKF9vZmZzZXQsIENvbnN0YW50cy5FTkRPRkYpO1xuICAgICAgICAgICAgLy8gemlwIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgIGIud3JpdGVVSW50MTZMRShfY29tbWVudExlbmd0aCwgQ29uc3RhbnRzLkVORENPTSk7XG4gICAgICAgICAgICAvLyBmaWxsIGNvbW1lbnQgbWVtb3J5IHdpdGggc3BhY2VzIHNvIG5vIGdhcmJhZ2UgaXMgbGVmdCB0aGVyZVxuICAgICAgICAgICAgYi5maWxsKFwiIFwiLCBDb25zdGFudHMuRU5ESERSKTtcblxuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGVzIDB4MDAwMCBzdHlsZSBvdXRwdXRcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGZ1bmN0aW9uIChuciwgbGVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnMgPSBuci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAob2Zmcy5sZW5ndGggPCBsZW4pIG9mZnMgPSBcIjBcIiArIG9mZnM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMHhcIiArIG9mZnM7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2tFbnRyaWVzOiBfdm9sdW1lRW50cmllcyxcbiAgICAgICAgICAgICAgICB0b3RhbEVudHJpZXM6IF90b3RhbEVudHJpZXMsXG4gICAgICAgICAgICAgICAgc2l6ZTogX3NpemUgKyBcIiBieXRlc1wiLFxuICAgICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0KF9vZmZzZXQsIDQpLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRMZW5ndGg6IF9jb21tZW50TGVuZ3RoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSwgbnVsbCwgXCJcXHRcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIE1pc3NwZWxsZWRcbiIsICJleHBvcnRzLkVudHJ5SGVhZGVyID0gcmVxdWlyZShcIi4vZW50cnlIZWFkZXJcIik7XG5leHBvcnRzLk1haW5IZWFkZXIgPSByZXF1aXJlKFwiLi9tYWluSGVhZGVyXCIpO1xuIiwgIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qQnVmZmVyKi8gaW5idWYpIHtcbiAgICB2YXIgemxpYiA9IHJlcXVpcmUoXCJ6bGliXCIpO1xuXG4gICAgdmFyIG9wdHMgPSB7IGNodW5rU2l6ZTogKHBhcnNlSW50KGluYnVmLmxlbmd0aCAvIDEwMjQpICsgMSkgKiAxMDI0IH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZWZsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemxpYi5kZWZsYXRlUmF3U3luYyhpbmJ1Ziwgb3B0cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmbGF0ZUFzeW5jOiBmdW5jdGlvbiAoLypGdW5jdGlvbiovIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gemxpYi5jcmVhdGVEZWZsYXRlUmF3KG9wdHMpLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgdG90YWwgPSAwO1xuICAgICAgICAgICAgdG1wLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRtcC5vbihcImVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZiA9IEJ1ZmZlci5hbGxvYyh0b3RhbCksXG4gICAgICAgICAgICAgICAgICAgIHdyaXR0ZW4gPSAwO1xuICAgICAgICAgICAgICAgIGJ1Zi5maWxsKDApO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5jb3B5KGJ1Ziwgd3JpdHRlbik7XG4gICAgICAgICAgICAgICAgICAgIHdyaXR0ZW4gKz0gcGFydC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGJ1Zik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRtcC5lbmQoaW5idWYpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiY29uc3QgdmVyc2lvbiA9ICsocHJvY2Vzcy52ZXJzaW9ucyA/IHByb2Nlc3MudmVyc2lvbnMubm9kZSA6IFwiXCIpLnNwbGl0KFwiLlwiKVswXSB8fCAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGluYnVmLCAvKm51bWJlciovIGV4cGVjdGVkTGVuZ3RoKSB7XG4gICAgdmFyIHpsaWIgPSByZXF1aXJlKFwiemxpYlwiKTtcbiAgICBjb25zdCBvcHRpb24gPSB2ZXJzaW9uID49IDE1ICYmIGV4cGVjdGVkTGVuZ3RoID4gMCA/IHsgbWF4T3V0cHV0TGVuZ3RoOiBleHBlY3RlZExlbmd0aCB9IDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbmZsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemxpYi5pbmZsYXRlUmF3U3luYyhpbmJ1Ziwgb3B0aW9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmZsYXRlQXN5bmM6IGZ1bmN0aW9uICgvKkZ1bmN0aW9uKi8gY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSB6bGliLmNyZWF0ZUluZmxhdGVSYXcob3B0aW9uKSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gMDtcbiAgICAgICAgICAgIHRtcC5vbihcImRhdGFcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0bXAub24oXCJlbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBCdWZmZXIuYWxsb2ModG90YWwpLFxuICAgICAgICAgICAgICAgICAgICB3cml0dGVuID0gMDtcbiAgICAgICAgICAgICAgICBidWYuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuY29weShidWYsIHdyaXR0ZW4pO1xuICAgICAgICAgICAgICAgICAgICB3cml0dGVuICs9IHBhcnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhidWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0bXAuZW5kKGluYnVmKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG4vLyBub2RlIGNyeXB0LCB3ZSB1c2UgaXQgZm9yIGdlbmVyYXRlIHNhbHRcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbmNvbnN0IHsgcmFuZG9tRmlsbFN5bmMgfSA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKFwiLi4vdXRpbC9lcnJvcnNcIik7XG5cbi8vIGdlbmVyYXRlIENSQzMyIGxvb2t1cCB0YWJsZVxuY29uc3QgY3JjdGFibGUgPSBuZXcgVWludDMyQXJyYXkoMjU2KS5tYXAoKHQsIGNyYykgPT4ge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgIGlmICgwICE9PSAoY3JjICYgMSkpIHtcbiAgICAgICAgICAgIGNyYyA9IChjcmMgPj4+IDEpIF4gMHhlZGI4ODMyMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyYyA+Pj49IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyYyA+Pj4gMDtcbn0pO1xuXG4vLyBDLXN0eWxlIHVJbnQzMiBNdWx0aXBseSAoZGlzY2FyZHMgaGlnaGVyIGJpdHMsIHdoZW4gSlMgbXVsdGlwbHkgZGlzY2FyZHMgbG93ZXIgYml0cylcbmNvbnN0IHVNdWwgPSAoYSwgYikgPT4gTWF0aC5pbXVsKGEsIGIpID4+PiAwO1xuXG4vLyBjcmMzMiBieXRlIHNpbmdsZSB1cGRhdGUgKGFjdHVhbGx5IHNhbWUgZnVuY3Rpb24gaXMgcGFydCBvZiB1dGlscy5jcmMzMiBmdW5jdGlvbiA6KSApXG5jb25zdCBjcmMzMnVwZGF0ZSA9IChwQ3JjMzIsIGJ2YWwpID0+IHtcbiAgICByZXR1cm4gY3JjdGFibGVbKHBDcmMzMiBeIGJ2YWwpICYgMHhmZl0gXiAocENyYzMyID4+PiA4KTtcbn07XG5cbi8vIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIHNhbHQgZm9yIGVuY3J5dGlvbiBoZWFkZXJcbmNvbnN0IGdlblNhbHQgPSAoKSA9PiB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJhbmRvbUZpbGxTeW5jKSB7XG4gICAgICAgIHJldHVybiByYW5kb21GaWxsU3luYyhCdWZmZXIuYWxsb2MoMTIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFjayBpZiBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZFxuICAgICAgICByZXR1cm4gZ2VuU2FsdC5ub2RlKCk7XG4gICAgfVxufTtcblxuLy8gc2FsdCBnZW5lcmF0aW9uIHdpdGggbm9kZSByYW5kb20gZnVuY3Rpb24gKG1haW5seSBhcyBmYWxsYmFjaylcbmdlblNhbHQubm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBzYWx0ID0gQnVmZmVyLmFsbG9jKDEyKTtcbiAgICBjb25zdCBsZW4gPSBzYWx0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBzYWx0W2ldID0gKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHhmZjtcbiAgICByZXR1cm4gc2FsdDtcbn07XG5cbi8vIGdlbmVyYWwgY29uZmlnXG5jb25zdCBjb25maWcgPSB7XG4gICAgZ2VuU2FsdFxufTtcblxuLy8gQ2xhc3MgSW5pdGtleXMgaGFuZGxlcyBzYW1lIGJhc2ljIG9wcyB3aXRoIGtleXNcbmZ1bmN0aW9uIEluaXRrZXlzKHB3KSB7XG4gICAgY29uc3QgcGFzcyA9IEJ1ZmZlci5pc0J1ZmZlcihwdykgPyBwdyA6IEJ1ZmZlci5mcm9tKHB3KTtcbiAgICB0aGlzLmtleXMgPSBuZXcgVWludDMyQXJyYXkoWzB4MTIzNDU2NzgsIDB4MjM0NTY3ODksIDB4MzQ1Njc4OTBdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy51cGRhdGVLZXlzKHBhc3NbaV0pO1xuICAgIH1cbn1cblxuSW5pdGtleXMucHJvdG90eXBlLnVwZGF0ZUtleXMgPSBmdW5jdGlvbiAoYnl0ZVZhbHVlKSB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cztcbiAgICBrZXlzWzBdID0gY3JjMzJ1cGRhdGUoa2V5c1swXSwgYnl0ZVZhbHVlKTtcbiAgICBrZXlzWzFdICs9IGtleXNbMF0gJiAweGZmO1xuICAgIGtleXNbMV0gPSB1TXVsKGtleXNbMV0sIDEzNDc3NTgxMykgKyAxO1xuICAgIGtleXNbMl0gPSBjcmMzMnVwZGF0ZShrZXlzWzJdLCBrZXlzWzFdID4+PiAyNCk7XG4gICAgcmV0dXJuIGJ5dGVWYWx1ZTtcbn07XG5cbkluaXRrZXlzLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGsgPSAodGhpcy5rZXlzWzJdIHwgMikgPj4+IDA7IC8vIGtleVxuICAgIHJldHVybiAodU11bChrLCBrIF4gMSkgPj4gOCkgJiAweGZmOyAvLyBkZWNvZGVcbn07XG5cbmZ1bmN0aW9uIG1ha2VfZGVjcnlwdGVyKC8qQnVmZmVyKi8gcHdkKSB7XG4gICAgLy8gMS4gU3RhZ2UgaW5pdGlhbGl6ZSBrZXlcbiAgICBjb25zdCBrZXlzID0gbmV3IEluaXRrZXlzKHB3ZCk7XG5cbiAgICAvLyByZXR1cm4gZGVjcnlwdGVyIGZ1bmN0aW9uXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKkJ1ZmZlciovIGRhdGEpIHtcbiAgICAgICAgLy8gcmVzdWx0IC0gd2UgY3JlYXRlIG5ldyBCdWZmZXIgZm9yIHJlc3VsdHNcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIC8vIHByb2Nlc3MgaW5wdXQgZGF0YVxuICAgICAgICBmb3IgKGxldCBjIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vYyBePSBrZXlzLm5leHQoKTtcbiAgICAgICAgICAgIC8vcmVzdWx0W3BvcysrXSA9IGM7IC8vIGRlY29kZSAmIFNhdmUgVmFsdWVcbiAgICAgICAgICAgIHJlc3VsdFtwb3MrK10gPSBrZXlzLnVwZGF0ZUtleXMoYyBeIGtleXMubmV4dCgpKTsgLy8gdXBkYXRlIGtleXMgd2l0aCBkZWNvZGVkIGJ5dGVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VfZW5jcnlwdGVyKC8qQnVmZmVyKi8gcHdkKSB7XG4gICAgLy8gMS4gU3RhZ2UgaW5pdGlhbGl6ZSBrZXlcbiAgICBjb25zdCBrZXlzID0gbmV3IEluaXRrZXlzKHB3ZCk7XG5cbiAgICAvLyByZXR1cm4gZW5jcnlwdGluZyBmdW5jdGlvbiwgcmVzdWx0IGFuZCBwb3MgaXMgaGVyZSBzbyB3ZSBkb250IGhhdmUgdG8gbWVyZ2UgYnVmZmVycyBsYXRlclxuICAgIHJldHVybiBmdW5jdGlvbiAoLypCdWZmZXIqLyBkYXRhLCAvKkJ1ZmZlciovIHJlc3VsdCwgLyogTnVtYmVyICovIHBvcyA9IDApIHtcbiAgICAgICAgLy8gcmVzdWx0IC0gd2UgY3JlYXRlIG5ldyBCdWZmZXIgZm9yIHJlc3VsdHNcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJlc3VsdCA9IEJ1ZmZlci5hbGxvYyhkYXRhLmxlbmd0aCk7XG4gICAgICAgIC8vIHByb2Nlc3MgaW5wdXQgZGF0YVxuICAgICAgICBmb3IgKGxldCBjIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzLm5leHQoKTsgLy8gc2F2ZSBrZXkgYnl0ZVxuICAgICAgICAgICAgcmVzdWx0W3BvcysrXSA9IGMgXiBrOyAvLyBzYXZlIHZhbFxuICAgICAgICAgICAga2V5cy51cGRhdGVLZXlzKGMpOyAvLyB1cGRhdGUga2V5cyB3aXRoIGRlY29kZWQgYnl0ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGVjcnlwdCgvKkJ1ZmZlciovIGRhdGEsIC8qT2JqZWN0Ki8gaGVhZGVyLCAvKlN0cmluZywgQnVmZmVyKi8gcHdkKSB7XG4gICAgaWYgKCFkYXRhIHx8ICFCdWZmZXIuaXNCdWZmZXIoZGF0YSkgfHwgZGF0YS5sZW5ndGggPCAxMikge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgIH1cblxuICAgIC8vIDEuIFdlIEluaXRpYWxpemUgYW5kIGdlbmVyYXRlIGRlY3J5cHRpbmcgZnVuY3Rpb25cbiAgICBjb25zdCBkZWNyeXB0ZXIgPSBtYWtlX2RlY3J5cHRlcihwd2QpO1xuXG4gICAgLy8gMi4gZGVjcnlwdCBzYWx0IHdoYXQgaXMgYWx3YXlzIDEyIGJ5dGVzIGFuZCBpcyBhIHBhcnQgb2YgZmlsZSBjb250ZW50XG4gICAgY29uc3Qgc2FsdCA9IGRlY3J5cHRlcihkYXRhLnNsaWNlKDAsIDEyKSk7XG5cbiAgICAvLyBpZiBiaXQgMyAoMHgwOCkgb2YgdGhlIGdlbmVyYWwtcHVycG9zZSBmbGFncyBmaWVsZCBpcyBzZXQsIGNoZWNrIHNhbHRbMTFdIHdpdGggdGhlIGhpZ2ggYnl0ZSBvZiB0aGUgaGVhZGVyIHRpbWVcbiAgICAvLyAyIGJ5dGUgZGF0YSBibG9jayAoYXMgcGVyIEluZm8tWmlwIHNwZWMpLCBvdGhlcndpc2UgY2hlY2sgd2l0aCB0aGUgaGlnaCBieXRlIG9mIHRoZSBoZWFkZXIgZW50cnlcbiAgICBjb25zdCB2ZXJpZnlCeXRlID0gKGhlYWRlci5mbGFncyAmIDB4OCkgPT09IDB4OCA/IGhlYWRlci50aW1lSGlnaEJ5dGUgOiBoZWFkZXIuY3JjID4+PiAyNDtcblxuICAgIC8vMy4gZG9lcyBwYXNzd29yZCBtZWV0IGV4cGVjdGF0aW9uc1xuICAgIGlmIChzYWx0WzExXSAhPT0gdmVyaWZ5Qnl0ZSkge1xuICAgICAgICB0aHJvdyBFcnJvcnMuV1JPTkdfUEFTU1dPUkQoKTtcbiAgICB9XG5cbiAgICAvLyA0LiBkZWNvZGUgY29udGVudFxuICAgIHJldHVybiBkZWNyeXB0ZXIoZGF0YS5zbGljZSgxMikpO1xufVxuXG4vLyBsZXRzIGFkZCB3YXkgdG8gcG9wdWxhdGUgc2FsdCwgTk9UIFJFQ09NTUVOREVEIGZvciBwcm9kdWN0aW9uIGJ1dCBtYXliZSB1c2VmdWwgZm9yIHRlc3RpbmcgZ2VuZXJhbCBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBfc2FsdGVyKGRhdGEpIHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpICYmIGRhdGEubGVuZ3RoID49IDEyKSB7XG4gICAgICAgIC8vIGJlIGF3YXJlIC0gY3VycmVudGx5IHNhbHRpbmcgYnVmZmVyIGRhdGEgaXMgbW9kaWZpZWRcbiAgICAgICAgY29uZmlnLmdlblNhbHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5zbGljZSgwLCAxMik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRhID09PSBcIm5vZGVcIikge1xuICAgICAgICAvLyB0ZXN0IHNhbHQgZ2VuZXJhdGlvbiB3aXRoIG5vZGUgcmFuZG9tIGZ1bmN0aW9uXG4gICAgICAgIGNvbmZpZy5nZW5TYWx0ID0gZ2VuU2FsdC5ub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHZhbHVlIGlzIG5vdCBhY2NlcHRhYmxlIGNvbmZpZyBnZXRzIHJlc2V0LlxuICAgICAgICBjb25maWcuZ2VuU2FsdCA9IGdlblNhbHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmNyeXB0KC8qQnVmZmVyKi8gZGF0YSwgLypPYmplY3QqLyBoZWFkZXIsIC8qU3RyaW5nLCBCdWZmZXIqLyBwd2QsIC8qQm9vbGVhbiovIG9sZGxpa2UgPSBmYWxzZSkge1xuICAgIC8vIDEuIHRlc3QgZGF0YSBpZiBkYXRhIGlzIG5vdCBCdWZmZXIgd2UgbWFrZSBidWZmZXIgZnJvbSBpdFxuICAgIGlmIChkYXRhID09IG51bGwpIGRhdGEgPSBCdWZmZXIuYWxsb2MoMCk7XG4gICAgLy8gaWYgZGF0YSBpcyBub3QgYnVmZmVyIGJlIG1ha2UgYnVmZmVyIGZyb20gaXRcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEudG9TdHJpbmcoKSk7XG5cbiAgICAvLyAyLiBXZSBJbml0aWFsaXplIGFuZCBnZW5lcmF0ZSBlbmNyeXB0aW5nIGZ1bmN0aW9uXG4gICAgY29uc3QgZW5jcnlwdGVyID0gbWFrZV9lbmNyeXB0ZXIocHdkKTtcblxuICAgIC8vIDMuIGdlbmVyYXRlIHNhbHQgKDEyLWJ5dGVzIG9mIHJhbmRvbSBkYXRhKVxuICAgIGNvbnN0IHNhbHQgPSBjb25maWcuZ2VuU2FsdCgpO1xuICAgIHNhbHRbMTFdID0gKGhlYWRlci5jcmMgPj4+IDI0KSAmIDB4ZmY7XG5cbiAgICAvLyBvbGQgaW1wbGVtZW50YXRpb25zIChiZWZvcmUgUEtaaXAgMi4wNGcpIHVzZWQgdHdvIGJ5dGUgY2hlY2tcbiAgICBpZiAob2xkbGlrZSkgc2FsdFsxMF0gPSAoaGVhZGVyLmNyYyA+Pj4gMTYpICYgMHhmZjtcblxuICAgIC8vIDQuIGNyZWF0ZSBvdXRwdXRcbiAgICBjb25zdCByZXN1bHQgPSBCdWZmZXIuYWxsb2MoZGF0YS5sZW5ndGggKyAxMik7XG4gICAgZW5jcnlwdGVyKHNhbHQsIHJlc3VsdCk7XG5cbiAgICAvLyBmaW5hbGx5IGVuY29kZSBjb250ZW50XG4gICAgcmV0dXJuIGVuY3J5cHRlcihkYXRhLCByZXN1bHQsIDEyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGRlY3J5cHQsIGVuY3J5cHQsIF9zYWx0ZXIgfTtcbiIsICJleHBvcnRzLkRlZmxhdGVyID0gcmVxdWlyZShcIi4vZGVmbGF0ZXJcIik7XG5leHBvcnRzLkluZmxhdGVyID0gcmVxdWlyZShcIi4vaW5mbGF0ZXJcIik7XG5leHBvcnRzLlppcENyeXB0byA9IHJlcXVpcmUoXCIuL3ppcGNyeXB0b1wiKTtcbiIsICJ2YXIgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsXCIpLFxuICAgIEhlYWRlcnMgPSByZXF1aXJlKFwiLi9oZWFkZXJzXCIpLFxuICAgIENvbnN0YW50cyA9IFV0aWxzLkNvbnN0YW50cyxcbiAgICBNZXRob2RzID0gcmVxdWlyZShcIi4vbWV0aG9kc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLyoqIG9iamVjdCAqLyBvcHRpb25zLCAvKkJ1ZmZlciovIGlucHV0KSB7XG4gICAgdmFyIF9jZW50cmFsSGVhZGVyID0gbmV3IEhlYWRlcnMuRW50cnlIZWFkZXIoKSxcbiAgICAgICAgX2VudHJ5TmFtZSA9IEJ1ZmZlci5hbGxvYygwKSxcbiAgICAgICAgX2NvbW1lbnQgPSBCdWZmZXIuYWxsb2MoMCksXG4gICAgICAgIF9pc0RpcmVjdG9yeSA9IGZhbHNlLFxuICAgICAgICB1bmNvbXByZXNzZWREYXRhID0gbnVsbCxcbiAgICAgICAgX2V4dHJhID0gQnVmZmVyLmFsbG9jKDApLFxuICAgICAgICBfZXh0cmFsb2NhbCA9IEJ1ZmZlci5hbGxvYygwKSxcbiAgICAgICAgX2VmcyA9IHRydWU7XG5cbiAgICAvLyBhc3NpZ24gb3B0aW9uc1xuICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zO1xuXG4gICAgY29uc3QgZGVjb2RlciA9IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09IFwib2JqZWN0XCIgPyBvcHRzLmRlY29kZXIgOiBVdGlscy5kZWNvZGVyO1xuICAgIF9lZnMgPSBkZWNvZGVyLmhhc093blByb3BlcnR5KFwiZWZzXCIpID8gZGVjb2Rlci5lZnMgOiBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGdldENvbXByZXNzZWREYXRhRnJvbVppcCgpIHtcbiAgICAgICAgLy9pZiAoIWlucHV0IHx8ICFCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgIGlmICghaW5wdXQgfHwgIShpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgICAgICB9XG4gICAgICAgIF9leHRyYWxvY2FsID0gX2NlbnRyYWxIZWFkZXIubG9hZExvY2FsSGVhZGVyRnJvbUJpbmFyeShpbnB1dCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShfY2VudHJhbEhlYWRlci5yZWFsRGF0YU9mZnNldCwgX2NlbnRyYWxIZWFkZXIucmVhbERhdGFPZmZzZXQgKyBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JjMzJPSyhkYXRhKSB7XG4gICAgICAgIC8vIGlmIGJpdCAzICgweDA4KSBvZiB0aGUgZ2VuZXJhbC1wdXJwb3NlIGZsYWdzIGZpZWxkIGlzIHNldCwgdGhlbiB0aGUgQ1JDLTMyIGFuZCBmaWxlIHNpemVzIGFyZSBub3Qga25vd24gd2hlbiB0aGUgbG9jYWwgaGVhZGVyIGlzIHdyaXR0ZW5cbiAgICAgICAgaWYgKCFfY2VudHJhbEhlYWRlci5mbGFnc19kZXNjKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuY3JjMzIoZGF0YSkgIT09IF9jZW50cmFsSGVhZGVyLmxvY2FsSGVhZGVyLmNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFFbmRPZmZzZXQgPSBfY2VudHJhbEhlYWRlci5yZWFsRGF0YU9mZnNldCArIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplO1xuICAgICAgICAgICAgLy8gbm8gZGVzY3JpcHRvciBhZnRlciBjb21wcmVzc2VkIGRhdGEsIGluc3RlYWQgbmV3IGxvY2FsIGhlYWRlclxuICAgICAgICAgICAgaWYgKGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0KSA9PSBDb25zdGFudHMuTE9DU0lHIHx8IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0KSA9PSBDb25zdGFudHMuQ0VOU0lHKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkRFU0NSSVBUT1JfTk9UX0VYSVNUKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGdldCBkZWNyaXB0b3IgZGF0YVxuICAgICAgICAgICAgaWYgKGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0KSA9PSBDb25zdGFudHMuRVhUU0lHKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRvciB3aXRoIHNpZ25hdHVyZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY3JjID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUQ1JDKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbXByZXNzZWRTaXplID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUU0laKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNpemUgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRMRU4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5yZWFkVUludDE2TEUoZGF0YUVuZE9mZnNldCArIDEyKSA9PT0gMHg0YjUwKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRvciB3aXRob3V0IHNpZ25hdHVyZSAod2UgY2hlY2sgaXMgbmV3IGhlYWRlciBzdGFydGluZyB3aGVyZSB3ZSBleHBlY3QpXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jcmMgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRDUkMgLSA0KTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbXByZXNzZWRTaXplID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUU0laIC0gNCk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zaXplID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUTEVOIC0gNCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5ERVNDUklQVE9SX1VOS05PV04oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZGF0YSBpbnRlZ3JpdHlcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLmNvbXByZXNzZWRTaXplICE9PSBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSB8fCBkZXNjcmlwdG9yLnNpemUgIT09IF9jZW50cmFsSGVhZGVyLnNpemUgfHwgZGVzY3JpcHRvci5jcmMgIT09IF9jZW50cmFsSGVhZGVyLmNyYykge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5ERVNDUklQVE9SX0ZBVUxUWSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFV0aWxzLmNyYzMyKGRhdGEpICE9PSBkZXNjcmlwdG9yLmNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQFRPRE86IHppcDY0IGJpdCBkZXNjcmlwdG9yIGZpZWxkc1xuICAgICAgICAgICAgLy8gaWYgYml0IDMgaXMgc2V0IGFuZCBhbnkgdmFsdWUgaW4gbG9jYWwgaGVhZGVyIFwiemlwNjQgRXh0ZW5kZWQgaW5mb3JtYXRpb25cIiBleHRyYSBmaWVsZCBhcmUgc2V0IDAgKHBsYWNlIGhvbGRlcilcbiAgICAgICAgICAgIC8vIHRoZW4gNjQtYml0IGRlc2NyaXB0b3IgZm9ybWF0IGlzIHVzZWQgaW5zdGVhZCBvZiAzMi1iaXRcbiAgICAgICAgICAgIC8vIGNlbnRyYWwgaGVhZGVyIC0gXCJ6aXA2NCBFeHRlbmRlZCBpbmZvcm1hdGlvblwiIGV4dHJhIGZpZWxkIHNob3VsZCBzdG9yZSByZWFsIHZhbHVlcyBhbmQgbm90IHBsYWNlIGhvbGRlcnNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvbXByZXNzKC8qQm9vbGVhbiovIGFzeW5jLCAvKkZ1bmN0aW9uKi8gY2FsbGJhY2ssIC8qU3RyaW5nLCBCdWZmZXIqLyBwYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFzeW5jID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXNzID0gYXN5bmM7XG4gICAgICAgICAgICBhc3luYyA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2lzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhCdWZmZXIuYWxsb2MoMCksIFV0aWxzLkVycm9ycy5ESVJFQ1RPUllfQ09OVEVOVF9FUlJPUigpKTsgLy9zaSBhZGRlZCBlcnJvci5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcHJlc3NlZERhdGEgPSBnZXRDb21wcmVzc2VkRGF0YUZyb21aaXAoKTtcblxuICAgICAgICBpZiAoY29tcHJlc3NlZERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBGaWxlIGlzIGVtcHR5LCBub3RoaW5nIHRvIGRlY29tcHJlc3MuXG4gICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2VkRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5lbmNyeXB0ZWQpIHtcbiAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9PSB0eXBlb2YgcGFzcyAmJiAhQnVmZmVyLmlzQnVmZmVyKHBhc3MpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfUEFTU19QQVJBTSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcHJlc3NlZERhdGEgPSBNZXRob2RzLlppcENyeXB0by5kZWNyeXB0KGNvbXByZXNzZWREYXRhLCBfY2VudHJhbEhlYWRlciwgcGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YSA9IEJ1ZmZlci5hbGxvYyhfY2VudHJhbEhlYWRlci5zaXplKTtcblxuICAgICAgICBzd2l0Y2ggKF9jZW50cmFsSGVhZGVyLm1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSBVdGlscy5Db25zdGFudHMuU1RPUkVEOlxuICAgICAgICAgICAgICAgIGNvbXByZXNzZWREYXRhLmNvcHkoZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjcmMzMk9LKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soZGF0YSwgVXRpbHMuRXJyb3JzLkJBRF9DUkMoKSk7IC8vc2kgYWRkZWQgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkJBRF9DUkMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3NpIGFkZGVkIG90aGVyd2lzZSBkaWQgbm90IHNlZW0gdG8gcmV0dXJuIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgVXRpbHMuQ29uc3RhbnRzLkRFRkxBVEVEOlxuICAgICAgICAgICAgICAgIHZhciBpbmZsYXRlciA9IG5ldyBNZXRob2RzLkluZmxhdGVyKGNvbXByZXNzZWREYXRhLCBfY2VudHJhbEhlYWRlci5zaXplKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGluZmxhdGVyLmluZmxhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jb3B5KGRhdGEsIDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyYzMyT0soZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5CQURfQ1JDKGBcIiR7ZGVjb2Rlci5kZWNvZGUoX2VudHJ5TmFtZSl9XCJgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZsYXRlci5pbmZsYXRlQXN5bmMoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvcHkocmVzdWx0LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3JjMzJPSyhyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgVXRpbHMuRXJyb3JzLkJBRF9DUkMoKSk7IC8vc2kgYWRkZWQgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKEJ1ZmZlci5hbGxvYygwKSwgVXRpbHMuRXJyb3JzLlVOS05PV05fTUVUSE9EKCkpO1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5VTktOT1dOX01FVEhPRCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHJlc3MoLypCb29sZWFuKi8gYXN5bmMsIC8qRnVuY3Rpb24qLyBjYWxsYmFjaykge1xuICAgICAgICBpZiAoKCF1bmNvbXByZXNzZWREYXRhIHx8ICF1bmNvbXByZXNzZWREYXRhLmxlbmd0aCkgJiYgQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICAgICAgLy8gbm8gZGF0YSBzZXQgb3IgdGhlIGRhdGEgd2Fzbid0IGNoYW5nZWQgdG8gcmVxdWlyZSByZWNvbXByZXNzaW9uXG4gICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKGdldENvbXByZXNzZWREYXRhRnJvbVppcCgpKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wcmVzc2VkRGF0YUZyb21aaXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1bmNvbXByZXNzZWREYXRhLmxlbmd0aCAmJiAhX2lzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB2YXIgY29tcHJlc3NlZERhdGE7XG4gICAgICAgICAgICAvLyBMb2NhbCBmaWxlIGhlYWRlclxuICAgICAgICAgICAgc3dpdGNoIChfY2VudHJhbEhlYWRlci5tZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFV0aWxzLkNvbnN0YW50cy5TVE9SRUQ6XG4gICAgICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplID0gX2NlbnRyYWxIZWFkZXIuc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2VkRGF0YSA9IEJ1ZmZlci5hbGxvYyh1bmNvbXByZXNzZWREYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHVuY29tcHJlc3NlZERhdGEuY29weShjb21wcmVzc2VkRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhjb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2VkRGF0YTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNhc2UgVXRpbHMuQ29uc3RhbnRzLkRFRkxBVEVEOlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmbGF0ZXIgPSBuZXcgTWV0aG9kcy5EZWZsYXRlcih1bmNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmxhdGVkID0gZGVmbGF0ZXIuZGVmbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPSBkZWZsYXRlZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmbGF0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZsYXRlci5kZWZsYXRlQXN5bmMoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2VkRGF0YSA9IEJ1ZmZlci5hbGxvYyhkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvcHkoY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmxhdGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEJ1ZmZlci5hbGxvYygwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZFVJbnQ2NExFKGJ1ZmZlciwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAoYnVmZmVyLnJlYWRVSW50MzJMRShvZmZzZXQgKyA0KSA8PCA0KSArIGJ1ZmZlci5yZWFkVUludDMyTEUob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUV4dHJhKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmFyIHNpZ25hdHVyZSwgc2l6ZSwgcGFydDtcbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgKyA0IDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUgPSBkYXRhLnJlYWRVSW50MTZMRShvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIHNpemUgPSBkYXRhLnJlYWRVSW50MTZMRShvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIHBhcnQgPSBkYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2l6ZSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgICAgICAgICAgICAgaWYgKENvbnN0YW50cy5JRF9aSVA2NCA9PT0gc2lnbmF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlWmlwNjRFeHRlbmRlZEluZm9ybWF0aW9uKHBhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5FWFRSQV9GSUVMRF9QQVJTRV9FUlJPUigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9PdmVycmlkZSBoZWFkZXIgZmllbGQgdmFsdWVzIHdpdGggdmFsdWVzIGZyb20gdGhlIFpJUDY0IGV4dHJhIGZpZWxkXG4gICAgZnVuY3Rpb24gcGFyc2VaaXA2NEV4dGVuZGVkSW5mb3JtYXRpb24oZGF0YSkge1xuICAgICAgICB2YXIgc2l6ZSwgY29tcHJlc3NlZFNpemUsIG9mZnNldCwgZGlza051bVN0YXJ0O1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+PSBDb25zdGFudHMuRUZfWklQNjRfU0NPTVApIHtcbiAgICAgICAgICAgIHNpemUgPSByZWFkVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLkVGX1pJUDY0X1NVTkNPTVApO1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLnNpemUgPT09IENvbnN0YW50cy5FRl9aSVA2NF9PUl8zMikge1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+PSBDb25zdGFudHMuRUZfWklQNjRfUkhPKSB7XG4gICAgICAgICAgICBjb21wcmVzc2VkU2l6ZSA9IHJlYWRVSW50NjRMRShkYXRhLCBDb25zdGFudHMuRUZfWklQNjRfU0NPTVApO1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplID09PSBDb25zdGFudHMuRUZfWklQNjRfT1JfMzIpIHtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9IGNvbXByZXNzZWRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+PSBDb25zdGFudHMuRUZfWklQNjRfRFNOKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSByZWFkVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLkVGX1pJUDY0X1JITyk7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIub2Zmc2V0ID09PSBDb25zdGFudHMuRUZfWklQNjRfT1JfMzIpIHtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID49IENvbnN0YW50cy5FRl9aSVA2NF9EU04gKyA0KSB7XG4gICAgICAgICAgICBkaXNrTnVtU3RhcnQgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuRUZfWklQNjRfRFNOKTtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5kaXNrTnVtU3RhcnQgPT09IENvbnN0YW50cy5FRl9aSVA2NF9PUl8xNikge1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmRpc2tOdW1TdGFydCA9IGRpc2tOdW1TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBlbnRyeU5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoX2VudHJ5TmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCByYXdFbnRyeU5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2VudHJ5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGVudHJ5TmFtZSh2YWwpIHtcbiAgICAgICAgICAgIF9lbnRyeU5hbWUgPSBVdGlscy50b0J1ZmZlcih2YWwsIGRlY29kZXIuZW5jb2RlKTtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hhciA9IF9lbnRyeU5hbWVbX2VudHJ5TmFtZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIF9pc0RpcmVjdG9yeSA9IGxhc3RDaGFyID09PSA0NyB8fCBsYXN0Q2hhciA9PT0gOTI7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5maWxlTmFtZUxlbmd0aCA9IF9lbnRyeU5hbWUubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBlZnMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF9lZnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZWZzKHRoaXMuZW50cnlOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9lZnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGV4dHJhKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRyYTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGV4dHJhKHZhbCkge1xuICAgICAgICAgICAgX2V4dHJhID0gdmFsO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZXh0cmFMZW5ndGggPSB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgcGFyc2VFeHRyYSh2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjb21tZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKF9jb21tZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNvbW1lbnQodmFsKSB7XG4gICAgICAgICAgICBfY29tbWVudCA9IFV0aWxzLnRvQnVmZmVyKHZhbCwgZGVjb2Rlci5lbmNvZGUpO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY29tbWVudExlbmd0aCA9IF9jb21tZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChfY29tbWVudC5sZW5ndGggPiAweGZmZmYpIHRocm93IFV0aWxzLkVycm9ycy5DT01NRU5UX1RPT19MT05HKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGRlY29kZXIuZGVjb2RlKF9lbnRyeU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIF9pc0RpcmVjdG9yeVxuICAgICAgICAgICAgICAgID8gblxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHIobi5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgICAgICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgICAgICA6IG4uc3BsaXQoXCIvXCIpLnBvcCgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNEaXJlY3RvcnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2lzRGlyZWN0b3J5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldENvbXByZXNzZWREYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcHJlc3MoZmFsc2UsIG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldENvbXByZXNzZWREYXRhQXN5bmM6IGZ1bmN0aW9uICgvKkZ1bmN0aW9uKi8gY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbXByZXNzKHRydWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHVuY29tcHJlc3NlZERhdGEgPSBVdGlscy50b0J1ZmZlcih2YWx1ZSwgVXRpbHMuZGVjb2Rlci5lbmNvZGUpO1xuICAgICAgICAgICAgaWYgKCFfaXNEaXJlY3RvcnkgJiYgdW5jb21wcmVzc2VkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5zaXplID0gdW5jb21wcmVzc2VkRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIubWV0aG9kID0gVXRpbHMuQ29uc3RhbnRzLkRFRkxBVEVEO1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNyYyA9IFV0aWxzLmNyYzMyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZm9sZGVycyBhbmQgYmxhbmsgZmlsZXMgc2hvdWxkIGJlIHN0b3JlZFxuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLm1ldGhvZCA9IFV0aWxzLkNvbnN0YW50cy5TVE9SRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RGF0YTogZnVuY3Rpb24gKHBhc3MpIHtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuY29tcHJlc3NlZERhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvbXByZXNzKGZhbHNlLCBudWxsLCBwYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXREYXRhQXN5bmM6IGZ1bmN0aW9uICgvKkZ1bmN0aW9uKi8gY2FsbGJhY2ssIHBhc3MpIHtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5jb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY29tcHJlc3ModHJ1ZSwgY2FsbGJhY2ssIHBhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBhdHRyKGF0dHIpIHtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmF0dHIgPSBhdHRyO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgYXR0cigpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2VudHJhbEhlYWRlci5hdHRyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBoZWFkZXIoLypCdWZmZXIqLyBkYXRhKSB7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5sb2FkRnJvbUJpbmFyeShkYXRhKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgaGVhZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jZW50cmFsSGVhZGVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhY2tDZW50cmFsSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5mbGFnc19lZnMgPSB0aGlzLmVmcztcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmV4dHJhTGVuZ3RoID0gX2V4dHJhLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIDEuIGNyZWF0ZSBoZWFkZXIgKGJ1ZmZlcilcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBfY2VudHJhbEhlYWRlci5jZW50cmFsSGVhZGVyVG9CaW5hcnkoKTtcbiAgICAgICAgICAgIHZhciBhZGRwb3MgPSBVdGlscy5Db25zdGFudHMuQ0VOSERSO1xuICAgICAgICAgICAgLy8gMi4gYWRkIGZpbGUgbmFtZVxuICAgICAgICAgICAgX2VudHJ5TmFtZS5jb3B5KGhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIGFkZHBvcyArPSBfZW50cnlOYW1lLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIDMuIGFkZCBleHRyYSBkYXRhXG4gICAgICAgICAgICBfZXh0cmEuY29weShoZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICBhZGRwb3MgKz0gX2NlbnRyYWxIZWFkZXIuZXh0cmFMZW5ndGg7XG4gICAgICAgICAgICAvLyA0LiBhZGQgZmlsZSBjb21tZW50XG4gICAgICAgICAgICBfY29tbWVudC5jb3B5KGhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFja0xvY2FsSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgYWRkcG9zID0gMDtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmZsYWdzX2VmcyA9IHRoaXMuZWZzO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZXh0cmFMb2NhbExlbmd0aCA9IF9leHRyYWxvY2FsLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIDEuIGNvbnN0cnVjdCBsb2NhbCBoZWFkZXIgQnVmZmVyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEhlYWRlckJ1ZiA9IF9jZW50cmFsSGVhZGVyLmxvY2FsSGVhZGVyVG9CaW5hcnkoKTtcbiAgICAgICAgICAgIC8vIDIuIGxvY2FsSGVhZGVyIC0gY3JhdGUgaGVhZGVyIGJ1ZmZlclxuICAgICAgICAgICAgY29uc3QgbG9jYWxIZWFkZXIgPSBCdWZmZXIuYWxsb2MobG9jYWxIZWFkZXJCdWYubGVuZ3RoICsgX2VudHJ5TmFtZS5sZW5ndGggKyBfY2VudHJhbEhlYWRlci5leHRyYUxvY2FsTGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIDIuMSBhZGQgbG9jYWxoZWFkZXJcbiAgICAgICAgICAgIGxvY2FsSGVhZGVyQnVmLmNvcHkobG9jYWxIZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICBhZGRwb3MgKz0gbG9jYWxIZWFkZXJCdWYubGVuZ3RoO1xuICAgICAgICAgICAgLy8gMi4yIGFkZCBmaWxlIG5hbWVcbiAgICAgICAgICAgIF9lbnRyeU5hbWUuY29weShsb2NhbEhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIGFkZHBvcyArPSBfZW50cnlOYW1lLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIDIuMyBhZGQgZXh0cmEgZmllbGRcbiAgICAgICAgICAgIF9leHRyYWxvY2FsLmNvcHkobG9jYWxIZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICBhZGRwb3MgKz0gX2V4dHJhbG9jYWwubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxIZWFkZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGZ1bmN0aW9uIChucikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjxcIiArICgobnIgJiYgbnIubGVuZ3RoICsgXCIgYnl0ZXMgYnVmZmVyXCIpIHx8IFwibnVsbFwiKSArIFwiPlwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbnRyeU5hbWU6IHRoaXMuZW50cnlOYW1lLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgaXNEaXJlY3Rvcnk6IHRoaXMuaXNEaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBfY2VudHJhbEhlYWRlci50b0pTT04oKSxcbiAgICAgICAgICAgICAgICBjb21wcmVzc2VkRGF0YTogYnl0ZXMoaW5wdXQpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGJ5dGVzKHVuY29tcHJlc3NlZERhdGEpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSwgbnVsbCwgXCJcXHRcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJjb25zdCBaaXBFbnRyeSA9IHJlcXVpcmUoXCIuL3ppcEVudHJ5XCIpO1xuY29uc3QgSGVhZGVycyA9IHJlcXVpcmUoXCIuL2hlYWRlcnNcIik7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qQnVmZmVyfG51bGwqLyBpbkJ1ZmZlciwgLyoqIG9iamVjdCAqLyBvcHRpb25zKSB7XG4gICAgdmFyIGVudHJ5TGlzdCA9IFtdLFxuICAgICAgICBlbnRyeVRhYmxlID0ge30sXG4gICAgICAgIF9jb21tZW50ID0gQnVmZmVyLmFsbG9jKDApLFxuICAgICAgICBtYWluSGVhZGVyID0gbmV3IEhlYWRlcnMuTWFpbkhlYWRlcigpLFxuICAgICAgICBsb2FkZWRFbnRyaWVzID0gZmFsc2U7XG4gICAgdmFyIHBhc3N3b3JkID0gbnVsbDtcbiAgICBjb25zdCB0ZW1wb3JhcnkgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBhc3NpZ24gb3B0aW9uc1xuICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zO1xuXG4gICAgY29uc3QgeyBub1NvcnQsIGRlY29kZXIgfSA9IG9wdHM7XG5cbiAgICBpZiAoaW5CdWZmZXIpIHtcbiAgICAgICAgLy8gaXMgYSBtZW1vcnkgYnVmZmVyXG4gICAgICAgIHJlYWRNYWluSGVhZGVyKG9wdHMucmVhZEVudHJpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbmUuIGlzIGEgbmV3IGZpbGVcbiAgICAgICAgbG9hZGVkRW50cmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRlbXBvcmFyeUZvbGRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcnNMaXN0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgbGlzdCBvZiBhbGwgZm9sZGVycyBpbiBmaWxlXG4gICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiBPYmplY3Qua2V5cyhlbnRyeVRhYmxlKSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlbGVtLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnBvcCgpOyAvLyBmaWxlbmFtZVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIGNvbnRpbnVlOyAvLyBubyBmb2xkZXJzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViID0gZWxlbWVudHMuc2xpY2UoMCwgaSArIDEpLmpvaW4oXCIvXCIpICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgZm9sZGVyc0xpc3QuYWRkKHN1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWlzc2luZyBmb2xkZXJzIGFzIHRlbXBvcmFyeVxuICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgZm9sZGVyc0xpc3QpIHtcbiAgICAgICAgICAgIGlmICghKGVsZW0gaW4gZW50cnlUYWJsZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wZm9sZGVyID0gbmV3IFppcEVudHJ5KG9wdHMpO1xuICAgICAgICAgICAgICAgIHRlbXBmb2xkZXIuZW50cnlOYW1lID0gZWxlbTtcbiAgICAgICAgICAgICAgICB0ZW1wZm9sZGVyLmF0dHIgPSAweDEwO1xuICAgICAgICAgICAgICAgIHRlbXBmb2xkZXIudGVtcG9yYXJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbnRyeUxpc3QucHVzaCh0ZW1wZm9sZGVyKTtcbiAgICAgICAgICAgICAgICBlbnRyeVRhYmxlW3RlbXBmb2xkZXIuZW50cnlOYW1lXSA9IHRlbXBmb2xkZXI7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5LmFkZCh0ZW1wZm9sZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRFbnRyaWVzKCkge1xuICAgICAgICBsb2FkZWRFbnRyaWVzID0gdHJ1ZTtcbiAgICAgICAgZW50cnlUYWJsZSA9IHt9O1xuICAgICAgICBpZiAobWFpbkhlYWRlci5kaXNrRW50cmllcyA+IChpbkJ1ZmZlci5sZW5ndGggLSBtYWluSGVhZGVyLm9mZnNldCkgLyBVdGlscy5Db25zdGFudHMuQ0VOSERSKSB7XG4gICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuRElTS19FTlRSWV9UT09fTEFSR0UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRyeUxpc3QgPSBuZXcgQXJyYXkobWFpbkhlYWRlci5kaXNrRW50cmllcyk7IC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgICAgIHZhciBpbmRleCA9IG1haW5IZWFkZXIub2Zmc2V0OyAvLyBvZmZzZXQgb2YgZmlyc3QgQ0VOIGhlYWRlclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudHJ5TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVudHJ5ID0gbmV3IFppcEVudHJ5KG9wdHMsIGluQnVmZmVyKTtcbiAgICAgICAgICAgIGVudHJ5LmhlYWRlciA9IGluQnVmZmVyLnNsaWNlKHRtcCwgKHRtcCArPSBVdGlscy5Db25zdGFudHMuQ0VOSERSKSk7XG5cbiAgICAgICAgICAgIGVudHJ5LmVudHJ5TmFtZSA9IGluQnVmZmVyLnNsaWNlKHRtcCwgKHRtcCArPSBlbnRyeS5oZWFkZXIuZmlsZU5hbWVMZW5ndGgpKTtcblxuICAgICAgICAgICAgaWYgKGVudHJ5LmhlYWRlci5leHRyYUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVudHJ5LmV4dHJhID0gaW5CdWZmZXIuc2xpY2UodG1wLCAodG1wICs9IGVudHJ5LmhlYWRlci5leHRyYUxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZW50cnkuaGVhZGVyLmNvbW1lbnRMZW5ndGgpIGVudHJ5LmNvbW1lbnQgPSBpbkJ1ZmZlci5zbGljZSh0bXAsIHRtcCArIGVudHJ5LmhlYWRlci5jb21tZW50TGVuZ3RoKTtcblxuICAgICAgICAgICAgaW5kZXggKz0gZW50cnkuaGVhZGVyLmNlbnRyYWxIZWFkZXJTaXplO1xuXG4gICAgICAgICAgICBlbnRyeUxpc3RbaV0gPSBlbnRyeTtcbiAgICAgICAgICAgIGVudHJ5VGFibGVbZW50cnkuZW50cnlOYW1lXSA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHRlbXBvcmFyeS5jbGVhcigpO1xuICAgICAgICBtYWtlVGVtcG9yYXJ5Rm9sZGVycygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRNYWluSGVhZGVyKC8qQm9vbGVhbiovIHJlYWROb3cpIHtcbiAgICAgICAgdmFyIGkgPSBpbkJ1ZmZlci5sZW5ndGggLSBVdGlscy5Db25zdGFudHMuRU5ESERSLCAvLyBFTkQgaGVhZGVyIHNpemVcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KDAsIGkgLSAweGZmZmYpLCAvLyAweEZGRkYgaXMgdGhlIG1heCB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgbiA9IG1heCxcbiAgICAgICAgICAgIGVuZFN0YXJ0ID0gaW5CdWZmZXIubGVuZ3RoLFxuICAgICAgICAgICAgZW5kT2Zmc2V0ID0gLTEsIC8vIFN0YXJ0IG9mZnNldCBvZiB0aGUgRU5EIGhlYWRlclxuICAgICAgICAgICAgY29tbWVudEVuZCA9IDA7XG5cbiAgICAgICAgLy8gb3B0aW9uIHRvIHNlYXJjaCBoZWFkZXIgZm9ybSBlbnRpcmUgZmlsZVxuICAgICAgICBjb25zdCB0cmFpbGluZ1NwYWNlID0gdHlwZW9mIG9wdHMudHJhaWxpbmdTcGFjZSA9PT0gXCJib29sZWFuXCIgPyBvcHRzLnRyYWlsaW5nU3BhY2UgOiBmYWxzZTtcbiAgICAgICAgaWYgKHRyYWlsaW5nU3BhY2UpIG1heCA9IDA7XG5cbiAgICAgICAgZm9yIChpOyBpID49IG47IGktLSkge1xuICAgICAgICAgICAgaWYgKGluQnVmZmVyW2ldICE9PSAweDUwKSBjb250aW51ZTsgLy8gcXVpY2sgY2hlY2sgdGhhdCB0aGUgYnl0ZSBpcyAnUCdcbiAgICAgICAgICAgIGlmIChpbkJ1ZmZlci5yZWFkVUludDMyTEUoaSkgPT09IFV0aWxzLkNvbnN0YW50cy5FTkRTSUcpIHtcbiAgICAgICAgICAgICAgICAvLyBcIlBLXFwwMDVcXDAwNlwiXG4gICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gaTtcbiAgICAgICAgICAgICAgICBjb21tZW50RW5kID0gaTtcbiAgICAgICAgICAgICAgICBlbmRTdGFydCA9IGkgKyBVdGlscy5Db25zdGFudHMuRU5ESERSO1xuICAgICAgICAgICAgICAgIC8vIFdlIGFscmVhZHkgZm91bmQgYSByZWd1bGFyIHNpZ25hdHVyZSwgbGV0J3MgbG9vayBqdXN0IGEgYml0IGZ1cnRoZXIgdG8gY2hlY2sgaWYgdGhlcmUncyBhbnkgemlwNjQgc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgbiA9IGkgLSBVdGlscy5Db25zdGFudHMuRU5ENjRIRFI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbkJ1ZmZlci5yZWFkVUludDMyTEUoaSkgPT09IFV0aWxzLkNvbnN0YW50cy5FTkQ2NFNJRykge1xuICAgICAgICAgICAgICAgIC8vIEZvdW5kIGEgemlwNjQgc2lnbmF0dXJlLCBsZXQncyBjb250aW51ZSByZWFkaW5nIHRoZSB3aG9sZSB6aXA2NCByZWNvcmRcbiAgICAgICAgICAgICAgICBuID0gbWF4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5CdWZmZXIucmVhZFVJbnQzMkxFKGkpID09PSBVdGlscy5Db25zdGFudHMuWklQNjRTSUcpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3VuZCB0aGUgemlwNjQgcmVjb3JkLCBsZXQncyBkZXRlcm1pbmUgaXQncyBzaXplXG4gICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gaTtcbiAgICAgICAgICAgICAgICBlbmRTdGFydCA9IGkgKyBVdGlscy5yZWFkQmlnVUludDY0TEUoaW5CdWZmZXIsIGkgKyBVdGlscy5Db25zdGFudHMuWklQNjRTSVpFKSArIFV0aWxzLkNvbnN0YW50cy5aSVA2NExFQUQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kT2Zmc2V0ID09IC0xKSB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9GT1JNQVQoKTtcblxuICAgICAgICBtYWluSGVhZGVyLmxvYWRGcm9tQmluYXJ5KGluQnVmZmVyLnNsaWNlKGVuZE9mZnNldCwgZW5kU3RhcnQpKTtcbiAgICAgICAgaWYgKG1haW5IZWFkZXIuY29tbWVudExlbmd0aCkge1xuICAgICAgICAgICAgX2NvbW1lbnQgPSBpbkJ1ZmZlci5zbGljZShjb21tZW50RW5kICsgVXRpbHMuQ29uc3RhbnRzLkVOREhEUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWROb3cpIHJlYWRFbnRyaWVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydEVudHJpZXMoKSB7XG4gICAgICAgIGlmIChlbnRyeUxpc3QubGVuZ3RoID4gMSAmJiAhbm9Tb3J0KSB7XG4gICAgICAgICAgICBlbnRyeUxpc3Quc29ydCgoYSwgYikgPT4gYS5lbnRyeU5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIuZW50cnlOYW1lLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFppcEVudHJ5IG9iamVjdHMgZXhpc3RlbnQgaW4gdGhlIGN1cnJlbnQgb3BlbmVkIGFyY2hpdmVcbiAgICAgICAgICogQHJldHVybiBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGVudHJpZXMoKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5TGlzdC5maWx0ZXIoKGUpID0+ICF0ZW1wb3JhcnkuaGFzKGUpKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXJjaGl2ZSBjb21tZW50XG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGdldCBjb21tZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKF9jb21tZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNvbW1lbnQodmFsKSB7XG4gICAgICAgICAgICBfY29tbWVudCA9IFV0aWxzLnRvQnVmZmVyKHZhbCwgZGVjb2Rlci5lbmNvZGUpO1xuICAgICAgICAgICAgbWFpbkhlYWRlci5jb21tZW50TGVuZ3RoID0gX2NvbW1lbnQubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVudHJ5Q291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWluSGVhZGVyLmRpc2tFbnRyaWVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW50cnlMaXN0Lmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZW50cnkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBvciBudWxsIGlmIGVudHJ5IGlzIGluZXhpc3RlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGVudHJ5TmFtZVxuICAgICAgICAgKiBAcmV0dXJuIFppcEVudHJ5XG4gICAgICAgICAqL1xuICAgICAgICBnZXRFbnRyeTogZnVuY3Rpb24gKC8qU3RyaW5nKi8gZW50cnlOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5VGFibGVbZW50cnlOYW1lXSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHRoZSBnaXZlbiBlbnRyeSB0byB0aGUgZW50cnkgbGlzdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZW50cnlcbiAgICAgICAgICovXG4gICAgICAgIHNldEVudHJ5OiBmdW5jdGlvbiAoLypaaXBFbnRyeSovIGVudHJ5KSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnlMaXN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgZW50cnlUYWJsZVtlbnRyeS5lbnRyeU5hbWVdID0gZW50cnk7XG4gICAgICAgICAgICBtYWluSGVhZGVyLnRvdGFsRW50cmllcyA9IGVudHJ5TGlzdC5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGZpbGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBmcm9tIHRoZSBlbnRyeSBsaXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZW50cnkgaXMgYSBkaXJlY3RvcnksIHRoZW4gYWxsIG5lc3RlZCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgICAqIEBwYXJhbSBlbnRyeU5hbWVcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBkZWxldGVGaWxlOiBmdW5jdGlvbiAoLypTdHJpbmcqLyBlbnRyeU5hbWUsIHdpdGhzdWJmb2xkZXJzID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlUYWJsZVtlbnRyeU5hbWVdO1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0RW50cnlDaGlsZHJlbihlbnRyeSwgd2l0aHN1YmZvbGRlcnMpLm1hcCgoY2hpbGQpID0+IGNoaWxkLmVudHJ5TmFtZSk7XG5cbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaCh0aGlzLmRlbGV0ZUVudHJ5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgZW50cnkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBmcm9tIHRoZSBlbnRyeSBsaXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW50cnlOYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZGVsZXRlRW50cnk6IGZ1bmN0aW9uICgvKlN0cmluZyovIGVudHJ5TmFtZSkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlUYWJsZVtlbnRyeU5hbWVdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlbnRyeUxpc3QuaW5kZXhPZihlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIGVudHJ5TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbnRyeVRhYmxlW2VudHJ5TmFtZV07XG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci50b3RhbEVudHJpZXMgPSBlbnRyeUxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgSXRlcmF0ZXMgYW5kIHJldHVybnMgYWxsIG5lc3RlZCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgb2YgdGhlIGdpdmVuIGVudHJ5XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBnZXRFbnRyeUNoaWxkcmVuOiBmdW5jdGlvbiAoLypaaXBFbnRyeSovIGVudHJ5LCBzdWJmb2xkZXJzID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkgJiYgc3ViZm9sZGVycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5lbnRyeU5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB6aXBFbnRyeSBvZiBlbnRyeUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6aXBFbnRyeS5lbnRyeU5hbWUuc3RhcnRzV2l0aChuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh6aXBFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtlbnRyeV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgSG93IG1hbnkgY2hpbGQgZWxlbWVudHMgZW50cnkgaGFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl9IGVudHJ5XG4gICAgICAgICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRDaGlsZENvdW50OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIGlmIChlbnRyeSAmJiBlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldEVudHJ5Q2hpbGRyZW4oZW50cnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0LmluY2x1ZGVzKGVudHJ5KSA/IGxpc3QubGVuZ3RoIC0gMSA6IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHppcCBmaWxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gQnVmZmVyXG4gICAgICAgICAqL1xuICAgICAgICBjb21wcmVzc1RvQnVmZmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydEVudHJpZXMoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YUJsb2NrID0gW107XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCbG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGxldCB0b3RhbFNpemUgPSAwO1xuICAgICAgICAgICAgbGV0IGRpbmRleCA9IDA7XG5cbiAgICAgICAgICAgIG1haW5IZWFkZXIuc2l6ZSA9IDA7XG4gICAgICAgICAgICBtYWluSGVhZGVyLm9mZnNldCA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWxFbnRyaWVzID0gMDtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb21wcmVzcyBkYXRhIGFuZCBzZXQgbG9jYWwgYW5kIGVudHJ5IGhlYWRlciBhY2NvcmRpbmdseS4gUmVhc29uIHdoeSBpcyBjYWxsZWQgZmlyc3RcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wcmVzc2VkRGF0YSA9IGVudHJ5LmdldENvbXByZXNzZWREYXRhKCk7XG4gICAgICAgICAgICAgICAgZW50cnkuaGVhZGVyLm9mZnNldCA9IGRpbmRleDtcblxuICAgICAgICAgICAgICAgIC8vIDEuIGNvbnN0cnVjdCBsb2NhbCBoZWFkZXJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbEhlYWRlciA9IGVudHJ5LnBhY2tMb2NhbEhlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gMi4gb2Zmc2V0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBsb2NhbEhlYWRlci5sZW5ndGggKyBjb21wcmVzc2VkRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZGluZGV4ICs9IGRhdGFMZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAvLyAzLiBzdG9yZSB2YWx1ZXMgaW4gc2VxdWVuY2VcbiAgICAgICAgICAgICAgICBkYXRhQmxvY2sucHVzaChsb2NhbEhlYWRlcik7XG4gICAgICAgICAgICAgICAgZGF0YUJsb2NrLnB1c2goY29tcHJlc3NlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgLy8gNC4gY29uc3RydWN0IGNlbnRyYWwgaGVhZGVyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VudHJhbEhlYWRlciA9IGVudHJ5LnBhY2tDZW50cmFsSGVhZGVyKCk7XG4gICAgICAgICAgICAgICAgaGVhZGVyQmxvY2tzLnB1c2goY2VudHJhbEhlYWRlcik7XG4gICAgICAgICAgICAgICAgLy8gNS4gdXBkYXRlIG1haW4gaGVhZGVyXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5zaXplICs9IGNlbnRyYWxIZWFkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRvdGFsU2l6ZSArPSBkYXRhTGVuZ3RoICsgY2VudHJhbEhlYWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdG90YWxFbnRyaWVzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvdGFsU2l6ZSArPSBtYWluSGVhZGVyLm1haW5IZWFkZXJTaXplOyAvLyBhbHNvIGluY2x1ZGVzIHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICAvLyBwb2ludCB0byBlbmQgb2YgZGF0YSBhbmQgYmVnaW5uaW5nIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGZpcnN0IHJlY29yZFxuICAgICAgICAgICAgbWFpbkhlYWRlci5vZmZzZXQgPSBkaW5kZXg7XG4gICAgICAgICAgICBtYWluSGVhZGVyLnRvdGFsRW50cmllcyA9IHRvdGFsRW50cmllcztcblxuICAgICAgICAgICAgZGluZGV4ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG91dEJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyh0b3RhbFNpemUpO1xuICAgICAgICAgICAgLy8gd3JpdGUgZGF0YSBibG9ja3NcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29udGVudCBvZiBkYXRhQmxvY2spIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpO1xuICAgICAgICAgICAgICAgIGRpbmRleCArPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd3JpdGUgY2VudHJhbCBkaXJlY3RvcnkgZW50cmllc1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIGhlYWRlckJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY29weShvdXRCdWZmZXIsIGRpbmRleCk7XG4gICAgICAgICAgICAgICAgZGluZGV4ICs9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZSBtYWluIGhlYWRlclxuICAgICAgICAgICAgY29uc3QgbWggPSBtYWluSGVhZGVyLnRvQmluYXJ5KCk7XG4gICAgICAgICAgICBpZiAoX2NvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICBfY29tbWVudC5jb3B5KG1oLCBVdGlscy5Db25zdGFudHMuRU5ESERSKTsgLy8gYWRkIHppcCBmaWxlIGNvbW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1oLmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBTaW5jZSB3ZSB1cGRhdGUgZW50cnkgYW5kIG1haW4gaGVhZGVyIG9mZnNldHMsXG4gICAgICAgICAgICAvLyB0aGV5IGFyZSBubyBsb25nZXIgdmFsaWQgYW5kIHdlIGhhdmUgdG8gcmVzZXQgY29udGVudFxuICAgICAgICAgICAgLy8gKElzc3VlIDY0KVxuXG4gICAgICAgICAgICBpbkJ1ZmZlciA9IG91dEJ1ZmZlcjtcbiAgICAgICAgICAgIGxvYWRlZEVudHJpZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dEJ1ZmZlcjtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0FzeW5jQnVmZmVyOiBmdW5jdGlvbiAoLypGdW5jdGlvbiovIG9uU3VjY2VzcywgLypGdW5jdGlvbiovIG9uRmFpbCwgLypGdW5jdGlvbiovIG9uSXRlbVN0YXJ0LCAvKkZ1bmN0aW9uKi8gb25JdGVtRW5kKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb3J0RW50cmllcygpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUJsb2NrID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgY2VudHJhbEhlYWRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxTaXplID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxFbnRyaWVzID0gMDtcblxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuc2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3MyQnVmZmVyID0gZnVuY3Rpb24gKGVudHJ5TGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5TGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUxpc3RzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZW50cnkuZW50cnlOYW1lICsgZW50cnkuZXh0cmEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkl0ZW1TdGFydCkgb25JdGVtU3RhcnQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5nZXRDb21wcmVzc2VkRGF0YUFzeW5jKGZ1bmN0aW9uIChjb21wcmVzc2VkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkl0ZW1FbmQpIG9uSXRlbUVuZChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5oZWFkZXIub2Zmc2V0ID0gZGluZGV4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gY29uc3RydWN0IGxvY2FsIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsSGVhZGVyID0gZW50cnkucGFja0xvY2FsSGVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBvZmZzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IGxvY2FsSGVhZGVyLmxlbmd0aCArIGNvbXByZXNzZWREYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW5kZXggKz0gZGF0YUxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIHN0b3JlIHZhbHVlcyBpbiBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCbG9jay5wdXNoKGxvY2FsSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmxvY2sucHVzaChjb21wcmVzc2VkRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjZW50cmFsIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRhbEhlYWRlciA9IGVudHJ5LnBhY2tDZW50cmFsSGVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudHJhbEhlYWRlcnMucHVzaChjZW50YWxIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuc2l6ZSArPSBjZW50YWxIZWFkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2l6ZSArPSBkYXRhTGVuZ3RoICsgY2VudGFsSGVhZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEVudHJpZXMrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByZXNzMkJ1ZmZlcihlbnRyeUxpc3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTaXplICs9IG1haW5IZWFkZXIubWFpbkhlYWRlclNpemU7IC8vIGFsc28gaW5jbHVkZXMgemlwIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvaW50IHRvIGVuZCBvZiBkYXRhIGFuZCBiZWdpbm5pbmcgb2YgY2VudHJhbCBkaXJlY3RvcnkgZmlyc3QgcmVjb3JkXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluSGVhZGVyLm9mZnNldCA9IGRpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5IZWFkZXIudG90YWxFbnRyaWVzID0gdG90YWxFbnRyaWVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0QnVmZmVyID0gQnVmZmVyLmFsbG9jKHRvdGFsU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmxvY2suZm9yRWFjaChmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuY29weShvdXRCdWZmZXIsIGRpbmRleCk7IC8vIHdyaXRlIGRhdGEgYmxvY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGluZGV4ICs9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50cmFsSGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTsgLy8gd3JpdGUgY2VudHJhbCBkaXJlY3RvcnkgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbmRleCArPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaCA9IG1haW5IZWFkZXIudG9CaW5hcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY29tbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb21tZW50LmNvcHkobWgsIFV0aWxzLkNvbnN0YW50cy5FTkRIRFIpOyAvLyBhZGQgemlwIGZpbGUgY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtaC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTsgLy8gd3JpdGUgbWFpbiBoZWFkZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2Ugd2UgdXBkYXRlIGVudHJ5IGFuZCBtYWluIGhlYWRlciBvZmZzZXRzLCB0aGV5IGFyZSBub1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9uZ2VyIHZhbGlkIGFuZCB3ZSBoYXZlIHRvIHJlc2V0IGNvbnRlbnQgdXNpbmcgb3VyIG5ldyBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChJc3N1ZSA2NClcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5CdWZmZXIgPSBvdXRCdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRFbnRyaWVzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhvdXRCdWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbXByZXNzMkJ1ZmZlcihBcnJheS5mcm9tKHRoaXMuZW50cmllcykpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIG9uRmFpbChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgImNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmNvbnN0IHB0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgWmlwRW50cnkgPSByZXF1aXJlKFwiLi96aXBFbnRyeVwiKTtcbmNvbnN0IFppcEZpbGUgPSByZXF1aXJlKFwiLi96aXBGaWxlXCIpO1xuXG5jb25zdCBnZXRfQm9vbCA9ICguLi52YWwpID0+IFV0aWxzLmZpbmRMYXN0KHZhbCwgKGMpID0+IHR5cGVvZiBjID09PSBcImJvb2xlYW5cIik7XG5jb25zdCBnZXRfU3RyID0gKC4uLnZhbCkgPT4gVXRpbHMuZmluZExhc3QodmFsLCAoYykgPT4gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIpO1xuY29uc3QgZ2V0X0Z1biA9ICguLi52YWwpID0+IFV0aWxzLmZpbmRMYXN0KHZhbCwgKGMpID0+IHR5cGVvZiBjID09PSBcImZ1bmN0aW9uXCIpO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBvcHRpb24gXCJub1NvcnRcIiA6IGlmIHRydWUgaXQgZGlzYWJsZXMgZmlsZXMgc29ydGluZ1xuICAgIG5vU29ydDogZmFsc2UsXG4gICAgLy8gcmVhZCBlbnRyaWVzIGR1cmluZyBsb2FkIChpbml0aWFsIGxvYWRpbmcgbWF5IGJlIHNsb3dlcilcbiAgICByZWFkRW50cmllczogZmFsc2UsXG4gICAgLy8gZGVmYXVsdCBtZXRob2QgaXMgbm9uZVxuICAgIG1ldGhvZDogVXRpbHMuQ29uc3RhbnRzLk5PTkUsXG4gICAgLy8gZmlsZSBzeXN0ZW1cbiAgICBmczogbnVsbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLyoqU3RyaW5nKi8gaW5wdXQsIC8qKiBvYmplY3QgKi8gb3B0aW9ucykge1xuICAgIGxldCBpbkJ1ZmZlciA9IG51bGw7XG5cbiAgICAvLyBjcmVhdGUgb2JqZWN0IGJhc2VkIGRlZmF1bHQgb3B0aW9ucywgYWxsb3dpbmcgdGhlbSB0byBiZSBvdmVyd3JpdHRlblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIGRlZmF1bHRPcHRpb25zKTtcblxuICAgIC8vIHRlc3QgaW5wdXQgdmFyaWFibGVcbiAgICBpZiAoaW5wdXQgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGlucHV0KSB7XG4gICAgICAgIC8vIGlmIHZhbHVlIGlzIG5vdCBidWZmZXIgd2UgYWNjZXB0IGl0IHRvIGJlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAgICAgICAgaWYgKCEoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLCBpbnB1dCk7XG4gICAgICAgICAgICBpbnB1dCA9IG9wdHMuaW5wdXQgPyBvcHRzLmlucHV0IDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKG9wdHMuaW5wdXQpIGRlbGV0ZSBvcHRzLmlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaW5wdXQgaXMgYnVmZmVyXG4gICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgICAgICBpbkJ1ZmZlciA9IGlucHV0O1xuICAgICAgICAgICAgb3B0cy5tZXRob2QgPSBVdGlscy5Db25zdGFudHMuQlVGRkVSO1xuICAgICAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gb3B0aW9uc1xuICAgIE9iamVjdC5hc3NpZ24ob3B0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbnN0YW5jaWF0ZSB1dGlscyBmaWxlc3lzdGVtXG4gICAgY29uc3QgZmlsZXRvb2xzID0gbmV3IFV0aWxzKG9wdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmRlY29kZXIgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9wdHMuZGVjb2Rlci5lbmNvZGUgIT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2Ygb3B0cy5kZWNvZGVyLmRlY29kZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdHMuZGVjb2RlciA9IFV0aWxzLmRlY29kZXI7XG4gICAgfVxuXG4gICAgLy8gaWYgaW5wdXQgaXMgZmlsZSBuYW1lIHdlIHJldHJpZXZlIGl0cyBjb250ZW50XG4gICAgaWYgKGlucHV0ICYmIFwic3RyaW5nXCIgPT09IHR5cGVvZiBpbnB1dCkge1xuICAgICAgICAvLyBsb2FkIHppcCBmaWxlXG4gICAgICAgIGlmIChmaWxldG9vbHMuZnMuZXhpc3RzU3luYyhpbnB1dCkpIHtcbiAgICAgICAgICAgIG9wdHMubWV0aG9kID0gVXRpbHMuQ29uc3RhbnRzLkZJTEU7XG4gICAgICAgICAgICBvcHRzLmZpbGVuYW1lID0gaW5wdXQ7XG4gICAgICAgICAgICBpbkJ1ZmZlciA9IGZpbGV0b29scy5mcy5yZWFkRmlsZVN5bmMoaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfRklMRU5BTUUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB2YXJpYWJsZVxuICAgIGNvbnN0IF96aXAgPSBuZXcgWmlwRmlsZShpbkJ1ZmZlciwgb3B0cyk7XG5cbiAgICBjb25zdCB7IGNhbm9uaWNhbCwgc2FuaXRpemUsIHppcG5hbWVmaXggfSA9IFV0aWxzO1xuXG4gICAgZnVuY3Rpb24gZ2V0RW50cnkoLyoqT2JqZWN0Ki8gZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ICYmIF96aXApIHtcbiAgICAgICAgICAgIHZhciBpdGVtO1xuICAgICAgICAgICAgLy8gSWYgZW50cnkgd2FzIGdpdmVuIGFzIGEgZmlsZSBuYW1lXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiKSBpdGVtID0gX3ppcC5nZXRFbnRyeShwdGgucG9zaXgubm9ybWFsaXplKGVudHJ5KSk7XG4gICAgICAgICAgICAvLyBpZiBlbnRyeSB3YXMgZ2l2ZW4gYXMgYSBaaXBFbnRyeSBvYmplY3RcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGVudHJ5LmVudHJ5TmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZW50cnkuaGVhZGVyICE9PSBcInVuZGVmaW5lZFwiKSBpdGVtID0gX3ppcC5nZXRFbnRyeShlbnRyeS5lbnRyeU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFBhdGgoemlwUGF0aCkge1xuICAgICAgICBjb25zdCB7IGpvaW4sIG5vcm1hbGl6ZSwgc2VwIH0gPSBwdGgucG9zaXg7XG4gICAgICAgIC8vIGNvbnZlcnQgd2luZG93cyBmaWxlIHNlcGFyYXRvcnMgYW5kIG5vcm1hbGl6ZVxuICAgICAgICByZXR1cm4gam9pbihcIi5cIiwgbm9ybWFsaXplKHNlcCArIHppcFBhdGguc3BsaXQoXCJcXFxcXCIpLmpvaW4oc2VwKSArIHNlcCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGVuYW1lRmlsdGVyKGZpbHRlcmZuKSB7XG4gICAgICAgIGlmIChmaWx0ZXJmbiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgLy8gaWYgZmlsdGVyIGlzIFJlZ0V4cCB3cmFwIGl0XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChyeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ4LnRlc3QoZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KShmaWx0ZXJmbik7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgZmlsdGVyZm4pIHtcbiAgICAgICAgICAgIC8vIGlmIGZpbHRlciBpcyBub3QgZnVuY3Rpb24gd2Ugd2lsbCByZXBsYWNlIGl0XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZm47XG4gICAgfVxuXG4gICAgLy8ga2VlcCBsYXN0IGNoYXJhY3RlciBvbiBmb2xkZXJzXG4gICAgY29uc3QgcmVsYXRpdmVQYXRoID0gKGxvY2FsLCBlbnRyeSkgPT4ge1xuICAgICAgICBsZXQgbGFzdENoYXIgPSBlbnRyeS5zbGljZSgtMSk7XG4gICAgICAgIGxhc3RDaGFyID0gbGFzdENoYXIgPT09IGZpbGV0b29scy5zZXAgPyBmaWxldG9vbHMuc2VwIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIHB0aC5yZWxhdGl2ZShsb2NhbCwgZW50cnkpICsgbGFzdENoYXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgZ2l2ZW4gZW50cnkgZnJvbSB0aGUgYXJjaGl2ZSBhbmQgcmV0dXJucyB0aGUgY29udGVudCBhcyBhIEJ1ZmZlciBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5IFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge0J1ZmZlcnxzdHJpbmd9IFtwYXNzXSAtIHBhc3N3b3JkXG4gICAgICAgICAqIEByZXR1cm4gQnVmZmVyIG9yIE51bGwgaW4gY2FzZSBvZiBlcnJvclxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZEZpbGU6IGZ1bmN0aW9uIChlbnRyeSwgcGFzcykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5nZXREYXRhKHBhc3MpKSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGhvdyBtYW55IGNoaWxkIGVsZW1lbnRzIGhhcyBvbiBlbnRyeSAoZGlyZWN0b3JpZXMpIG9uIGZpbGVzIGl0IGlzIGFsd2F5cyAwXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHJldHVybnMge2ludGVnZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZENvdW50OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfemlwLmdldENoaWxkQ291bnQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzeW5jaHJvbm91cyByZWFkRmlsZVxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnkgWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gQnVmZmVyIG9yIE51bGwgaW4gY2FzZSBvZiBlcnJvclxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZEZpbGVBc3luYzogZnVuY3Rpb24gKGVudHJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0RGF0YUFzeW5jKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgXCJnZXRFbnRyeSBmYWlsZWQgZm9yOlwiICsgZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgZ2l2ZW4gZW50cnkgZnJvbSB0aGUgYXJjaGl2ZSBhbmQgcmV0dXJucyB0aGUgY29udGVudCBhcyBwbGFpbiB0ZXh0IGluIHRoZSBnaXZlbiBlbmNvZGluZ1xuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnkgLSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGVuY29kaW5nIC0gT3B0aW9uYWwuIElmIG5vIGVuY29kaW5nIGlzIHNwZWNpZmllZCB1dGY4IGlzIHVzZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRBc1RleHQ6IGZ1bmN0aW9uIChlbnRyeSwgZW5jb2RpbmcpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGl0ZW0uZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKGVuY29kaW5nIHx8IFwidXRmOFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXN5bmNocm9ub3VzIHJlYWRBc1RleHRcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5IFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2VuY29kaW5nXSAtIE9wdGlvbmFsLiBJZiBubyBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdXRmOCBpcyB1c2VkXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZWFkQXNUZXh0QXN5bmM6IGZ1bmN0aW9uIChlbnRyeSwgY2FsbGJhY2ssIGVuY29kaW5nKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXREYXRhQXN5bmMoZnVuY3Rpb24gKGRhdGEsIGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEudG9TdHJpbmcoZW5jb2RpbmcgfHwgXCJ1dGY4XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGVudHJ5IGZyb20gdGhlIGZpbGUgb3IgdGhlIGVudHJ5IGFuZCBhbGwgaXQncyBuZXN0ZWQgZGlyZWN0b3JpZXMgYW5kIGZpbGVzIGlmIHRoZSBnaXZlbiBlbnRyeSBpcyBhIGRpcmVjdG9yeVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnlcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBkZWxldGVGaWxlOiBmdW5jdGlvbiAoZW50cnksIHdpdGhzdWJmb2xkZXJzID0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQFRPRE86IHRlc3QgZGVsZXRlRmlsZVxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIF96aXAuZGVsZXRlRmlsZShpdGVtLmVudHJ5TmFtZSwgd2l0aHN1YmZvbGRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGVudHJ5IGZyb20gdGhlIGZpbGUgb3IgZGlyZWN0b3J5IHdpdGhvdXQgYWZmZWN0aW5nIGFueSBuZXN0ZWQgZW50cmllc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnlcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBkZWxldGVFbnRyeTogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAvLyBAVE9ETzogdGVzdCBkZWxldGVFbnRyeVxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIF96aXAuZGVsZXRlRW50cnkoaXRlbS5lbnRyeU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgY29tbWVudCB0byB0aGUgemlwLiBUaGUgemlwIG11c3QgYmUgcmV3cml0dGVuIGFmdGVyIGFkZGluZyB0aGUgY29tbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGFkZFppcENvbW1lbnQ6IGZ1bmN0aW9uIChjb21tZW50KSB7XG4gICAgICAgICAgICAvLyBAVE9ETzogdGVzdCBhZGRaaXBDb21tZW50XG4gICAgICAgICAgICBfemlwLmNvbW1lbnQgPSBjb21tZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB6aXAgY29tbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0WmlwQ29tbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF96aXAuY29tbWVudCB8fCBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgY29tbWVudCB0byBhIHNwZWNpZmllZCB6aXBFbnRyeS4gVGhlIHppcCBtdXN0IGJlIHJld3JpdHRlbiBhZnRlciBhZGRpbmcgdGhlIGNvbW1lbnRcbiAgICAgICAgICogVGhlIGNvbW1lbnQgY2Fubm90IGV4Y2VlZCA2NTUzNSBjaGFyYWN0ZXJzIGluIGxlbmd0aFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkWmlwRW50cnlDb21tZW50OiBmdW5jdGlvbiAoZW50cnksIGNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNvbW1lbnQgPSBjb21tZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjb21tZW50IG9mIHRoZSBzcGVjaWZpZWQgZW50cnlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeX0gZW50cnlcbiAgICAgICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGdldFppcEVudHJ5Q29tbWVudDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29tbWVudCB8fCBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbnRlbnQgb2YgYW4gZXhpc3RpbmcgZW50cnkgaW5zaWRlIHRoZSBhcmNoaXZlLiBUaGUgemlwIG11c3QgYmUgcmV3cml0dGVuIGFmdGVyIHVwZGF0aW5nIHRoZSBjb250ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl9IGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7QnVmZmVyfSBjb250ZW50XG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVGaWxlOiBmdW5jdGlvbiAoZW50cnksIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBmaWxlIGZyb20gdGhlIGRpc2sgdG8gdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsUGF0aCBGaWxlIHRvIGFkZCB0byB6aXBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt6aXBQYXRoXSBPcHRpb25hbCBwYXRoIGluc2lkZSB0aGUgemlwXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbemlwTmFtZV0gT3B0aW9uYWwgbmFtZSBmb3IgdGhlIGZpbGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb21tZW50XSBPcHRpb25hbCBmaWxlIGNvbW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRmlsZTogZnVuY3Rpb24gKGxvY2FsUGF0aCwgemlwUGF0aCwgemlwTmFtZSwgY29tbWVudCkge1xuICAgICAgICAgICAgaWYgKGZpbGV0b29scy5mcy5leGlzdHNTeW5jKGxvY2FsUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXggWmlwUGF0aFxuICAgICAgICAgICAgICAgIHppcFBhdGggPSB6aXBQYXRoID8gZml4UGF0aCh6aXBQYXRoKSA6IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBwIC0gbG9jYWwgZmlsZSBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHB0aC53aW4zMi5iYXNlbmFtZShwdGgud2luMzIubm9ybWFsaXplKGxvY2FsUGF0aCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkIGZpbGUgbmFtZSBpbnRvIHppcHBhdGhcbiAgICAgICAgICAgICAgICB6aXBQYXRoICs9IHppcE5hbWUgPyB6aXBOYW1lIDogcDtcblxuICAgICAgICAgICAgICAgIC8vIHJlYWQgZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgY29uc3QgX2F0dHIgPSBmaWxldG9vbHMuZnMuc3RhdFN5bmMobG9jYWxQYXRoKTtcblxuICAgICAgICAgICAgICAgIC8vIGdldCBmaWxlIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gX2F0dHIuaXNGaWxlKCkgPyBmaWxldG9vbHMuZnMucmVhZEZpbGVTeW5jKGxvY2FsUGF0aCkgOiBCdWZmZXIuYWxsb2MoMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBmb2xkZXJcbiAgICAgICAgICAgICAgICBpZiAoX2F0dHIuaXNEaXJlY3RvcnkoKSkgemlwUGF0aCArPSBmaWxldG9vbHMuc2VwO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkIGZpbGUgaW50byB6aXAgZmlsZVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmlsZSh6aXBQYXRoLCBkYXRhLCBjb21tZW50LCBfYXR0cik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5GSUxFX05PVF9GT1VORChsb2NhbFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayBmb3Igc2hvd2luZyBpZiBldmVyeXRoaW5nIHdhcyBkb25lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY2FsbGJhY2sgZG9uZUNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7RXJyb3J9IGVyciAtIEVycm9yIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvbmUgLSB3YXMgcmVxdWVzdCBmdWxseSBjb21wbGV0ZWRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBmaWxlIGZyb20gdGhlIGRpc2sgdG8gdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsob2JqZWN0fHN0cmluZyl9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdCwgaWYgaXQgaXMgc3RyaW5nIGl0IHVzIHVzZWQgYXMgbG9jYWxQYXRoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbFBhdGggLSBMb2NhbCBwYXRoIHRvIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY29tbWVudF0gLSBPcHRpb25hbCBmaWxlIGNvbW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy56aXBQYXRoXSAtIE9wdGlvbmFsIHBhdGggaW5zaWRlIHRoZSB6aXBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnppcE5hbWVdIC0gT3B0aW9uYWwgbmFtZSBmb3IgdGhlIGZpbGVcbiAgICAgICAgICogQHBhcmFtIHtkb25lQ2FsbGJhY2t9IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgaGFuZGxlcyB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZpbGVBc3luYzogZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zIDogeyBsb2NhbFBhdGg6IG9wdGlvbnMgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IHB0aC5yZXNvbHZlKG9wdGlvbnMubG9jYWxQYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29tbWVudCB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGxldCB7IHppcFBhdGgsIHppcE5hbWUgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnN0YXQobG9jYWxQYXRoLCBmdW5jdGlvbiAoZXJyLCBzdGF0cykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyBmaXggWmlwUGF0aFxuICAgICAgICAgICAgICAgIHppcFBhdGggPSB6aXBQYXRoID8gZml4UGF0aCh6aXBQYXRoKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgLy8gcCAtIGxvY2FsIGZpbGUgbmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwdGgud2luMzIuYmFzZW5hbWUocHRoLndpbjMyLm5vcm1hbGl6ZShsb2NhbFBhdGgpKTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgZmlsZSBuYW1lIGludG8gemlwcGF0aFxuICAgICAgICAgICAgICAgIHppcFBhdGggKz0gemlwTmFtZSA/IHppcE5hbWUgOiBwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy5yZWFkRmlsZShsb2NhbFBhdGgsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkRmlsZSh6aXBQYXRoLCBkYXRhLCBjb21tZW50LCBzdGF0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgemlwUGF0aCArPSBmaWxldG9vbHMuc2VwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEZpbGUoemlwUGF0aCwgQnVmZmVyLmFsbG9jKDApLCBjb21tZW50LCBzdGF0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBsb2NhbCBkaXJlY3RvcnkgYW5kIGFsbCBpdHMgbmVzdGVkIGZpbGVzIGFuZCBkaXJlY3RvcmllcyB0byB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxQYXRoIC0gbG9jYWwgcGF0aCB0byB0aGUgZm9sZGVyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbemlwUGF0aF0gLSBvcHRpb25hbCBwYXRoIGluc2lkZSB6aXBcbiAgICAgICAgICogQHBhcmFtIHsoUmVnRXhwfGZ1bmN0aW9uKX0gW2ZpbHRlcl0gLSBvcHRpb25hbCBSZWdFeHAgb3IgRnVuY3Rpb24gaWYgZmlsZXMgbWF0Y2ggd2lsbCBiZSBpbmNsdWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRm9sZGVyOiBmdW5jdGlvbiAobG9jYWxQYXRoLCB6aXBQYXRoLCBmaWx0ZXIpIHtcbiAgICAgICAgICAgIC8vIFByZXBhcmUgZmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWxlbmFtZUZpbHRlcihmaWx0ZXIpO1xuXG4gICAgICAgICAgICAvLyBmaXggWmlwUGF0aFxuICAgICAgICAgICAgemlwUGF0aCA9IHppcFBhdGggPyBmaXhQYXRoKHppcFBhdGgpIDogXCJcIjtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIHRoZSBwYXRoIGZpcnN0XG4gICAgICAgICAgICBsb2NhbFBhdGggPSBwdGgubm9ybWFsaXplKGxvY2FsUGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxldG9vbHMuZnMuZXhpc3RzU3luYyhsb2NhbFBhdGgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBmaWxldG9vbHMuZmluZEZpbGVzKGxvY2FsUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZXBhdGggb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwdGguam9pbih6aXBQYXRoLCByZWxhdGl2ZVBhdGgobG9jYWxQYXRoLCBmaWxlcGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcihwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkTG9jYWxGaWxlKGZpbGVwYXRoLCBwdGguZGlybmFtZShwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5GSUxFX05PVF9GT1VORChsb2NhbFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3luY2hyb25vdXMgYWRkTG9jYWxGb2xkZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsUGF0aFxuICAgICAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3ppcFBhdGhdIG9wdGlvbmFsIHBhdGggaW5zaWRlIHppcFxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cHxmdW5jdGlvbn0gW2ZpbHRlcl0gb3B0aW9uYWwgUmVnRXhwIG9yIEZ1bmN0aW9uIGlmIGZpbGVzIG1hdGNoIHdpbGxcbiAgICAgICAgICogICAgICAgICAgICAgICBiZSBpbmNsdWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRm9sZGVyQXN5bmM6IGZ1bmN0aW9uIChsb2NhbFBhdGgsIGNhbGxiYWNrLCB6aXBQYXRoLCBmaWx0ZXIpIHtcbiAgICAgICAgICAgIC8vIFByZXBhcmUgZmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWxlbmFtZUZpbHRlcihmaWx0ZXIpO1xuXG4gICAgICAgICAgICAvLyBmaXggWmlwUGF0aFxuICAgICAgICAgICAgemlwUGF0aCA9IHppcFBhdGggPyBmaXhQYXRoKHppcFBhdGgpIDogXCJcIjtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIHRoZSBwYXRoIGZpcnN0XG4gICAgICAgICAgICBsb2NhbFBhdGggPSBwdGgubm9ybWFsaXplKGxvY2FsUGF0aCk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGZpbGV0b29scy5mcy5vcGVuKGxvY2FsUGF0aCwgXCJyXCIsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIGVyci5jb2RlID09PSBcIkVOT0VOVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgVXRpbHMuRXJyb3JzLkZJTEVfTk9UX0ZPVU5EKGxvY2FsUGF0aCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBmaWxldG9vbHMuZmluZEZpbGVzKGxvY2FsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlcGF0aCA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gcmVsYXRpdmVQYXRoKGxvY2FsUGF0aCwgZmlsZXBhdGgpLnNwbGl0KFwiXFxcXFwiKS5qb2luKFwiL1wiKTsgLy93aW5kb3dzIGZpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxceDIwLVxceDdFXS9nLCBcIlwiKTsgLy8gYWNjZW50IGZpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnN0YXQoZmlsZXBhdGgsIGZ1bmN0aW9uIChlcjAsIHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXIwKSBjYWxsYmFjayh1bmRlZmluZWQsIGVyMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMucmVhZEZpbGUoZmlsZXBhdGgsIGZ1bmN0aW9uIChlcjEsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBlcjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRGaWxlKHppcFBhdGggKyBwLCBkYXRhLCBcIlwiLCBzdGF0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRGaWxlKHppcFBhdGggKyBwICsgXCIvXCIsIEJ1ZmZlci5hbGxvYygwKSwgXCJcIiwgc3RhdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBsb2NhbCBkaXJlY3RvcnkgYW5kIGFsbCBpdHMgbmVzdGVkIGZpbGVzIGFuZCBkaXJlY3RvcmllcyB0byB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZ30gb3B0aW9ucyAtIG9wdGlvbnMgb2JqZWN0LCBpZiBpdCBpcyBzdHJpbmcgaXQgdXMgdXNlZCBhcyBsb2NhbFBhdGguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsUGF0aCAtIExvY2FsIHBhdGggdG8gdGhlIGZvbGRlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnppcFBhdGhdIC0gb3B0aW9uYWwgcGF0aCBpbnNpZGUgemlwLlxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cHxmdW5jdGlvbn0gW29wdGlvbnMuZmlsdGVyXSAtIG9wdGlvbmFsIFJlZ0V4cCBvciBGdW5jdGlvbiBpZiBmaWxlcyBtYXRjaCB3aWxsIGJlIGluY2x1ZGVkLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gW29wdGlvbnMubmFtZWZpeF0gLSBvcHRpb25hbCBmdW5jdGlvbiB0byBoZWxwIGZpeCBmaWxlbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge2RvbmVDYWxsYmFja30gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBoYW5kbGVzIHRoZSByZXNwb25zZS5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRm9sZGVyQXN5bmMyOiBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiID8gb3B0aW9ucyA6IHsgbG9jYWxQYXRoOiBvcHRpb25zIH07XG4gICAgICAgICAgICBsb2NhbFBhdGggPSBwdGgucmVzb2x2ZShmaXhQYXRoKG9wdGlvbnMubG9jYWxQYXRoKSk7XG4gICAgICAgICAgICBsZXQgeyB6aXBQYXRoLCBmaWx0ZXIsIG5hbWVmaXggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSAoZnVuY3Rpb24gKHJ4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByeC50ZXN0KGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KShmaWx0ZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpeCBaaXBQYXRoXG4gICAgICAgICAgICB6aXBQYXRoID0gemlwUGF0aCA/IGZpeFBhdGgoemlwUGF0aCkgOiBcIlwiO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBOYW1lZml4IGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAobmFtZWZpeCA9PSBcImxhdGluMVwiKSB7XG4gICAgICAgICAgICAgICAgbmFtZWZpeCA9IChzdHIpID0+XG4gICAgICAgICAgICAgICAgICAgIHN0clxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgXCJcIik7IC8vIGFjY2VudCBmaXggKGxhdGluMSBjaGFyYWNlcnMgb25seSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lZml4ICE9PSBcImZ1bmN0aW9uXCIpIG5hbWVmaXggPSAoc3RyKSA9PiBzdHI7XG5cbiAgICAgICAgICAgIC8vIGludGVybmFsLCBjcmVhdGUgcmVsYXRpdmUgcGF0aCArIGZpeCB0aGUgbmFtZVxuICAgICAgICAgICAgY29uc3QgcmVsUGF0aEZpeCA9IChlbnRyeSkgPT4gcHRoLmpvaW4oemlwUGF0aCwgbmFtZWZpeChyZWxhdGl2ZVBhdGgobG9jYWxQYXRoLCBlbnRyeSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lRml4ID0gKGVudHJ5KSA9PiBwdGgud2luMzIuYmFzZW5hbWUocHRoLndpbjMyLm5vcm1hbGl6ZShuYW1lZml4KGVudHJ5KSkpO1xuXG4gICAgICAgICAgICBmaWxldG9vbHMuZnMub3Blbihsb2NhbFBhdGgsIFwiclwiLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIuY29kZSA9PT0gXCJFTk9FTlRcIikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIFV0aWxzLkVycm9ycy5GSUxFX05PVF9GT1VORChsb2NhbFBhdGgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZpbmRGaWxlc0FzeW5jKGxvY2FsUGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUVudHJpZXMgPSBmaWxlRW50cmllcy5maWx0ZXIoKGRpcikgPT4gZmlsdGVyKHJlbFBhdGhGaXgoZGlyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlRW50cmllcy5sZW5ndGgpIGNhbGxiYWNrKHVuZGVmaW5lZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUVudHJpZXMucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAobmV4dCwgZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIsIGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgZG9uZSA9PT0gZmFsc2UpIHJldHVybiBzZXRJbW1lZGlhdGUobmV4dCwgZXJyLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkTG9jYWxGaWxlQXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBhdGg6IGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aXBQYXRoOiBwdGguZGlybmFtZShyZWxQYXRoRml4KGVudHJ5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcE5hbWU6IGZpbGVOYW1lRml4KGVudHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgbG9jYWwgZGlyZWN0b3J5IGFuZCBhbGwgaXRzIG5lc3RlZCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgdG8gdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsUGF0aCAtIHBhdGggd2hlcmUgZmlsZXMgd2lsbCBiZSBleHRyYWN0ZWRcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gb3B0aW9uYWwgcHJvcGVydGllc1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnppcFBhdGhdIC0gb3B0aW9uYWwgcGF0aCBpbnNpZGUgemlwXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfGZ1bmN0aW9ufSBbcHJvcHMuZmlsdGVyXSAtIG9wdGlvbmFsIFJlZ0V4cCBvciBGdW5jdGlvbiBpZiBmaWxlcyBtYXRjaCB3aWxsIGJlIGluY2x1ZGVkLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gW3Byb3BzLm5hbWVmaXhdIC0gb3B0aW9uYWwgZnVuY3Rpb24gdG8gaGVscCBmaXggZmlsZW5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRm9sZGVyUHJvbWlzZTogZnVuY3Rpb24gKGxvY2FsUGF0aCwgcHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMb2NhbEZvbGRlckFzeW5jMihPYmplY3QuYXNzaWduKHsgbG9jYWxQYXRoIH0sIHByb3BzKSwgKGVyciwgZG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsb3dzIHlvdSB0byBjcmVhdGUgYSBlbnRyeSAoZmlsZSBvciBkaXJlY3RvcnkpIGluIHRoZSB6aXAgZmlsZS5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHRoZSBlbnRyeU5hbWUgbXVzdCBlbmQgaW4gLyBhbmQgYSBudWxsIGJ1ZmZlciBzaG91bGQgYmUgcHJvdmlkZWQuXG4gICAgICAgICAqIENvbW1lbnQgYW5kIGF0dHJpYnV0ZXMgYXJlIG9wdGlvbmFsXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbnRyeU5hbWVcbiAgICAgICAgICogQHBhcmFtIHtCdWZmZXIgfCBzdHJpbmd9IGNvbnRlbnQgLSBmaWxlIGNvbnRlbnQgYXMgYnVmZmVyIG9yIHV0ZjggY29kZWQgc3RyaW5nXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29tbWVudF0gLSBmaWxlIGNvbW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXIgfCBvYmplY3R9IFthdHRyXSAtIG51bWJlciBhcyB1bml4IGZpbGUgcGVybWlzc2lvbnMsIG9iamVjdCBhcyBmaWxlc3lzdGVtIFN0YXRzIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkRmlsZTogZnVuY3Rpb24gKGVudHJ5TmFtZSwgY29udGVudCwgY29tbWVudCwgYXR0cikge1xuICAgICAgICAgICAgZW50cnlOYW1lID0gemlwbmFtZWZpeChlbnRyeU5hbWUpO1xuICAgICAgICAgICAgbGV0IGVudHJ5ID0gZ2V0RW50cnkoZW50cnlOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IGVudHJ5ICE9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHByZXBhcmUgbmV3IGVudHJ5XG4gICAgICAgICAgICBpZiAoIXVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGVudHJ5ID0gbmV3IFppcEVudHJ5KG9wdHMpO1xuICAgICAgICAgICAgICAgIGVudHJ5LmVudHJ5TmFtZSA9IGVudHJ5TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmNvbW1lbnQgPSBjb21tZW50IHx8IFwiXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzU3RhdCA9IFwib2JqZWN0XCIgPT09IHR5cGVvZiBhdHRyICYmIGF0dHIgaW5zdGFuY2VvZiBmaWxldG9vbHMuZnMuU3RhdHM7XG5cbiAgICAgICAgICAgIC8vIGxhc3QgbW9kaWZpY2F0aW9uIHRpbWUgZnJvbSBmaWxlIHN0YXRzXG4gICAgICAgICAgICBpZiAoaXNTdGF0KSB7XG4gICAgICAgICAgICAgICAgZW50cnkuaGVhZGVyLnRpbWUgPSBhdHRyLm10aW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgZmlsZSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIHZhciBmaWxlYXR0ciA9IGVudHJ5LmlzRGlyZWN0b3J5ID8gMHgxMCA6IDA7IC8vIChNUy1ET1MgZGlyZWN0b3J5IGZsYWcpXG5cbiAgICAgICAgICAgIC8vIGV4dGVuZGVkIGF0dHJpYnV0ZXMgZmllbGQgZm9yIFVuaXhcbiAgICAgICAgICAgIC8vIHNldCBmaWxlIHR5cGUgZWl0aGVyIFNfSUZESVIgLyBTX0lGUkVHXG4gICAgICAgICAgICBsZXQgdW5peCA9IGVudHJ5LmlzRGlyZWN0b3J5ID8gMHg0MDAwIDogMHg4MDAwO1xuXG4gICAgICAgICAgICBpZiAoaXNTdGF0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmlsZSBhdHRyaWJ1dGVzIGZyb20gZmlsZSBzdGF0c1xuICAgICAgICAgICAgICAgIHVuaXggfD0gMHhmZmYgJiBhdHRyLm1vZGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwibnVtYmVyXCIgPT09IHR5cGVvZiBhdHRyKSB7XG4gICAgICAgICAgICAgICAgLy8gYXR0ciBmcm9tIGdpdmVuIGF0dHIgdmFsdWVzXG4gICAgICAgICAgICAgICAgdW5peCB8PSAweGZmZiAmIGF0dHI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdmFsdWVzOlxuICAgICAgICAgICAgICAgIHVuaXggfD0gZW50cnkuaXNEaXJlY3RvcnkgPyAwbzc1NSA6IDBvNjQ0OyAvLyBwZXJtaXNzaW9ucyAoZHJ3eHIteHIteCkgb3IgKC1yLXdyLS1yLS0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGVhdHRyID0gKGZpbGVhdHRyIHwgKHVuaXggPDwgMTYpKSA+Pj4gMDsgLy8gYWRkIGF0dHJpYnV0ZXNcblxuICAgICAgICAgICAgZW50cnkuYXR0ciA9IGZpbGVhdHRyO1xuXG4gICAgICAgICAgICBlbnRyeS5zZXREYXRhKGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKCF1cGRhdGUpIF96aXAuc2V0RW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgWmlwRW50cnkgb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGZpbGVzIGFuZCBmb2xkZXJzIGluc2lkZSB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Bhc3N3b3JkXVxuICAgICAgICAgKiBAcmV0dXJucyBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RW50cmllczogZnVuY3Rpb24gKHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBfemlwLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgICAgICByZXR1cm4gX3ppcCA/IF96aXAuZW50cmllcyA6IFtdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgWmlwRW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgZmlsZSBvciBmb2xkZXIgc3BlY2lmaWVkIGJ5IGBgbmFtZWBgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIFppcEVudHJ5XG4gICAgICAgICAqL1xuICAgICAgICBnZXRFbnRyeTogZnVuY3Rpb24gKC8qKlN0cmluZyovIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFbnRyeShuYW1lKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRFbnRyeUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ppcC5nZXRFbnRyeUNvdW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ppcC5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGdpdmVuIGVudHJ5IHRvIHRoZSBnaXZlbiB0YXJnZXRQYXRoXG4gICAgICAgICAqIElmIHRoZSBlbnRyeSBpcyBhIGRpcmVjdG9yeSBpbnNpZGUgdGhlIGFyY2hpdmUsIHRoZSBlbnRpcmUgZGlyZWN0b3J5IGFuZCBpdCdzIHN1YmRpcmVjdG9yaWVzIHdpbGwgYmUgZXh0cmFjdGVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfFppcEVudHJ5fSBlbnRyeSAtIFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0UGF0aCAtIFRhcmdldCBmb2xkZXIgd2hlcmUgdG8gd3JpdGUgdGhlIGZpbGVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbbWFpbnRhaW5FbnRyeVBhdGg9dHJ1ZV0gLSBJZiBtYWludGFpbkVudHJ5UGF0aCBpcyB0cnVlIGFuZCB0aGUgZW50cnkgaXMgaW5zaWRlIGEgZm9sZGVyLCB0aGUgZW50cnkgZm9sZGVyIHdpbGwgYmUgY3JlYXRlZCBpbiB0YXJnZXRQYXRoIGFzIHdlbGwuIERlZmF1bHQgaXMgVFJVRVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGU9ZmFsc2VdIC0gSWYgdGhlIGZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGhlIHRhcmdldCBwYXRoLCB0aGUgZmlsZSB3aWxsIGJlIG92ZXJ3cml0ZW4gaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtrZWVwT3JpZ2luYWxQZXJtaXNzaW9uPWZhbHNlXSAtIFRoZSBmaWxlIHdpbGwgYmUgc2V0IGFzIHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlIGVudHJ5IGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvdXRGaWxlTmFtZV0gLSBTdHJpbmcgSWYgc2V0IHdpbGwgb3ZlcnJpZGUgdGhlIGZpbGVuYW1lIG9mIHRoZSBleHRyYWN0ZWQgZmlsZSAoT25seSB3b3JrcyBpZiB0aGUgZW50cnkgaXMgYSBmaWxlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGV4dHJhY3RFbnRyeVRvOiBmdW5jdGlvbiAoZW50cnksIHRhcmdldFBhdGgsIG1haW50YWluRW50cnlQYXRoLCBvdmVyd3JpdGUsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIG91dEZpbGVOYW1lKSB7XG4gICAgICAgICAgICBvdmVyd3JpdGUgPSBnZXRfQm9vbChmYWxzZSwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPSBnZXRfQm9vbChmYWxzZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbik7XG4gICAgICAgICAgICBtYWludGFpbkVudHJ5UGF0aCA9IGdldF9Cb29sKHRydWUsIG1haW50YWluRW50cnlQYXRoKTtcbiAgICAgICAgICAgIG91dEZpbGVOYW1lID0gZ2V0X1N0cihrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBvdXRGaWxlTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLk5PX0VOVFJZKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbnRyeU5hbWUgPSBjYW5vbmljYWwoaXRlbS5lbnRyeU5hbWUpO1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gc2FuaXRpemUodGFyZ2V0UGF0aCwgb3V0RmlsZU5hbWUgJiYgIWl0ZW0uaXNEaXJlY3RvcnkgPyBvdXRGaWxlTmFtZSA6IG1haW50YWluRW50cnlQYXRoID8gZW50cnlOYW1lIDogcHRoLmJhc2VuYW1lKGVudHJ5TmFtZSkpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF96aXAuZ2V0RW50cnlDaGlsZHJlbihpdGVtKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNEaXJlY3RvcnkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjaGlsZC5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkNBTlRfRVhUUkFDVF9GSUxFKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBjYW5vbmljYWwoY2hpbGQuZW50cnlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IHNhbml0aXplKHRhcmdldFBhdGgsIG1haW50YWluRW50cnlQYXRoID8gbmFtZSA6IHB0aC5iYXNlbmFtZShuYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXZlcnNlIG9wZXJhdGlvbiBmb3IgYXR0ciBkZXBlbmQgb24gbWV0aG9kIGFkZEZpbGUoKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlQXR0ciA9IGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPyBjaGlsZC5oZWFkZXIuZmlsZUF0dHIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy53cml0ZUZpbGVUbyhjaGlsZE5hbWUsIGNvbnRlbnQsIG92ZXJ3cml0ZSwgZmlsZUF0dHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGl0ZW0uZ2V0RGF0YShfemlwLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGlmICghY29udGVudCkgdGhyb3cgVXRpbHMuRXJyb3JzLkNBTlRfRVhUUkFDVF9GSUxFKCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxldG9vbHMuZnMuZXhpc3RzU3luYyh0YXJnZXQpICYmICFvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQ0FOVF9PVkVSUklERSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHJldmVyc2Ugb3BlcmF0aW9uIGZvciBhdHRyIGRlcGVuZCBvbiBtZXRob2QgYWRkRmlsZSgpXG4gICAgICAgICAgICBjb25zdCBmaWxlQXR0ciA9IGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPyBlbnRyeS5oZWFkZXIuZmlsZUF0dHIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmaWxldG9vbHMud3JpdGVGaWxlVG8odGFyZ2V0LCBjb250ZW50LCBvdmVyd3JpdGUsIGZpbGVBdHRyKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3QgdGhlIGFyY2hpdmVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKHBhc3MpIHtcbiAgICAgICAgICAgIGlmICghX3ppcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgZW50cnkgaW4gX3ppcC5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IF96aXAuZW50cmllc1tlbnRyeV0uZ2V0RGF0YShwYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgZW50aXJlIGFyY2hpdmUgdG8gdGhlIGdpdmVuIGxvY2F0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRQYXRoIFRhcmdldCBsb2NhdGlvblxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGU9ZmFsc2VdIElmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzIGF0IHRoZSB0YXJnZXQgcGF0aCwgdGhlIGZpbGUgd2lsbCBiZSBvdmVyd3JpdGVuIGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIEZBTFNFXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcmlnaW5hbFBlcm1pc3Npb249ZmFsc2VdIFRoZSBmaWxlIHdpbGwgYmUgc2V0IGFzIHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlIGVudHJ5IGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIEZBTFNFXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfEJ1ZmZlcn0gW3Bhc3NdIHBhc3N3b3JkXG4gICAgICAgICAqL1xuICAgICAgICBleHRyYWN0QWxsVG86IGZ1bmN0aW9uICh0YXJnZXRQYXRoLCBvdmVyd3JpdGUsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIHBhc3MpIHtcbiAgICAgICAgICAgIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPSBnZXRfQm9vbChmYWxzZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbik7XG4gICAgICAgICAgICBwYXNzID0gZ2V0X1N0cihrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBwYXNzKTtcbiAgICAgICAgICAgIG92ZXJ3cml0ZSA9IGdldF9Cb29sKGZhbHNlLCBvdmVyd3JpdGUpO1xuICAgICAgICAgICAgaWYgKCFfemlwKSB0aHJvdyBVdGlscy5FcnJvcnMuTk9fWklQKCk7XG5cbiAgICAgICAgICAgIF96aXAuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeU5hbWUgPSBzYW5pdGl6ZSh0YXJnZXRQYXRoLCBjYW5vbmljYWwoZW50cnkuZW50cnlOYW1lKSk7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5tYWtlRGlyKGVudHJ5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5nZXREYXRhKHBhc3MpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQ0FOVF9FWFRSQUNUX0ZJTEUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJldmVyc2Ugb3BlcmF0aW9uIGZvciBhdHRyIGRlcGVuZCBvbiBtZXRob2QgYWRkRmlsZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUF0dHIgPSBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID8gZW50cnkuaGVhZGVyLmZpbGVBdHRyIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGZpbGV0b29scy53cml0ZUZpbGVUbyhlbnRyeU5hbWUsIGNvbnRlbnQsIG92ZXJ3cml0ZSwgZmlsZUF0dHIpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy51dGltZXNTeW5jKGVudHJ5TmFtZSwgZW50cnkuaGVhZGVyLnRpbWUsIGVudHJ5LmhlYWRlci50aW1lKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkNBTlRfRVhUUkFDVF9GSUxFKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzeW5jaHJvbm91cyBleHRyYWN0QWxsVG9cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGFyZ2V0IGxvY2F0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZT1mYWxzZV0gSWYgdGhlIGZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGhlIHRhcmdldCBwYXRoLCB0aGUgZmlsZSB3aWxsIGJlIG92ZXJ3cml0ZW4gaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgRkFMU0VcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBba2VlcE9yaWdpbmFsUGVybWlzc2lvbj1mYWxzZV0gVGhlIGZpbGUgd2lsbCBiZSBzZXQgYXMgdGhlIHBlcm1pc3Npb24gZnJvbSB0aGUgZW50cnkgaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgRkFMU0VcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBhbGwgZW50cmllcyBhcmUgZXh0cmFjdGVkIHN1Y2Nlc3NmdWxseSBvciBhbnkgZXJyb3IgaXMgdGhyb3duLlxuICAgICAgICAgKi9cbiAgICAgICAgZXh0cmFjdEFsbFRvQXN5bmM6IGZ1bmN0aW9uICh0YXJnZXRQYXRoLCBvdmVyd3JpdGUsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGdldF9GdW4ob3ZlcndyaXRlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBjYWxsYmFjayk7XG4gICAgICAgICAgICBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID0gZ2V0X0Jvb2woZmFsc2UsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgb3ZlcndyaXRlID0gZ2V0X0Jvb2woZmFsc2UsIG92ZXJ3cml0ZSk7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0QWxsVG9Bc3luYyh0YXJnZXRQYXRoLCBvdmVyd3JpdGUsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV96aXApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhVdGlscy5FcnJvcnMuTk9fWklQKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHB0aC5yZXNvbHZlKHRhcmdldFBhdGgpO1xuICAgICAgICAgICAgLy8gY29udmVydCBlbnRyeU5hbWUgdG9cbiAgICAgICAgICAgIGNvbnN0IGdldFBhdGggPSAoZW50cnkpID0+IHNhbml0aXplKHRhcmdldFBhdGgsIHB0aC5ub3JtYWxpemUoY2Fub25pY2FsKGVudHJ5LmVudHJ5TmFtZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGdldEVycm9yID0gKG1zZywgZmlsZSkgPT4gbmV3IEVycm9yKG1zZyArICc6IFwiJyArIGZpbGUgKyAnXCInKTtcblxuICAgICAgICAgICAgLy8gc2VwYXJhdGUgZGlyZWN0b3JpZXMgZnJvbSBmaWxlc1xuICAgICAgICAgICAgY29uc3QgZGlyRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgZmlsZUVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIF96aXAuZW50cmllcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyRW50cmllcy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVFbnRyaWVzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBkaXJlY3RvcnkgZW50cmllcyBmaXJzdCBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICAvLyB0aGlzIHByZXZlbnRzIHJhY2UgY29uZGl0aW9uIGFuZCBhc3N1cmVzIGZvbGRlcnMgYXJlIHRoZXJlIGJlZm9yZSB3cml0aW5nIGZpbGVzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGRpckVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJQYXRoID0gZ2V0UGF0aChlbnRyeSk7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJldmVyc2Ugb3BlcmF0aW9uIGZvciBhdHRyIGRlcGVuZCBvbiBtZXRob2QgYWRkRmlsZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyQXR0ciA9IGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPyBlbnRyeS5oZWFkZXIuZmlsZUF0dHIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLm1ha2VEaXIoZGlyUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJBdHRyKSBmaWxldG9vbHMuZnMuY2htb2RTeW5jKGRpclBhdGgsIGRpckF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiB1bml4IHRpbWVzdGFtcCB3aWxsIGNoYW5nZSBpZiBmaWxlcyBhcmUgbGF0ZXIgYWRkZWQgdG8gZm9sZGVyLCBidXQgc3RpbGxcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnV0aW1lc1N5bmMoZGlyUGF0aCwgZW50cnkuaGVhZGVyLnRpbWUsIGVudHJ5LmhlYWRlci50aW1lKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhnZXRFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgZm9sZGVyXCIsIGRpclBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGVFbnRyaWVzLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKG5leHQsIGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnlOYW1lID0gcHRoLm5vcm1hbGl6ZShjYW5vbmljYWwoZW50cnkuZW50cnlOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHNhbml0aXplKHRhcmdldFBhdGgsIGVudHJ5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5nZXREYXRhQXN5bmMoZnVuY3Rpb24gKGNvbnRlbnQsIGVycl8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycl8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChVdGlscy5FcnJvcnMuQ0FOVF9FWFRSQUNUX0ZJTEUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJldmVyc2Ugb3BlcmF0aW9uIGZvciBhdHRyIGRlcGVuZCBvbiBtZXRob2QgYWRkRmlsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVBdHRyID0ga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA/IGVudHJ5LmhlYWRlci5maWxlQXR0ciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLndyaXRlRmlsZVRvQXN5bmMoZmlsZVBhdGgsIGNvbnRlbnQsIG92ZXJ3cml0ZSwgZmlsZUF0dHIsIGZ1bmN0aW9uIChzdWNjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KGdldEVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIGZpbGVcIiwgZmlsZVBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy51dGltZXMoZmlsZVBhdGgsIGVudHJ5LmhlYWRlci50aW1lLCBlbnRyeS5oZWFkZXIudGltZSwgZnVuY3Rpb24gKGVycl8yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycl8yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoZ2V0RXJyb3IoXCJVbmFibGUgdG8gc2V0IHRpbWVzXCIsIGZpbGVQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBjYWxsYmFjaykoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIHRoZSBuZXdseSBjcmVhdGVkIHppcCBmaWxlIHRvIGRpc2sgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBvciBpZiBhIHppcCB3YXMgb3BlbmVkIGFuZCBubyBgYHRhcmdldEZpbGVOYW1lYGAgaXMgcHJvdmlkZWQsIGl0IHdpbGwgb3ZlcndyaXRlIHRoZSBvcGVuZWQgemlwXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRGaWxlTmFtZVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgd3JpdGVaaXA6IGZ1bmN0aW9uICh0YXJnZXRGaWxlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRGaWxlTmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gdGFyZ2V0RmlsZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEZpbGVOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0RmlsZU5hbWUgJiYgb3B0cy5maWxlbmFtZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEZpbGVOYW1lID0gb3B0cy5maWxlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0RmlsZU5hbWUpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHppcERhdGEgPSBfemlwLmNvbXByZXNzVG9CdWZmZXIoKTtcbiAgICAgICAgICAgIGlmICh6aXBEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9rID0gZmlsZXRvb2xzLndyaXRlRmlsZVRvKHRhcmdldEZpbGVOYW1lLCB6aXBEYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrKCFvayA/IG5ldyBFcnJvcihcImZhaWxlZFwiKSA6IG51bGwsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0RmlsZU5hbWVcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMub3ZlcndyaXRlPXRydWVdIElmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzIGF0IHRoZSB0YXJnZXQgcGF0aCwgdGhlIGZpbGUgd2lsbCBiZSBvdmVyd3JpdGVuIGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMucGVybV0gVGhlIGZpbGUgd2lsbCBiZSBzZXQgYXMgdGhlIHBlcm1pc3Npb24gZnJvbSB0aGUgZW50cnkgaWYgdGhpcyBpcyB0cnVlLlxuXG4gICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JpdGVaaXBQcm9taXNlOiBmdW5jdGlvbiAoLyoqU3RyaW5nKi8gdGFyZ2V0RmlsZU5hbWUsIC8qIG9iamVjdCAqLyBwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgeyBvdmVyd3JpdGUsIHBlcm0gfSA9IE9iamVjdC5hc3NpZ24oeyBvdmVyd3JpdGU6IHRydWUgfSwgcHJvcHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgZmlsZSBuYW1lXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRGaWxlTmFtZSAmJiBvcHRzLmZpbGVuYW1lKSB0YXJnZXRGaWxlTmFtZSA9IG9wdHMuZmlsZW5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRGaWxlTmFtZSkgcmVqZWN0KFwiQURNLVpJUDogWklQIEZpbGUgTmFtZSBNaXNzaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b0J1ZmZlclByb21pc2UoKS50aGVuKCh6aXBEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IChkb25lKSA9PiAoZG9uZSA/IHJlc29sdmUoZG9uZSkgOiByZWplY3QoXCJBRE0tWklQOiBXYXNuJ3QgYWJsZSB0byB3cml0ZSB6aXAgZmlsZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy53cml0ZUZpbGVUb0FzeW5jKHRhcmdldEZpbGVOYW1lLCB6aXBEYXRhLCBvdmVyd3JpdGUsIHBlcm0sIHJldCk7XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCdWZmZXI+fSBBIHByb21pc2UgdG8gdGhlIEJ1ZmZlci5cbiAgICAgICAgICovXG4gICAgICAgIHRvQnVmZmVyUHJvbWlzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBfemlwLnRvQXN5bmNCdWZmZXIocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBlbnRpcmUgemlwIGZpbGUgYXMgYSBCdWZmZXIgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtmdW5jdGlvbn0gW29uU3VjY2Vzc11cbiAgICAgICAgICogQHByb3Age2Z1bmN0aW9ufSBbb25GYWlsXVxuICAgICAgICAgKiBAcHJvcCB7ZnVuY3Rpb259IFtvbkl0ZW1TdGFydF1cbiAgICAgICAgICogQHByb3Age2Z1bmN0aW9ufSBbb25JdGVtRW5kXVxuICAgICAgICAgKiBAcmV0dXJucyB7QnVmZmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdG9CdWZmZXI6IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbCwgb25JdGVtU3RhcnQsIG9uSXRlbUVuZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvblN1Y2Nlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIF96aXAudG9Bc3luY0J1ZmZlcihvblN1Y2Nlc3MsIG9uRmFpbCwgb25JdGVtU3RhcnQsIG9uSXRlbUVuZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3ppcC5jb21wcmVzc1RvQnVmZmVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJpbXBvcnQge1xuICBBcHAsXG4gIE5vdGljZSxcbiAgUGx1Z2luLFxuICBQbHVnaW5TZXR0aW5nVGFiLFxuICBTZXR0aW5nLFxuICBUQWJzdHJhY3RGaWxlLFxuICBURmlsZSxcbiAgVEZvbGRlclxufSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnNwIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBvcyBmcm9tIFwib3NcIjtcbmltcG9ydCBBZG1aaXAgZnJvbSBcImFkbS16aXBcIjtcbmltcG9ydCB7IERvd25sb2FkSXRlbSwgUHVsbFNldHRpbmdzIH0gZnJvbSBcIi4vcHVsbC10eXBlc1wiO1xuaW1wb3J0IHsgRG93bmxvYWRTZWxlY3RNb2RhbCwgRnV6enlEb3dubG9hZE1vZGFsIH0gZnJvbSBcIi4vZG93bmxvYWQtbW9kYWxcIjtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUHVsbFNldHRpbmdzID0ge1xuICBkb3dubG9hZHNEaXI6IFwifi9Eb3dubG9hZHNcIixcbiAgbGlzdExpbWl0OiAxMCxcbiAgYmVoYXZpb3I6IFwibW92ZVwiLFxuICB3aGl0ZWxpc3Q6IFtdLFxuICBibGFja2xpc3Q6IFtdLFxuICB6aXBDb2xsaXNpb246IFwidmVyc2lvblwiLFxuICBleHBhbmRaaXBzOiB0cnVlLFxuICBzZWxlY3Rpb25Nb2RlOiBcImxpc3RcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVsbEZyb21Eb3dubG9hZHNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogUHVsbFNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW1lbnVcIiwgKG1lbnUsIGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gdGhpcy5nZXRUYXJnZXRGb2xkZXIoZmlsZSk7XG4gICAgICAgIGlmICghdGFyZ2V0Rm9sZGVyKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbVxuICAgICAgICAgICAgLnNldFRpdGxlKFwiUHVsbCBmcm9tIERvd25sb2Fkc1x1MjAyNlwiKVxuICAgICAgICAgICAgLnNldEljb24oXCJkb3dubG9hZFwiKVxuICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5oYW5kbGVQdWxsKHRhcmdldEZvbGRlcikpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgUHVsbFNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVQdWxsKHRhcmdldEZvbGRlcjogVEZvbGRlcikge1xuICAgIGNvbnN0IGRvd25sb2Fkc1BhdGggPSBleHBhbmRIb21lKHRoaXMuc2V0dGluZ3MuZG93bmxvYWRzRGlyKTtcblxuICAgIGxldCBjYW5kaWRhdGVzOiBEb3dubG9hZEl0ZW1bXSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBjYW5kaWRhdGVzID0gYXdhaXQgZ2V0UmVjZW50RmlsZXMoZG93bmxvYWRzUGF0aCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShcIlVuYWJsZSB0byByZWFkIGRvd25sb2FkcyBkaXJlY3RvcnkuIENoZWNrIHNldHRpbmdzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJObyBtYXRjaGluZyBmaWxlcyBmb3VuZCBpbiBEb3dubG9hZHMuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsQ2xhc3MgPVxuICAgICAgdGhpcy5zZXR0aW5ncy5zZWxlY3Rpb25Nb2RlID09PSBcImZ1enp5XCIgPyBGdXp6eURvd25sb2FkTW9kYWwgOiBEb3dubG9hZFNlbGVjdE1vZGFsO1xuXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgbW9kYWxDbGFzcyhcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgY2FuZGlkYXRlcyxcbiAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NTZWxlY3Rpb24oaXRlbSwgdGFyZ2V0Rm9sZGVyKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgbW9kYWwub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcm9jZXNzU2VsZWN0aW9uKGl0ZW06IERvd25sb2FkSXRlbSwgdGFyZ2V0Rm9sZGVyOiBURm9sZGVyKSB7XG4gICAgY29uc3QgYmFzZUFkYXB0ZXIgPSB0aGlzLmFwcC52YXVsdC5hZGFwdGVyO1xuICAgIGlmICghKGJhc2VBZGFwdGVyIGFzIGFueSkuZ2V0QmFzZVBhdGgpIHtcbiAgICAgIG5ldyBOb3RpY2UoXCJGaWxlIHN5c3RlbSBhZGFwdGVyIG5vdCBhdmFpbGFibGUgb24gdGhpcyBwbGF0Zm9ybS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmF1bHRCYXNlID0gKGJhc2VBZGFwdGVyIGFzIGFueSkuZ2V0QmFzZVBhdGgoKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5qb2luKHZhdWx0QmFzZSwgbm9ybWFsaXplUGF0aCh0YXJnZXRGb2xkZXIucGF0aCkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVuc3VyZURpcih0YXJnZXREaXIpO1xuICAgICAgY29uc3QgaXNaaXAgPSBwYXRoLmV4dG5hbWUoaXRlbS5uYW1lKS50b0xvd2VyQ2FzZSgpID09PSBcIi56aXBcIjtcblxuICAgICAgaWYgKGlzWmlwICYmIHRoaXMuc2V0dGluZ3MuZXhwYW5kWmlwcykge1xuICAgICAgICBhd2FpdCBleHRyYWN0WmlwKGl0ZW0uYWJzb2x1dGVQYXRoLCB0YXJnZXREaXIsIHRoaXMuc2V0dGluZ3MuemlwQ29sbGlzaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IG1vdmVPckNvcHlGaWxlKGl0ZW0uYWJzb2x1dGVQYXRoLCB0YXJnZXREaXIsIHRoaXMuc2V0dGluZ3MuYmVoYXZpb3IpO1xuICAgICAgfVxuXG4gICAgICBuZXcgTm90aWNlKGBQdWxsZWQgJHtpdGVtLm5hbWV9IGludG8gJHt0YXJnZXRGb2xkZXIucGF0aH1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBQdWxsIGZhaWxlZDogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFyZ2V0Rm9sZGVyKGZpbGU6IFRBYnN0cmFjdEZpbGUgfCBudWxsKTogVEZvbGRlciB8IG51bGwge1xuICAgIGlmICghZmlsZSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyKSByZXR1cm4gZmlsZTtcbiAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSByZXR1cm4gZmlsZS5wYXJlbnQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gbm9ybWFsaXplU2V0dGluZ3MoeyAuLi5ERUZBVUxUX1NFVFRJTkdTLCAuLi4oZGF0YSA/PyB7fSkgfSk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuXG5jbGFzcyBQdWxsU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBQdWxsRnJvbURvd25sb2Fkc1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBQdWxsRnJvbURvd25sb2Fkc1BsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gxJywgeyB0ZXh0OiAnUHVsbCBmcm9tIERvd25sb2FkcycgfSlcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnYScsIHsgdGV4dDogJ0NyZWF0ZWQgYnkgbGFzdG9iZWx1cycsIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vbGFzdG9iZWx1cy8nIH0pXG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdTZXR0aW5ncycgfSlcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiRG93bmxvYWRzIGRpcmVjdG9yeVwiKVxuICAgICAgLnNldERlc2MoXCJQYXRoIHRvIHNjYW47IH4gaXMgZXhwYW5kZWQuXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIn4vRG93bmxvYWRzXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRvd25sb2Fkc0RpcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kb3dubG9hZHNEaXIgPSB2YWx1ZSB8fCBERUZBVUxUX1NFVFRJTkdTLmRvd25sb2Fkc0RpcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIk51bWJlciBvZiBmaWxlc1wiKVxuICAgICAgLnNldERlc2MoXCJIb3cgbWFueSByZWNlbnQgZmlsZXMgdG8gc2hvdyAoMS0xMDApXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIjEwXCIpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saXN0TGltaXQpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGNsYW1wTnVtYmVyKHBhcnNlSW50KHZhbHVlLCAxMCksIDEsIDEwMCwgREVGQVVMVF9TRVRUSU5HUy5saXN0TGltaXQpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGlzdExpbWl0ID0gbnVtO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQmVoYXZpb3JcIilcbiAgICAgIC5zZXREZXNjKFwiTW92ZSAoZGVmYXVsdCkgcmVtb3ZlcyBmcm9tIERvd25sb2FkczsgQ29weSBsZWF2ZXMgaXQgdGhlcmUuXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PlxuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oXCJtb3ZlXCIsIFwiTW92ZVwiKVxuICAgICAgICAgIC5hZGRPcHRpb24oXCJjb3B5XCIsIFwiQ29weVwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZWhhdmlvcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZWhhdmlvciA9IHZhbHVlIGFzIFwibW92ZVwiIHwgXCJjb3B5XCI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTZWxlY3Rpb24gbW9kZVwiKVxuICAgICAgLnNldERlc2MoXCJDaG9vc2UgdGhlIHBpY2tlciBzdHlsZTogbGlzdCBmaWx0ZXIgb3IgZnV6enkgc2VhcmNoLlwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKFwibGlzdFwiLCBcIkxpc3QgKGZpbHRlciBhcyB5b3UgdHlwZSlcIilcbiAgICAgICAgICAuYWRkT3B0aW9uKFwiZnV6enlcIiwgXCJGdXp6eSAoUXVpY2sgU3dpdGNoZXIgc3R5bGUpXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNlbGVjdGlvbk1vZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VsZWN0aW9uTW9kZSA9IHZhbHVlIGFzIFwibGlzdFwiIHwgXCJmdXp6eVwiO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiV2hpdGVsaXN0IGV4dGVuc2lvbnNcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkNvbW1hL3NwYWNlIHNlcGFyYXRlZC4gSWYgc2V0LCBvbmx5IHRoZXNlIGV4dGVuc2lvbnMgYXJlIHNob3duIGFuZCBibGFja2xpc3QgaXMgaWdub3JlZC5cIlxuICAgICAgKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJ6aXAsIHBkZiwgcG5nXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGZvcm1hdEV4dExpc3QodGhpcy5wbHVnaW4uc2V0dGluZ3Mud2hpdGVsaXN0KSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy53aGl0ZWxpc3QgPSBwYXJzZUV4dExpc3QodmFsdWUpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQmxhY2tsaXN0IGV4dGVuc2lvbnNcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkNvbW1hL3NwYWNlIHNlcGFyYXRlZC4gSWdub3JlZCB3aGVuIHdoaXRlbGlzdCBpcyBub24tZW1wdHkuIExlYXZlIHdoaXRlbGlzdCBlbXB0eSB0byB1c2UgYmxhY2tsaXN0LlwiXG4gICAgICApXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInRtcCwgY3Jkb3dubG9hZFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShmb3JtYXRFeHRMaXN0KHRoaXMucGx1Z2luLnNldHRpbmdzLmJsYWNrbGlzdCkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYmxhY2tsaXN0ID0gcGFyc2VFeHRMaXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiWmlwIGZpbGVzXCIgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiRXh0cmFjdCB6aXAgZmlsZXNcIilcbiAgICAgIC5zZXREZXNjKFwiSWYgb2ZmLCB6aXBzIGFyZSBtb3ZlZC9jb3BpZWQgd2l0aG91dCBleHRyYWN0aW5nLlwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhwYW5kWmlwcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5leHBhbmRaaXBzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgY29sbGlzaW9uU2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJaaXAgY29sbGlzaW9uIGhhbmRsaW5nXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhwYW5kWmlwc1xuICAgICAgICAgID8gXCJDaG9vc2UgaG93IHRvIGhhbmRsZSBleGlzdGluZyBmaWxlcyB3aGVuIGV4dHJhY3Rpbmcgemlwcy5cIlxuICAgICAgICAgIDogXCJFbmFibGUgJ0V4dHJhY3QgemlwIGZpbGVzJyB0byBjb25maWd1cmUgY29sbGlzaW9uIGhhbmRsaW5nLlwiXG4gICAgICApO1xuXG4gICAgY29sbGlzaW9uU2V0dGluZ1xuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKFwidmVyc2lvblwiLCBcIlZlcnNpb24gZXhpc3RpbmcgZmlsZXNcIilcbiAgICAgICAgICAuYWRkT3B0aW9uKFwib3ZlcndyaXRlXCIsIFwiT3ZlcndyaXRlIGV4aXN0aW5nIGZpbGVzXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnppcENvbGxpc2lvbilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy56aXBDb2xsaXNpb24gPSB2YWx1ZSBhcyBcInZlcnNpb25cIiB8IFwib3ZlcndyaXRlXCI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnNldERpc2FibGVkKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5leHBhbmRaaXBzKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHAucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZEhvbWUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpbnB1dC5zdGFydHNXaXRoKFwiflwiKSkge1xuICAgIHJldHVybiBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBpbnB1dC5zbGljZSgxKSk7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4dExpc3QoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGlucHV0XG4gICAgLnNwbGl0KC9bXFxzLF0rLylcbiAgICAubWFwKChzKSA9PiBzLnRyaW0oKS5yZXBsYWNlKC9eXFwuLywgXCJcIikudG9Mb3dlckNhc2UoKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRFeHRMaXN0KGxpc3Q6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxpc3Quam9pbihcIiwgXCIpO1xufVxuXG5mdW5jdGlvbiBjbGFtcE51bWJlcih2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIGZhbGxiYWNrO1xuICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNldHRpbmdzKHNldHRpbmdzOiBQdWxsU2V0dGluZ3MpOiBQdWxsU2V0dGluZ3Mge1xuICByZXR1cm4ge1xuICAgIGRvd25sb2Fkc0Rpcjogc2V0dGluZ3MuZG93bmxvYWRzRGlyPy50cmltKCkgfHwgREVGQVVMVF9TRVRUSU5HUy5kb3dubG9hZHNEaXIsXG4gICAgbGlzdExpbWl0OiBjbGFtcE51bWJlcihzZXR0aW5ncy5saXN0TGltaXQsIDEsIDEwMCwgREVGQVVMVF9TRVRUSU5HUy5saXN0TGltaXQpLFxuICAgIGJlaGF2aW9yOiBzZXR0aW5ncy5iZWhhdmlvciA9PT0gXCJjb3B5XCIgPyBcImNvcHlcIiA6IFwibW92ZVwiLFxuICAgIHdoaXRlbGlzdDogcGFyc2VFeHRMaXN0KGZvcm1hdEV4dExpc3Qoc2V0dGluZ3Mud2hpdGVsaXN0IHx8IFtdKSksXG4gICAgYmxhY2tsaXN0OiBwYXJzZUV4dExpc3QoZm9ybWF0RXh0TGlzdChzZXR0aW5ncy5ibGFja2xpc3QgfHwgW10pKSxcbiAgICB6aXBDb2xsaXNpb246IHNldHRpbmdzLnppcENvbGxpc2lvbiA9PT0gXCJvdmVyd3JpdGVcIiA/IFwib3ZlcndyaXRlXCIgOiBcInZlcnNpb25cIixcbiAgICBleHBhbmRaaXBzOiBzZXR0aW5ncy5leHBhbmRaaXBzICE9PSBmYWxzZSxcbiAgICBzZWxlY3Rpb25Nb2RlOiBzZXR0aW5ncy5zZWxlY3Rpb25Nb2RlID09PSBcImZ1enp5XCIgPyBcImZ1enp5XCIgOiBcImxpc3RcIlxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWNlbnRGaWxlcyhkaXI6IHN0cmluZywgc2V0dGluZ3M6IFB1bGxTZXR0aW5ncyk6IFByb21pc2U8RG93bmxvYWRJdGVtW10+IHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGZzcC5yZWFkZGlyKGRpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaXNGaWxlKCkpO1xuXG4gIGNvbnN0IHN0YXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgZmlsZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aC5qb2luKGRpciwgZW50cnkubmFtZSk7XG4gICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnNwLnN0YXQoYWJzb2x1dGVQYXRoKTtcbiAgICAgIHJldHVybiB7IGVudHJ5LCBzdGF0LCBhYnNvbHV0ZVBhdGggfTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IHdoaXRlbGlzdCA9IHNldHRpbmdzLndoaXRlbGlzdDtcbiAgY29uc3QgYmxhY2tsaXN0ID0gc2V0dGluZ3MuYmxhY2tsaXN0O1xuXG4gIGNvbnN0IGZpbHRlcmVkID0gc3RhdHNcbiAgICAuZmlsdGVyKCh7IGVudHJ5IH0pID0+IHNob3VsZEluY2x1ZGUoZW50cnkubmFtZSwgd2hpdGVsaXN0LCBibGFja2xpc3QpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLnN0YXQubXRpbWVNcyAtIGEuc3RhdC5tdGltZU1zKVxuICAgIC5zbGljZSgwLCBzZXR0aW5ncy5saXN0TGltaXQpXG4gICAgLm1hcCgoeyBlbnRyeSwgc3RhdCwgYWJzb2x1dGVQYXRoIH0pID0+ICh7XG4gICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgYWJzb2x1dGVQYXRoLFxuICAgICAgbXRpbWU6IHN0YXQubXRpbWUsXG4gICAgICBzaXplOiBzdGF0LnNpemVcbiAgICB9KSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkO1xufVxuXG5mdW5jdGlvbiBzaG91bGRJbmNsdWRlKG5hbWU6IHN0cmluZywgd2hpdGVsaXN0OiBzdHJpbmdbXSwgYmxhY2tsaXN0OiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUobmFtZSkucmVwbGFjZSgvXlxcLi8sIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIGlmICh3aGl0ZWxpc3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB3aGl0ZWxpc3QuaW5jbHVkZXMoZXh0KTtcbiAgfVxuICBpZiAoYmxhY2tsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gIWJsYWNrbGlzdC5pbmNsdWRlcyhleHQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVEaXIoZGlyOiBzdHJpbmcpIHtcbiAgYXdhaXQgZnNwLm1rZGlyKGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1vdmVPckNvcHlGaWxlKHNvdXJjZTogc3RyaW5nLCB0YXJnZXREaXI6IHN0cmluZywgYmVoYXZpb3I6IFwibW92ZVwiIHwgXCJjb3B5XCIpIHtcbiAgY29uc3QgdGFyZ2V0UGF0aCA9IGF3YWl0IHVuaXF1ZVBhdGgocGF0aC5qb2luKHRhcmdldERpciwgcGF0aC5iYXNlbmFtZShzb3VyY2UpKSk7XG5cbiAgaWYgKGJlaGF2aW9yID09PSBcImNvcHlcIikge1xuICAgIGF3YWl0IGZzcC5jb3B5RmlsZShzb3VyY2UsIHRhcmdldFBhdGgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZnNwLnJlbmFtZShzb3VyY2UsIHRhcmdldFBhdGgpO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09IFwiRVhERVZcIikge1xuICAgICAgYXdhaXQgZnNwLmNvcHlGaWxlKHNvdXJjZSwgdGFyZ2V0UGF0aCk7XG4gICAgICBhd2FpdCBmc3AudW5saW5rKHNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBleHRyYWN0WmlwKFxuICB6aXBQYXRoOiBzdHJpbmcsXG4gIHRhcmdldERpcjogc3RyaW5nLFxuICBzdHJhdGVneTogXCJ2ZXJzaW9uXCIgfCBcIm92ZXJ3cml0ZVwiXG4pIHtcbiAgY29uc3QgemlwID0gbmV3IEFkbVppcCh6aXBQYXRoKTtcbiAgY29uc3QgZW50cmllcyA9IHppcC5nZXRFbnRyaWVzKCk7XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgZW50cnlOYW1lID0gbm9ybWFsaXplUGF0aChlbnRyeS5lbnRyeU5hbWUpO1xuICAgIGNvbnN0IGRlc3RQYXRoID0gcGF0aC5qb2luKHRhcmdldERpciwgZW50cnlOYW1lKTtcblxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgYXdhaXQgZW5zdXJlRGlyKGRlc3RQYXRoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmFsUGF0aCA9XG4gICAgICBzdHJhdGVneSA9PT0gXCJvdmVyd3JpdGVcIiA/IGRlc3RQYXRoIDogYXdhaXQgdW5pcXVlUGF0aChkZXN0UGF0aCk7XG4gICAgYXdhaXQgZW5zdXJlRGlyKHBhdGguZGlybmFtZShmaW5hbFBhdGgpKTtcbiAgICBjb25zdCBkYXRhID0gZW50cnkuZ2V0RGF0YSgpO1xuICAgIGF3YWl0IGZzcC53cml0ZUZpbGUoZmluYWxQYXRoLCBkYXRhKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlxdWVQYXRoKHRhcmdldFBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGlmICghKGF3YWl0IGV4aXN0cyh0YXJnZXRQYXRoKSkpIHJldHVybiB0YXJnZXRQYXRoO1xuXG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZSh0YXJnZXRQYXRoKTtcbiAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKHRhcmdldFBhdGgpO1xuICBjb25zdCBiYXNlID0gcGF0aC5iYXNlbmFtZSh0YXJnZXRQYXRoLCBleHQpO1xuXG4gIGxldCBjb3VudGVyID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBwYXRoLmpvaW4oZGlyLCBgJHtiYXNlfS0ke2NvdW50ZXJ9JHtleHR9YCk7XG4gICAgaWYgKCEoYXdhaXQgZXhpc3RzKGNhbmRpZGF0ZSkpKSByZXR1cm4gY2FuZGlkYXRlO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGlzdHMocDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZnNwLmFjY2VzcyhwLCBmcy5jb25zdGFudHMuRl9PSyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBcHAsIEZ1enp5TWF0Y2gsIEZ1enp5U3VnZ2VzdE1vZGFsLCBTdWdnZXN0TW9kYWwgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IERvd25sb2FkSXRlbSwgUHVsbFNldHRpbmdzIH0gZnJvbSBcIi4vcHVsbC10eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgRG93bmxvYWRTZWxlY3RNb2RhbCBleHRlbmRzIFN1Z2dlc3RNb2RhbDxEb3dubG9hZEl0ZW0+IHtcbiAgcHJpdmF0ZSBpbmZvRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXBwOiBBcHAsXG4gICAgcHJpdmF0ZSBpdGVtczogRG93bmxvYWRJdGVtW10sXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogUHVsbFNldHRpbmdzLFxuICAgIHByaXZhdGUgb25TZWxlY3Q6IChpdGVtOiBEb3dubG9hZEl0ZW0pID0+IHZvaWRcbiAgKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiU2VsZWN0IGEgZmlsZSB0byBwdWxsXHUyMDI2XCIpO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHN1cGVyLm9uT3BlbigpO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXRoaXMuaW5mb0VsKSB7XG4gICAgICBjb25zdCBsZWdlbmQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcInB1bGwtZGwtbGVnZW5kXCIgfSk7XG4gICAgICB0aGlzLmlucHV0RWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgbGVnZW5kKTtcbiAgICAgIHRoaXMuaW5mb0VsID0gbGVnZW5kO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUluZm8oKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpOiBEb3dubG9hZEl0ZW1bXSB7XG4gICAgY29uc3QgbG93ZXJlZCA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcmVkKSk7XG4gIH1cblxuICByZW5kZXJTdWdnZXN0aW9uKGl0ZW06IERvd25sb2FkSXRlbSwgZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgcmVuZGVyRG93bmxvYWRSb3coaXRlbSwgZWwpO1xuICB9XG5cbiAgb25DaG9vc2VTdWdnZXN0aW9uKGl0ZW06IERvd25sb2FkSXRlbSkge1xuICAgIHRoaXMub25TZWxlY3QoaXRlbSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUluZm8oKSB7XG4gICAgaWYgKCF0aGlzLmluZm9FbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1vdmVDb3B5ID0gdGhpcy5zZXR0aW5ncy5iZWhhdmlvciA9PT0gXCJjb3B5XCIgPyBcIkNvcHkgRmlsZXNcIiA6IFwiTW92ZSBGaWxlc1wiO1xuICAgIGNvbnN0IHppcE1vZGUgPSB0aGlzLnNldHRpbmdzLmV4cGFuZFppcHMgPyBcIkV4dHJhY3Qgemlwc1wiIDogXCJLZWVwIHppcHMgaW50YWN0XCI7XG4gICAgdGhpcy5pbmZvRWwuc2V0VGV4dChgJHttb3ZlQ29weX0gXHUyMDIyICR7emlwTW9kZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnV6enlEb3dubG9hZE1vZGFsIGV4dGVuZHMgRnV6enlTdWdnZXN0TW9kYWw8RG93bmxvYWRJdGVtPiB7XG4gIHByaXZhdGUgaW5mb0VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIHByaXZhdGUgaXRlbXM6IERvd25sb2FkSXRlbVtdLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFB1bGxTZXR0aW5ncyxcbiAgICBwcml2YXRlIG9uU2VsZWN0OiAoaXRlbTogRG93bmxvYWRJdGVtKSA9PiB2b2lkXG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlcihcIlNlbGVjdCBhIGZpbGUgdG8gcHVsbFx1MjAyNlwiKTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBzdXBlci5vbk9wZW4oKTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmlucHV0RWwucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmICF0aGlzLmluZm9FbCkge1xuICAgICAgY29uc3QgbGVnZW5kID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJwdWxsLWRsLWxlZ2VuZFwiIH0pO1xuICAgICAgdGhpcy5pbnB1dEVsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGxlZ2VuZCk7XG4gICAgICB0aGlzLmluZm9FbCA9IGxlZ2VuZDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbmZvKCk7XG4gIH1cblxuICBnZXRJdGVtcygpOiBEb3dubG9hZEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH1cblxuICBnZXRJdGVtVGV4dChpdGVtOiBEb3dubG9hZEl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH1cblxuICByZW5kZXJTdWdnZXN0aW9uKG1hdGNoOiBGdXp6eU1hdGNoPERvd25sb2FkSXRlbT4sIGVsOiBIVE1MRWxlbWVudCkge1xuICAgIHJlbmRlckRvd25sb2FkUm93KG1hdGNoLml0ZW0sIGVsKTtcbiAgfVxuXG4gIG9uQ2hvb3NlSXRlbShpdGVtOiBEb3dubG9hZEl0ZW0pIHtcbiAgICB0aGlzLm9uU2VsZWN0KGl0ZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbmZvKCkge1xuICAgIGlmICghdGhpcy5pbmZvRWwpIHJldHVybjtcbiAgICBjb25zdCBtb3ZlQ29weSA9IHRoaXMuc2V0dGluZ3MuYmVoYXZpb3IgPT09IFwiY29weVwiID8gXCJDb3B5XCIgOiBcIk1vdmVcIjtcbiAgICBjb25zdCB6aXBNb2RlID0gdGhpcy5zZXR0aW5ncy5leHBhbmRaaXBzID8gXCJFeHRyYWN0IHppcHNcIiA6IFwiS2VlcCB6aXBzIGludGFjdFwiO1xuICAgIHRoaXMuaW5mb0VsLnNldFRleHQoYCR7bW92ZUNvcHl9IFx1MjAyMiAke3ppcE1vZGV9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRG93bmxvYWRSb3coaXRlbTogRG93bmxvYWRJdGVtLCBlbDogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3Qgcm93ID0gZWwuY3JlYXRlRGl2KHsgY2xzOiBcInB1bGwtZGwtcm93XCIgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwicHVsbC1kbC1uYW1lXCIgfSk7XG4gIG5hbWVFbC5zZXRUZXh0KGl0ZW0ubmFtZSk7XG5cbiAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGl0ZW0ubmFtZSkucmVwbGFjZSgvXlxcLi8sIFwiXCIpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChleHQpIHtcbiAgICBjb25zdCBiYWRnZSA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwicHVsbC1kbC1iYWRnZVwiIH0pO1xuICAgIGJhZGdlLnNldFRleHQoZXh0KTtcbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwicHVsbC1kbC1tZXRhXCIgfSk7XG4gIG1ldGEuc2V0VGV4dChcbiAgICBgJHtmb3JtYXRSZWxhdGl2ZShpdGVtLm10aW1lKX0gXHUyMDIyICR7aXRlbS5tdGltZS50b0xvY2FsZVN0cmluZygpfSBcdTIwMjIgJHtmb3JtYXRCeXRlcyhpdGVtLnNpemUpfWBcbiAgKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkgcmV0dXJuIFwiMCBCXCI7XG4gIGNvbnN0IGsgPSAxMDI0O1xuICBjb25zdCBzaXplcyA9IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiXTtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuICBjb25zdCB2YWx1ZSA9IGJ5dGVzIC8gTWF0aC5wb3coaywgaSk7XG4gIHJldHVybiBgJHt2YWx1ZS50b0ZpeGVkKHZhbHVlID49IDEwIHx8IGkgPT09IDAgPyAwIDogMSl9ICR7c2l6ZXNbaV19YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGRpZmZNcyA9IERhdGUubm93KCkgLSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3Qgc2VjID0gTWF0aC5mbG9vcihkaWZmTXMgLyAxMDAwKTtcbiAgY29uc3QgbWluID0gTWF0aC5mbG9vcihzZWMgLyA2MCk7XG4gIGNvbnN0IGhyID0gTWF0aC5mbG9vcihtaW4gLyA2MCk7XG4gIGNvbnN0IGRheSA9IE1hdGguZmxvb3IoaHIgLyAyNCk7XG5cbiAgaWYgKHNlYyA8IDYwKSByZXR1cm4gXCJqdXN0IG5vd1wiO1xuICBpZiAobWluIDwgNjApIHJldHVybiBgJHttaW59IG1pbiBhZ29gO1xuICBpZiAoaHIgPCAyNCkgcmV0dXJuIGAke2hyfSBociR7aHIgPT09IDEgPyBcIlwiIDogXCJzXCJ9IGFnb2A7XG4gIGlmIChkYXkgPCA3KSByZXR1cm4gYCR7ZGF5fSBkYXkke2RheSA9PT0gMSA/IFwiXCIgOiBcInNcIn0gYWdvYDtcblxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuZXhwb3J0IHR5cGUgeyBEb3dubG9hZEl0ZW0gfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsMkNBQUFBLFVBQUFDLFNBQUE7QUFBQSxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBLE1BRWIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQTtBQUFBLE1BR25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFHbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BRW5CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsWUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixlQUFtQjtBQUFBO0FBQUEsTUFFbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLGFBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFdBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsWUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFHbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFFbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFFbkIsT0FBbUI7QUFBQTtBQUFBO0FBQUEsTUFFbkIsTUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFFbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixhQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSW5CLFNBQW1CO0FBQUE7QUFBQSxNQUNuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixTQUFtQjtBQUFBO0FBQUEsTUFDbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFNBQW1CO0FBQUE7QUFBQTtBQUFBLE1BRW5CLFNBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUluQixTQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixNQUFtQjtBQUFBLE1BQ25CLFFBQW1CO0FBQUEsTUFDbkIsTUFBbUI7QUFBQTtBQUFBLE1BR25CLE9BQW1CO0FBQUEsTUFDbkIsU0FBbUI7QUFBQTtBQUFBLE1BR25CLFVBQW1CO0FBQUEsTUFDbkIsV0FBbUI7QUFBQSxNQUNuQixRQUFtQjtBQUFB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QUMvQyxVQUFNLFdBQWdCLFdBQUssV0FBVyxTQUFTO0FBRS9DLFFBQUksTUFBTSxhQUFhO0FBQ3JCLFlBQU0sVUFBVSxRQUFRO0FBQ3hCO0FBQUEsSUFDRjtBQUVBLFVBQU0sWUFDSixhQUFhLGNBQWMsV0FBVyxNQUFNLFdBQVcsUUFBUTtBQUNqRSxVQUFNLFVBQWUsY0FBUSxTQUFTLENBQUM7QUFDdkMsVUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFNLFVBQUFELFNBQUksVUFBVSxXQUFXLElBQUk7QUFBQSxFQUNyQztBQUNGO0FBRUEsZUFBZSxXQUFXLFlBQXFDO0FBQzdELE1BQUksQ0FBRSxNQUFNLE9BQU8sVUFBVSxFQUFJLFFBQU87QUFFeEMsUUFBTSxNQUFXLGNBQVEsVUFBVTtBQUNuQyxRQUFNLE1BQVcsY0FBUSxVQUFVO0FBQ25DLFFBQU0sT0FBWSxlQUFTLFlBQVksR0FBRztBQUUxQyxNQUFJLFVBQVU7QUFDZCxTQUFPLE1BQU07QUFDWCxVQUFNLFlBQWlCLFdBQUssS0FBSyxHQUFHLElBQUksSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO0FBQzNELFFBQUksQ0FBRSxNQUFNLE9BQU8sU0FBUyxFQUFJLFFBQU87QUFDdkMsZUFBVztBQUFBLEVBQ2I7QUFDRjtBQUVBLGVBQWUsT0FBTyxHQUE2QjtBQUNqRCxNQUFJO0FBQ0YsVUFBTSxVQUFBQSxTQUFJLE9BQU8sR0FBTSxhQUFVLElBQUk7QUFDckMsV0FBTztBQUFBLEVBQ1QsU0FBUyxHQUFHO0FBQ1YsV0FBTztBQUFBLEVBQ1Q7QUFDRjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImV4aXN0cyIsICJlcnIiLCAiZmQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJmcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiam9pbiIsICJsb2NhbFBhdGgiLCAib3B0aW9ucyIsICJlcnIiLCAiY29udGVudCIsICJmaWxlQXR0ciIsICJpbXBvcnRfb2JzaWRpYW4iLCAicGF0aCIsICJmc3AiLCAiQWRtWmlwIl0KfQo=
