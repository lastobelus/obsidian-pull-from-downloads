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

// src/main.ts
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

// src/download-modal.ts
var import_obsidian = require("obsidian");
var path = __toESM(require("path"));
var FuzzyDownloadModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app, items, settings, onSelect) {
    super(app);
    this.items = items;
    this.settings = settings;
    this.onSelect = onSelect;
    this.setPlaceholder("Select a file to pull\u2026");
  }
  onOpen() {
    super.onOpen();
    this.setInstructions([
      {
        command: "files:",
        purpose: this.settings.behavior === "copy" ? "copy" : "move"
      },
      {
        command: "zip files:",
        purpose: this.settings.expandZips ? "expand" : "don't expand"
      }
    ]);
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

// src/main.ts
var DEFAULT_SETTINGS = {
  downloadsDir: "~/Downloads",
  listLimit: 10,
  behavior: "move",
  whitelist: [],
  blacklist: [],
  zipCollision: "version",
  expandZips: true
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
    const modal = new FuzzyDownloadModal(
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
      let action = "Pulled";
      if (isZip && this.settings.expandZips) {
        await extractZip(item.absolutePath, targetDir, this.settings.zipCollision);
        action = "Expanded";
      } else {
        await moveOrCopyFile(item.absolutePath, targetDir, this.settings.behavior);
      }
      new import_obsidian2.Notice(`${action} ${item.name} into ${targetFolder.path}`);
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
    expandZips: settings.expandZips !== false
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
  const ignoredNames = /* @__PURE__ */ new Set([
    ".DS_Store",
    "Thumbs.db",
    "desktop.ini"
  ]);
  if (ignoredNames.has(name)) return false;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC9lcnJvcnMuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC91dGlscy5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2ZhdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL3V0aWwvZGVjb2Rlci5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvZW50cnlIZWFkZXIuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvaGVhZGVycy9tYWluSGVhZGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvbWV0aG9kcy9kZWZsYXRlci5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC9tZXRob2RzL2luZmxhdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL21ldGhvZHMvemlwY3J5cHRvLmpzIiwgIm5vZGVfbW9kdWxlcy9hZG0temlwL21ldGhvZHMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvemlwRW50cnkuanMiLCAibm9kZV9tb2R1bGVzL2FkbS16aXAvemlwRmlsZS5qcyIsICJub2RlX21vZHVsZXMvYWRtLXppcC9hZG0temlwLmpzIiwgInNyYy9tYWluLnRzIiwgInNyYy9kb3dubG9hZC1tb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyogVGhlIGxvY2FsIGZpbGUgaGVhZGVyICovXG4gICAgTE9DSERSICAgICAgICAgICA6IDMwLCAvLyBMT0MgaGVhZGVyIHNpemVcbiAgICBMT0NTSUcgICAgICAgICAgIDogMHgwNDAzNGI1MCwgLy8gXCJQS1xcMDAzXFwwMDRcIlxuICAgIExPQ1ZFUiAgICAgICAgICAgOiA0LFx0Ly8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgIExPQ0ZMRyAgICAgICAgICAgOiA2LCAvLyBnZW5lcmFsIHB1cnBvc2UgYml0IGZsYWdcbiAgICBMT0NIT1cgICAgICAgICAgIDogOCwgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgTE9DVElNICAgICAgICAgICA6IDEwLCAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgTE9DQ1JDICAgICAgICAgICA6IDE0LCAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICBMT0NTSVogICAgICAgICAgIDogMTgsIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgIExPQ0xFTiAgICAgICAgICAgOiAyMiwgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICBMT0NOQU0gICAgICAgICAgIDogMjYsIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgIExPQ0VYVCAgICAgICAgICAgOiAyOCwgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG5cbiAgICAvKiBUaGUgRGF0YSBkZXNjcmlwdG9yICovXG4gICAgRVhUU0lHICAgICAgICAgICA6IDB4MDgwNzRiNTAsIC8vIFwiUEtcXDAwN1xcMDA4XCJcbiAgICBFWFRIRFIgICAgICAgICAgIDogMTYsIC8vIEVYVCBoZWFkZXIgc2l6ZVxuICAgIEVYVENSQyAgICAgICAgICAgOiA0LCAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICBFWFRTSVogICAgICAgICAgIDogOCwgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgRVhUTEVOICAgICAgICAgICA6IDEyLCAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuXG4gICAgLyogVGhlIGNlbnRyYWwgZGlyZWN0b3J5IGZpbGUgaGVhZGVyICovXG4gICAgQ0VOSERSICAgICAgICAgICA6IDQ2LCAvLyBDRU4gaGVhZGVyIHNpemVcbiAgICBDRU5TSUcgICAgICAgICAgIDogMHgwMjAxNGI1MCwgLy8gXCJQS1xcMDAxXFwwMDJcIlxuICAgIENFTlZFTSAgICAgICAgICAgOiA0LCAvLyB2ZXJzaW9uIG1hZGUgYnlcbiAgICBDRU5WRVIgICAgICAgICAgIDogNiwgLy8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgIENFTkZMRyAgICAgICAgICAgOiA4LCAvLyBlbmNyeXB0LCBkZWNyeXB0IGZsYWdzXG4gICAgQ0VOSE9XICAgICAgICAgICA6IDEwLCAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICBDRU5USU0gICAgICAgICAgIDogMTIsIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICBDRU5DUkMgICAgICAgICAgIDogMTYsIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgIENFTlNJWiAgICAgICAgICAgOiAyMCwgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgQ0VOTEVOICAgICAgICAgICA6IDI0LCAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgIENFTk5BTSAgICAgICAgICAgOiAyOCwgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgQ0VORVhUICAgICAgICAgICA6IDMwLCAvLyBleHRyYSBmaWVsZCBsZW5ndGhcbiAgICBDRU5DT00gICAgICAgICAgIDogMzIsIC8vIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICBDRU5EU0sgICAgICAgICAgIDogMzQsIC8vIHZvbHVtZSBudW1iZXIgc3RhcnRcbiAgICBDRU5BVFQgICAgICAgICAgIDogMzYsIC8vIGludGVybmFsIGZpbGUgYXR0cmlidXRlc1xuICAgIENFTkFUWCAgICAgICAgICAgOiAzOCwgLy8gZXh0ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzIChob3N0IHN5c3RlbSBkZXBlbmRlbnQpXG4gICAgQ0VOT0ZGICAgICAgICAgICA6IDQyLCAvLyBMT0MgaGVhZGVyIG9mZnNldFxuXG4gICAgLyogVGhlIGVudHJpZXMgaW4gdGhlIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeSAqL1xuICAgIEVOREhEUiAgICAgICAgICAgOiAyMiwgLy8gRU5EIGhlYWRlciBzaXplXG4gICAgRU5EU0lHICAgICAgICAgICA6IDB4MDYwNTRiNTAsIC8vIFwiUEtcXDAwNVxcMDA2XCJcbiAgICBFTkRTVUIgICAgICAgICAgIDogOCwgLy8gbnVtYmVyIG9mIGVudHJpZXMgb24gdGhpcyBkaXNrXG4gICAgRU5EVE9UICAgICAgICAgICA6IDEwLCAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgIEVORFNJWiAgICAgICAgICAgOiAxMiwgLy8gY2VudHJhbCBkaXJlY3Rvcnkgc2l6ZSBpbiBieXRlc1xuICAgIEVORE9GRiAgICAgICAgICAgOiAxNiwgLy8gb2Zmc2V0IG9mIGZpcnN0IENFTiBoZWFkZXJcbiAgICBFTkRDT00gICAgICAgICAgIDogMjAsIC8vIHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG5cbiAgICBFTkQ2NEhEUiAgICAgICAgIDogMjAsIC8vIHppcDY0IEVORCBoZWFkZXIgc2l6ZVxuICAgIEVORDY0U0lHICAgICAgICAgOiAweDA3MDY0YjUwLCAvLyB6aXA2NCBMb2NhdG9yIHNpZ25hdHVyZSwgXCJQS1xcMDA2XFwwMDdcIlxuICAgIEVORDY0U1RBUlQgICAgICAgOiA0LCAvLyBudW1iZXIgb2YgdGhlIGRpc2sgd2l0aCB0aGUgc3RhcnQgb2YgdGhlIHppcDY0XG4gICAgRU5ENjRPRkYgICAgICAgICA6IDgsIC8vIHJlbGF0aXZlIG9mZnNldCBvZiB0aGUgemlwNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XG4gICAgRU5ENjROVU1ESVNLUyAgICA6IDE2LCAvLyB0b3RhbCBudW1iZXIgb2YgZGlza3NcblxuICAgIFpJUDY0U0lHICAgICAgICAgOiAweDA2MDY0YjUwLCAvLyB6aXA2NCBzaWduYXR1cmUsIFwiUEtcXDAwNlxcMDA2XCJcbiAgICBaSVA2NEhEUiAgICAgICAgIDogNTYsIC8vIHppcDY0IHJlY29yZCBtaW5pbXVtIHNpemVcbiAgICBaSVA2NExFQUQgICAgICAgIDogMTIsIC8vIGxlYWRpbmcgYnl0ZXMgYXQgdGhlIHN0YXJ0IG9mIHRoZSByZWNvcmQsIG5vdCBjb3VudGVkIGJ5IHRoZSB2YWx1ZSBzdG9yZWQgaW4gWklQNjRTSVpFXG4gICAgWklQNjRTSVpFICAgICAgICA6IDQsIC8vIHppcDY0IHNpemUgb2YgdGhlIGNlbnRyYWwgZGlyZWN0b3J5IHJlY29yZFxuICAgIFpJUDY0VkVNICAgICAgICAgOiAxMiwgLy8gemlwNjQgdmVyc2lvbiBtYWRlIGJ5XG4gICAgWklQNjRWRVIgICAgICAgICA6IDE0LCAvLyB6aXA2NCB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgWklQNjREU0sgICAgICAgICA6IDE2LCAvLyB6aXA2NCBudW1iZXIgb2YgdGhpcyBkaXNrXG4gICAgWklQNjREU0tESVIgICAgICA6IDIwLCAvLyBudW1iZXIgb2YgdGhlIGRpc2sgd2l0aCB0aGUgc3RhcnQgb2YgdGhlIHJlY29yZCBkaXJlY3RvcnlcbiAgICBaSVA2NFNVQiAgICAgICAgIDogMjQsIC8vIG51bWJlciBvZiBlbnRyaWVzIG9uIHRoaXMgZGlza1xuICAgIFpJUDY0VE9UICAgICAgICAgOiAzMiwgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICBaSVA2NFNJWkIgICAgICAgIDogNDAsIC8vIHppcDY0IGNlbnRyYWwgZGlyZWN0b3J5IHNpemUgaW4gYnl0ZXNcbiAgICBaSVA2NE9GRiAgICAgICAgIDogNDgsIC8vIG9mZnNldCBvZiBzdGFydCBvZiBjZW50cmFsIGRpcmVjdG9yeSB3aXRoIHJlc3BlY3QgdG8gdGhlIHN0YXJ0aW5nIGRpc2sgbnVtYmVyXG4gICAgWklQNjRFWFRSQSAgICAgICA6IDU2LCAvLyBleHRlbnNpYmxlIGRhdGEgc2VjdG9yXG5cbiAgICAvKiBDb21wcmVzc2lvbiBtZXRob2RzICovXG4gICAgU1RPUkVEICAgICAgICAgICA6IDAsIC8vIG5vIGNvbXByZXNzaW9uXG4gICAgU0hSVU5LICAgICAgICAgICA6IDEsIC8vIHNocnVua1xuICAgIFJFRFVDRUQxICAgICAgICAgOiAyLCAvLyByZWR1Y2VkIHdpdGggY29tcHJlc3Npb24gZmFjdG9yIDFcbiAgICBSRURVQ0VEMiAgICAgICAgIDogMywgLy8gcmVkdWNlZCB3aXRoIGNvbXByZXNzaW9uIGZhY3RvciAyXG4gICAgUkVEVUNFRDMgICAgICAgICA6IDQsIC8vIHJlZHVjZWQgd2l0aCBjb21wcmVzc2lvbiBmYWN0b3IgM1xuICAgIFJFRFVDRUQ0ICAgICAgICAgOiA1LCAvLyByZWR1Y2VkIHdpdGggY29tcHJlc3Npb24gZmFjdG9yIDRcbiAgICBJTVBMT0RFRCAgICAgICAgIDogNiwgLy8gaW1wbG9kZWRcbiAgICAvLyA3IHJlc2VydmVkIGZvciBUb2tlbml6aW5nIGNvbXByZXNzaW9uIGFsZ29yaXRobVxuICAgIERFRkxBVEVEICAgICAgICAgOiA4LCAvLyBkZWZsYXRlZFxuICAgIEVOSEFOQ0VEX0RFRkxBVEVEOiA5LCAvLyBlbmhhbmNlZCBkZWZsYXRlZFxuICAgIFBLV0FSRSAgICAgICAgICAgOiAxMCwvLyBQS1dhcmUgRENMIGltcGxvZGVkXG4gICAgLy8gMTEgcmVzZXJ2ZWQgYnkgUEtXQVJFXG4gICAgQlpJUDIgICAgICAgICAgICA6IDEyLCAvLyAgY29tcHJlc3NlZCB1c2luZyBCWklQMlxuICAgIC8vIDEzIHJlc2VydmVkIGJ5IFBLV0FSRVxuICAgIExaTUEgICAgICAgICAgICAgOiAxNCwgLy8gTFpNQVxuICAgIC8vIDE1LTE3IHJlc2VydmVkIGJ5IFBLV0FSRVxuICAgIElCTV9URVJTRSAgICAgICAgOiAxOCwgLy8gY29tcHJlc3NlZCB1c2luZyBJQk0gVEVSU0VcbiAgICBJQk1fTFo3NyAgICAgICAgIDogMTksIC8vIElCTSBMWjc3IHpcbiAgICBBRVNfRU5DUllQVCAgICAgIDogOTksIC8vIFdpblpJUCBBRVMgZW5jcnlwdGlvbiBtZXRob2RcblxuICAgIC8qIEdlbmVyYWwgcHVycG9zZSBiaXQgZmxhZyAqL1xuICAgIC8vIHZhbHVlcyBjYW4gb2J0YWluZWQgd2l0aCBleHByZXNzaW9uIDIqKmJpdG5yXG4gICAgRkxHX0VOQyAgICAgICAgICA6IDEsICAgIC8vIEJpdCAwOiBlbmNyeXB0ZWQgZmlsZVxuICAgIEZMR19DT01QMSAgICAgICAgOiAyLCAgICAvLyBCaXQgMSwgY29tcHJlc3Npb24gb3B0aW9uXG4gICAgRkxHX0NPTVAyICAgICAgICA6IDQsICAgIC8vIEJpdCAyLCBjb21wcmVzc2lvbiBvcHRpb25cbiAgICBGTEdfREVTQyAgICAgICAgIDogOCwgICAgLy8gQml0IDMsIGRhdGEgZGVzY3JpcHRvclxuICAgIEZMR19FTkggICAgICAgICAgOiAxNiwgICAvLyBCaXQgNCwgZW5oYW5jZWQgZGVmbGF0aW5nXG4gICAgRkxHX1BBVENIICAgICAgICA6IDMyLCAgIC8vIEJpdCA1LCBpbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBjb21wcmVzc2VkIHBhdGNoZWQgZGF0YS5cbiAgICBGTEdfU1RSICAgICAgICAgIDogNjQsICAgLy8gQml0IDYsIHN0cm9uZyBlbmNyeXB0aW9uIChwYXRlbnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQml0cyA3LTEwOiBDdXJyZW50bHkgdW51c2VkLlxuICAgIEZMR19FRlMgICAgICAgICAgOiAyMDQ4LCAvLyBCaXQgMTE6IExhbmd1YWdlIGVuY29kaW5nIGZsYWcgKEVGUylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQml0IDEyOiBSZXNlcnZlZCBieSBQS1dBUkUgZm9yIGVuaGFuY2VkIGNvbXByZXNzaW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCaXQgMTM6IGVuY3J5cHRlZCB0aGUgQ2VudHJhbCBEaXJlY3RvcnkgKHBhdGVudGVkKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQml0cyAxNC0xNTogUmVzZXJ2ZWQgYnkgUEtXQVJFLlxuICAgIEZMR19NU0sgICAgICAgICAgOiA0MDk2LCAvLyBtYXNrIGhlYWRlciB2YWx1ZXNcblxuICAgIC8qIExvYWQgdHlwZSAqL1xuICAgIEZJTEUgICAgICAgICAgICAgOiAyLFxuICAgIEJVRkZFUiAgICAgICAgICAgOiAxLFxuICAgIE5PTkUgICAgICAgICAgICAgOiAwLFxuXG4gICAgLyogNC41IEV4dGVuc2libGUgZGF0YSBmaWVsZHMgKi9cbiAgICBFRl9JRCAgICAgICAgICAgIDogMCxcbiAgICBFRl9TSVpFICAgICAgICAgIDogMixcblxuICAgIC8qIEhlYWRlciBJRHMgKi9cbiAgICBJRF9aSVA2NCAgICAgICAgIDogMHgwMDAxLFxuICAgIElEX0FWSU5GTyAgICAgICAgOiAweDAwMDcsXG4gICAgSURfUEZTICAgICAgICAgICA6IDB4MDAwOCxcbiAgICBJRF9PUzIgICAgICAgICAgIDogMHgwMDA5LFxuICAgIElEX05URlMgICAgICAgICAgOiAweDAwMGEsXG4gICAgSURfT1BFTlZNUyAgICAgICA6IDB4MDAwYyxcbiAgICBJRF9VTklYICAgICAgICAgIDogMHgwMDBkLFxuICAgIElEX0ZPUksgICAgICAgICAgOiAweDAwMGUsXG4gICAgSURfUEFUQ0ggICAgICAgICA6IDB4MDAwZixcbiAgICBJRF9YNTA5X1BLQ1M3ICAgIDogMHgwMDE0LFxuICAgIElEX1g1MDlfQ0VSVElEX0YgOiAweDAwMTUsXG4gICAgSURfWDUwOV9DRVJUSURfQyA6IDB4MDAxNixcbiAgICBJRF9TVFJPTkdFTkMgICAgIDogMHgwMDE3LFxuICAgIElEX1JFQ09SRF9NR1QgICAgOiAweDAwMTgsXG4gICAgSURfWDUwOV9QS0NTN19STCA6IDB4MDAxOSxcbiAgICBJRF9JQk0xICAgICAgICAgIDogMHgwMDY1LFxuICAgIElEX0lCTTIgICAgICAgICAgOiAweDAwNjYsXG4gICAgSURfUE9TWklQICAgICAgICA6IDB4NDY5MCxcblxuICAgIEVGX1pJUDY0X09SXzMyICAgOiAweGZmZmZmZmZmLFxuICAgIEVGX1pJUDY0X09SXzE2ICAgOiAweGZmZmYsXG4gICAgRUZfWklQNjRfU1VOQ09NUCA6IDAsXG4gICAgRUZfWklQNjRfU0NPTVAgICA6IDgsXG4gICAgRUZfWklQNjRfUkhPICAgICA6IDE2LFxuICAgIEVGX1pJUDY0X0RTTiAgICAgOiAyNFxufTtcbiIsICJjb25zdCBlcnJvcnMgPSB7XG4gICAgLyogSGVhZGVyIGVycm9yIG1lc3NhZ2VzICovXG4gICAgSU5WQUxJRF9MT0M6IFwiSW52YWxpZCBMT0MgaGVhZGVyIChiYWQgc2lnbmF0dXJlKVwiLFxuICAgIElOVkFMSURfQ0VOOiBcIkludmFsaWQgQ0VOIGhlYWRlciAoYmFkIHNpZ25hdHVyZSlcIixcbiAgICBJTlZBTElEX0VORDogXCJJbnZhbGlkIEVORCBoZWFkZXIgKGJhZCBzaWduYXR1cmUpXCIsXG5cbiAgICAvKiBEZXNjcmlwdG9yICovXG4gICAgREVTQ1JJUFRPUl9OT1RfRVhJU1Q6IFwiTm8gZGVzY3JpcHRvciBwcmVzZW50XCIsXG4gICAgREVTQ1JJUFRPUl9VTktOT1dOOiBcIlVua25vd24gZGVzY3JpcHRvciBmb3JtYXRcIixcbiAgICBERVNDUklQVE9SX0ZBVUxUWTogXCJEZXNjcmlwdG9yIGRhdGEgaXMgbWFsZm9ybWVkXCIsXG5cbiAgICAvKiBaaXBFbnRyeSBlcnJvciBtZXNzYWdlcyovXG4gICAgTk9fREFUQTogXCJOb3RoaW5nIHRvIGRlY29tcHJlc3NcIixcbiAgICBCQURfQ1JDOiBcIkNSQzMyIGNoZWNrc3VtIGZhaWxlZCB7MH1cIixcbiAgICBGSUxFX0lOX1RIRV9XQVk6IFwiVGhlcmUgaXMgYSBmaWxlIGluIHRoZSB3YXk6IHswfVwiLFxuICAgIFVOS05PV05fTUVUSE9EOiBcIkludmFsaWQvdW5zdXBwb3J0ZWQgY29tcHJlc3Npb24gbWV0aG9kXCIsXG5cbiAgICAvKiBJbmZsYXRlciBlcnJvciBtZXNzYWdlcyAqL1xuICAgIEFWQUlMX0RBVEE6IFwiaW5mbGF0ZTo6QXZhaWxhYmxlIGluZmxhdGUgZGF0YSBkaWQgbm90IHRlcm1pbmF0ZVwiLFxuICAgIElOVkFMSURfRElTVEFOQ0U6IFwiaW5mbGF0ZTo6SW52YWxpZCBsaXRlcmFsL2xlbmd0aCBvciBkaXN0YW5jZSBjb2RlIGluIGZpeGVkIG9yIGR5bmFtaWMgYmxvY2tcIixcbiAgICBUT19NQU5ZX0NPREVTOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogdG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIGNvZGVzXCIsXG4gICAgSU5WQUxJRF9SRVBFQVRfTEVOOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogcmVwZWF0IG1vcmUgdGhhbiBzcGVjaWZpZWQgbGVuZ3Roc1wiLFxuICAgIElOVkFMSURfUkVQRUFUX0ZJUlNUOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogcmVwZWF0IGxlbmd0aHMgd2l0aCBubyBmaXJzdCBsZW5ndGhcIixcbiAgICBJTkNPTVBMRVRFX0NPREVTOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogY29kZSBsZW5ndGhzIGNvZGVzIGluY29tcGxldGVcIixcbiAgICBJTlZBTElEX0RZTl9ESVNUQU5DRTogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IGludmFsaWQgZGlzdGFuY2UgY29kZSBsZW5ndGhzXCIsXG4gICAgSU5WQUxJRF9DT0RFU19MRU46IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiBpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGUgbGVuZ3Roc1wiLFxuICAgIElOVkFMSURfU1RPUkVfQkxPQ0s6IFwiaW5mbGF0ZTo6U3RvcmVkIGJsb2NrIGxlbmd0aCBkaWQgbm90IG1hdGNoIG9uZSdzIGNvbXBsZW1lbnRcIixcbiAgICBJTlZBTElEX0JMT0NLX1RZUEU6IFwiaW5mbGF0ZTo6SW52YWxpZCBibG9jayB0eXBlICh0eXBlID09IDMpXCIsXG5cbiAgICAvKiBBRE0tWklQIGVycm9yIG1lc3NhZ2VzICovXG4gICAgQ0FOVF9FWFRSQUNUX0ZJTEU6IFwiQ291bGQgbm90IGV4dHJhY3QgdGhlIGZpbGVcIixcbiAgICBDQU5UX09WRVJSSURFOiBcIlRhcmdldCBmaWxlIGFscmVhZHkgZXhpc3RzXCIsXG4gICAgRElTS19FTlRSWV9UT09fTEFSR0U6IFwiTnVtYmVyIG9mIGRpc2sgZW50cmllcyBpcyB0b28gbGFyZ2VcIixcbiAgICBOT19aSVA6IFwiTm8gemlwIGZpbGUgd2FzIGxvYWRlZFwiLFxuICAgIE5PX0VOVFJZOiBcIkVudHJ5IGRvZXNuJ3QgZXhpc3RcIixcbiAgICBESVJFQ1RPUllfQ09OVEVOVF9FUlJPUjogXCJBIGRpcmVjdG9yeSBjYW5ub3QgaGF2ZSBjb250ZW50XCIsXG4gICAgRklMRV9OT1RfRk9VTkQ6ICdGaWxlIG5vdCBmb3VuZDogXCJ7MH1cIicsXG4gICAgTk9UX0lNUExFTUVOVEVEOiBcIk5vdCBpbXBsZW1lbnRlZFwiLFxuICAgIElOVkFMSURfRklMRU5BTUU6IFwiSW52YWxpZCBmaWxlbmFtZVwiLFxuICAgIElOVkFMSURfRk9STUFUOiBcIkludmFsaWQgb3IgdW5zdXBwb3J0ZWQgemlwIGZvcm1hdC4gTm8gRU5EIGhlYWRlciBmb3VuZFwiLFxuICAgIElOVkFMSURfUEFTU19QQVJBTTogXCJJbmNvbXBhdGlibGUgcGFzc3dvcmQgcGFyYW1ldGVyXCIsXG4gICAgV1JPTkdfUEFTU1dPUkQ6IFwiV3JvbmcgUGFzc3dvcmRcIixcblxuICAgIC8qIEFETS1aSVAgKi9cbiAgICBDT01NRU5UX1RPT19MT05HOiBcIkNvbW1lbnQgaXMgdG9vIGxvbmdcIiwgLy8gQ29tbWVudCBjYW4gYmUgbWF4IDY1NTM1IGJ5dGVzIGxvbmcgKE5PVEU6IHNvbWUgbm9uLVVTIGNoYXJhY3RlcnMgbWF5IHRha2UgbW9yZSBzcGFjZSlcbiAgICBFWFRSQV9GSUVMRF9QQVJTRV9FUlJPUjogXCJFeHRyYSBmaWVsZCBwYXJzaW5nIGVycm9yXCJcbn07XG5cbi8vIHRlbXBsYXRlXG5mdW5jdGlvbiBFKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKSB7IC8vIEFsbG93IHswfSAuLiB7OX0gYXJndW1lbnRzIGluIGVycm9yIG1lc3NhZ2UsIGJhc2VkIG9uIGFyZ3VtZW50IG51bWJlclxuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFx7KFxcZClcXH0vZywgKF8sIG4pID0+IGFyZ3Nbbl0gfHwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQURNLVpJUDogJyArIG1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8vIEluaXQgZXJyb3JzIHdpdGggdGVtcGxhdGVcbmZvciAoY29uc3QgbXNnIG9mIE9iamVjdC5rZXlzKGVycm9ycykpIHtcbiAgICBleHBvcnRzW21zZ10gPSBFKGVycm9yc1ttc2ddKTtcbn1cbiIsICJjb25zdCBmc3lzdGVtID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgcHRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5jb25zdCBpc1dpbiA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIFwid2luMzJcIiA9PT0gcHJvY2Vzcy5wbGF0Zm9ybTtcblxuY29uc3QgaXNfT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogIT09IG51bGw7XG5cbi8vIGdlbmVyYXRlIENSQzMyIGxvb2t1cCB0YWJsZVxuY29uc3QgY3JjVGFibGUgPSBuZXcgVWludDMyQXJyYXkoMjU2KS5tYXAoKHQsIGMpID0+IHtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgICBpZiAoKGMgJiAxKSAhPT0gMCkge1xuICAgICAgICAgICAgYyA9IDB4ZWRiODgzMjAgXiAoYyA+Pj4gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjID4+Pj0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYyA+Pj4gMDtcbn0pO1xuXG4vLyBVVElMUyBmdW5jdGlvbnNcblxuZnVuY3Rpb24gVXRpbHMob3B0cykge1xuICAgIHRoaXMuc2VwID0gcHRoLnNlcDtcbiAgICB0aGlzLmZzID0gZnN5c3RlbTtcblxuICAgIGlmIChpc19PYmoob3B0cykpIHtcbiAgICAgICAgLy8gY3VzdG9tIGZpbGVzeXN0ZW1cbiAgICAgICAgaWYgKGlzX09iaihvcHRzLmZzKSAmJiB0eXBlb2Ygb3B0cy5mcy5zdGF0U3luYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmZzID0gb3B0cy5mcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcblxuLy8gSU5TVEFOVElBQkxFIGZ1bmN0aW9uc1xuXG5VdGlscy5wcm90b3R5cGUubWFrZURpciA9IGZ1bmN0aW9uICgvKlN0cmluZyovIGZvbGRlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3luYyAtIG1ha2UgZGlyZWN0b3JpZXMgdHJlZVxuICAgIGZ1bmN0aW9uIG1rZGlyU3luYygvKlN0cmluZyovIGZwYXRoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZFBhdGggPSBmcGF0aC5zcGxpdChzZWxmLnNlcClbMF07XG4gICAgICAgIGZwYXRoLnNwbGl0KHNlbGYuc2VwKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgbmFtZS5zdWJzdHIoLTEsIDEpID09PSBcIjpcIikgcmV0dXJuO1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoICs9IHNlbGYuc2VwICsgbmFtZTtcbiAgICAgICAgICAgIHZhciBzdGF0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGF0ID0gc2VsZi5mcy5zdGF0U3luYyhyZXNvbHZlZFBhdGgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnMubWtkaXJTeW5jKHJlc29sdmVkUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRmlsZSgpKSB0aHJvdyBFcnJvcnMuRklMRV9JTl9USEVfV0FZKGBcIiR7cmVzb2x2ZWRQYXRofVwiYCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1rZGlyU3luYyhmb2xkZXIpO1xufTtcblxuVXRpbHMucHJvdG90eXBlLndyaXRlRmlsZVRvID0gZnVuY3Rpb24gKC8qU3RyaW5nKi8gcGF0aCwgLypCdWZmZXIqLyBjb250ZW50LCAvKkJvb2xlYW4qLyBvdmVyd3JpdGUsIC8qTnVtYmVyKi8gYXR0cikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLmZzLmV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgICAgaWYgKCFvdmVyd3JpdGUpIHJldHVybiBmYWxzZTsgLy8gY2Fubm90IG92ZXJ3cml0ZVxuXG4gICAgICAgIHZhciBzdGF0ID0gc2VsZi5mcy5zdGF0U3luYyhwYXRoKTtcbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBmb2xkZXIgPSBwdGguZGlybmFtZShwYXRoKTtcbiAgICBpZiAoIXNlbGYuZnMuZXhpc3RzU3luYyhmb2xkZXIpKSB7XG4gICAgICAgIHNlbGYubWFrZURpcihmb2xkZXIpO1xuICAgIH1cblxuICAgIHZhciBmZDtcbiAgICB0cnkge1xuICAgICAgICBmZCA9IHNlbGYuZnMub3BlblN5bmMocGF0aCwgXCJ3XCIsIDBvNjY2KTsgLy8gMDY2NlxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZi5mcy5jaG1vZFN5bmMocGF0aCwgMG82NjYpO1xuICAgICAgICBmZCA9IHNlbGYuZnMub3BlblN5bmMocGF0aCwgXCJ3XCIsIDBvNjY2KTtcbiAgICB9XG4gICAgaWYgKGZkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZWxmLmZzLndyaXRlU3luYyhmZCwgY29udGVudCwgMCwgY29udGVudC5sZW5ndGgsIDApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2VsZi5mcy5jbG9zZVN5bmMoZmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGYuZnMuY2htb2RTeW5jKHBhdGgsIGF0dHIgfHwgMG82NjYpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuVXRpbHMucHJvdG90eXBlLndyaXRlRmlsZVRvQXN5bmMgPSBmdW5jdGlvbiAoLypTdHJpbmcqLyBwYXRoLCAvKkJ1ZmZlciovIGNvbnRlbnQsIC8qQm9vbGVhbiovIG92ZXJ3cml0ZSwgLypOdW1iZXIqLyBhdHRyLCAvKkZ1bmN0aW9uKi8gY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGF0dHIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IGF0dHI7XG4gICAgICAgIGF0dHIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLmZzLmV4aXN0cyhwYXRoLCBmdW5jdGlvbiAoZXhpc3QpIHtcbiAgICAgICAgaWYgKGV4aXN0ICYmICFvdmVyd3JpdGUpIHJldHVybiBjYWxsYmFjayhmYWxzZSk7XG5cbiAgICAgICAgc2VsZi5mcy5zdGF0KHBhdGgsIGZ1bmN0aW9uIChlcnIsIHN0YXQpIHtcbiAgICAgICAgICAgIGlmIChleGlzdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZm9sZGVyID0gcHRoLmRpcm5hbWUocGF0aCk7XG4gICAgICAgICAgICBzZWxmLmZzLmV4aXN0cyhmb2xkZXIsIGZ1bmN0aW9uIChleGlzdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykgc2VsZi5tYWtlRGlyKGZvbGRlcik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmZzLm9wZW4ocGF0aCwgXCJ3XCIsIDBvNjY2LCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNobW9kKHBhdGgsIDBvNjY2LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5vcGVuKHBhdGgsIFwid1wiLCAwbzY2NiwgZnVuY3Rpb24gKGVyciwgZmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy53cml0ZShmZCwgY29udGVudCwgMCwgY29udGVudC5sZW5ndGgsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2xvc2UoZmQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNobW9kKHBhdGgsIGF0dHIgfHwgMG82NjYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy53cml0ZShmZCwgY29udGVudCwgMCwgY29udGVudC5sZW5ndGgsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNsb3NlKGZkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2htb2QocGF0aCwgYXR0ciB8fCAwbzY2NiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLmNobW9kKHBhdGgsIGF0dHIgfHwgMG82NjYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5VdGlscy5wcm90b3R5cGUuZmluZEZpbGVzID0gZnVuY3Rpb24gKC8qU3RyaW5nKi8gcGF0aCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZmluZFN5bmMoLypTdHJpbmcqLyBkaXIsIC8qUmVnRXhwKi8gcGF0dGVybiwgLypCb29sZWFuKi8gcmVjdXJzaXZlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZSA9IHBhdHRlcm47XG4gICAgICAgICAgICBwYXR0ZXJuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxlcyA9IFtdO1xuICAgICAgICBzZWxmLmZzLnJlYWRkaXJTeW5jKGRpcikuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHB0aC5qb2luKGRpciwgZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ID0gc2VsZi5mcy5zdGF0U3luYyhwYXRoKTtcblxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuIHx8IHBhdHRlcm4udGVzdChwYXRoKSkge1xuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2gocHRoLm5vcm1hbGl6ZShwYXRoKSArIChzdGF0LmlzRGlyZWN0b3J5KCkgPyBzZWxmLnNlcCA6IFwiXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSAmJiByZWN1cnNpdmUpIGZpbGVzID0gZmlsZXMuY29uY2F0KGZpbmRTeW5jKHBhdGgsIHBhdHRlcm4sIHJlY3Vyc2l2ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kU3luYyhwYXRoLCB1bmRlZmluZWQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBDYWxsYmFjayBmb3Igc2hvd2luZyBpZiBldmVyeXRoaW5nIHdhcyBkb25lLlxuICpcbiAqIEBjYWxsYmFjayBmaWxlbGlzdENhbGxiYWNrXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBFcnJvciBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nW119IGxpc3QgLSB3YXMgcmVxdWVzdCBmdWxseSBjb21wbGV0ZWRcbiAqL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyXG4gKiBAcGFyYW0ge2ZpbGVsaXN0Q2FsbGJhY2t9IGNiXG4gKi9cblV0aWxzLnByb3RvdHlwZS5maW5kRmlsZXNBc3luYyA9IGZ1bmN0aW9uIChkaXIsIGNiKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBzZWxmLmZzLnJlYWRkaXIoZGlyLCBmdW5jdGlvbiAoZXJyLCBsaXN0KSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICBsZXQgbGlzdF9sZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgaWYgKCFsaXN0X2xlbmd0aCkgcmV0dXJuIGNiKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGZpbGUgPSBwdGguam9pbihkaXIsIGZpbGUpO1xuICAgICAgICAgICAgc2VsZi5mcy5zdGF0KGZpbGUsIGZ1bmN0aW9uIChlcnIsIHN0YXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocHRoLm5vcm1hbGl6ZShmaWxlKSArIChzdGF0LmlzRGlyZWN0b3J5KCkgPyBzZWxmLnNlcCA6IFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maW5kRmlsZXNBc3luYyhmaWxlLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tbGlzdF9sZW5ndGgpIGNiKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tbGlzdF9sZW5ndGgpIGNiKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuVXRpbHMucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7fTtcblxuVXRpbHMucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gU1RBVElDIGZ1bmN0aW9uc1xuXG4vLyBjcmMzMiBzaW5nbGUgdXBkYXRlIChpdCBpcyBwYXJ0IG9mIGNyYzMyKVxuVXRpbHMuY3JjMzJ1cGRhdGUgPSBmdW5jdGlvbiAoY3JjLCBieXRlKSB7XG4gICAgcmV0dXJuIGNyY1RhYmxlWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOCk7XG59O1xuXG5VdGlscy5jcmMzMiA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBidWYgPSBCdWZmZXIuZnJvbShidWYsIFwidXRmOFwiKTtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYnVmLmxlbmd0aDtcbiAgICBsZXQgY3JjID0gfjA7XG4gICAgZm9yIChsZXQgb2ZmID0gMDsgb2ZmIDwgbGVuOyApIGNyYyA9IFV0aWxzLmNyYzMydXBkYXRlKGNyYywgYnVmW29mZisrXSk7XG4gICAgLy8geG9yIGFuZCBjYXN0IGFzIHVpbnQzMiBudW1iZXJcbiAgICByZXR1cm4gfmNyYyA+Pj4gMDtcbn07XG5cblV0aWxzLm1ldGhvZFRvU3RyaW5nID0gZnVuY3Rpb24gKC8qTnVtYmVyKi8gbWV0aG9kKSB7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuU1RPUkVEOlxuICAgICAgICAgICAgcmV0dXJuIFwiU1RPUkVEIChcIiArIG1ldGhvZCArIFwiKVwiO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ERUZMQVRFRDpcbiAgICAgICAgICAgIHJldHVybiBcIkRFRkxBVEVEIChcIiArIG1ldGhvZCArIFwiKVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiVU5TVVBQT1JURUQgKFwiICsgbWV0aG9kICsgXCIpXCI7XG4gICAgfVxufTtcblxuLyoqXG4gKiByZW1vdmVzIFwiLi5cIiBzdHlsZSBwYXRoIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGZpeGFibGUgcGF0aFxuICogQHJldHVybnMgc3RyaW5nIC0gZml4ZWQgZmlsZXBhdGhcbiAqL1xuVXRpbHMuY2Fub25pY2FsID0gZnVuY3Rpb24gKC8qc3RyaW5nKi8gcGF0aCkge1xuICAgIGlmICghcGF0aCkgcmV0dXJuIFwiXCI7XG4gICAgLy8gdHJpY2sgbm9ybWFsaXplIHRoaW5rIHBhdGggaXMgYWJzb2x1dGVcbiAgICBjb25zdCBzYWZlU3VmZml4ID0gcHRoLnBvc2l4Lm5vcm1hbGl6ZShcIi9cIiArIHBhdGguc3BsaXQoXCJcXFxcXCIpLmpvaW4oXCIvXCIpKTtcbiAgICByZXR1cm4gcHRoLmpvaW4oXCIuXCIsIHNhZmVTdWZmaXgpO1xufTtcblxuLyoqXG4gKiBmaXggZmlsZSBuYW1lcyBpbiBhY2hpdmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gZml4YWJsZSBwYXRoXG4gKiBAcmV0dXJucyBzdHJpbmcgLSBmaXhlZCBmaWxlcGF0aFxuICovXG5cblV0aWxzLnppcG5hbWVmaXggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmICghcGF0aCkgcmV0dXJuIFwiXCI7XG4gICAgLy8gdHJpY2sgbm9ybWFsaXplIHRoaW5rIHBhdGggaXMgYWJzb2x1dGVcbiAgICBjb25zdCBzYWZlU3VmZml4ID0gcHRoLnBvc2l4Lm5vcm1hbGl6ZShcIi9cIiArIHBhdGguc3BsaXQoXCJcXFxcXCIpLmpvaW4oXCIvXCIpKTtcbiAgICByZXR1cm4gcHRoLnBvc2l4LmpvaW4oXCIuXCIsIHNhZmVTdWZmaXgpO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnNcbiAqL1xuVXRpbHMuZmluZExhc3QgPSBmdW5jdGlvbiAoYXJyLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXJyIGlzIG5vdCBhcnJheVwiKTtcblxuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGggPj4+IDA7XG4gICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayhhcnJbaV0sIGksIGFycikpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIG1ha2UgYWJvbHV0ZSBwYXRocyB0YWtpbmcgcHJlZml4IGFzIHJvb3QgZm9sZGVyXG5VdGlscy5zYW5pdGl6ZSA9IGZ1bmN0aW9uICgvKnN0cmluZyovIHByZWZpeCwgLypzdHJpbmcqLyBuYW1lKSB7XG4gICAgcHJlZml4ID0gcHRoLnJlc29sdmUocHRoLm5vcm1hbGl6ZShwcmVmaXgpKTtcbiAgICB2YXIgcGFydHMgPSBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGF0aCA9IHB0aC5ub3JtYWxpemUocHRoLmpvaW4ocHJlZml4LCBwYXJ0cy5zbGljZShpLCBsKS5qb2luKHB0aC5zZXApKSk7XG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHB0aC5ub3JtYWxpemUocHRoLmpvaW4ocHJlZml4LCBwdGguYmFzZW5hbWUobmFtZSkpKTtcbn07XG5cbi8vIGNvbnZlcnRzIGJ1ZmZlciwgVWludDhBcnJheSwgc3RyaW5nIHR5cGVzIHRvIGJ1ZmZlclxuVXRpbHMudG9CdWZmZXIgPSBmdW5jdGlvbiB0b0J1ZmZlcigvKmJ1ZmZlciwgVWludDhBcnJheSwgc3RyaW5nKi8gaW5wdXQsIC8qIGZ1bmN0aW9uICovIGVuY29kZXIpIHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBleHBlY3Qgc3RyaW5nIGFsbCBvdGhlciB2YWx1ZXMgYXJlIGludmFsaWQgYW5kIHJldHVybiBlbXB0eSBidWZmZXJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIiA/IGVuY29kZXIoaW5wdXQpIDogQnVmZmVyLmFsbG9jKDApO1xuICAgIH1cbn07XG5cblV0aWxzLnJlYWRCaWdVSW50NjRMRSA9IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGJ1ZmZlciwgLyppbnQqLyBpbmRleCkge1xuICAgIHZhciBzbGljZSA9IEJ1ZmZlci5mcm9tKGJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA4KSk7XG4gICAgc2xpY2Uuc3dhcDY0KCk7XG5cbiAgICByZXR1cm4gcGFyc2VJbnQoYDB4JHtzbGljZS50b1N0cmluZyhcImhleFwiKX1gKTtcbn07XG5cblV0aWxzLmZyb21ET1MyRGF0ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKCh2YWwgPj4gMjUpICYgMHg3ZikgKyAxOTgwLCBNYXRoLm1heCgoKHZhbCA+PiAyMSkgJiAweDBmKSAtIDEsIDApLCBNYXRoLm1heCgodmFsID4+IDE2KSAmIDB4MWYsIDEpLCAodmFsID4+IDExKSAmIDB4MWYsICh2YWwgPj4gNSkgJiAweDNmLCAodmFsICYgMHgxZikgPDwgMSk7XG59O1xuXG5VdGlscy5mcm9tRGF0ZTJET1MgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgbGV0IGRhdGUgPSAwO1xuICAgIGxldCB0aW1lID0gMDtcbiAgICBpZiAodmFsLmdldEZ1bGxZZWFyKCkgPiAxOTc5KSB7XG4gICAgICAgIGRhdGUgPSAoKCh2YWwuZ2V0RnVsbFllYXIoKSAtIDE5ODApICYgMHg3ZikgPDwgOSkgfCAoKHZhbC5nZXRNb250aCgpICsgMSkgPDwgNSkgfCB2YWwuZ2V0RGF0ZSgpO1xuICAgICAgICB0aW1lID0gKHZhbC5nZXRIb3VycygpIDw8IDExKSB8ICh2YWwuZ2V0TWludXRlcygpIDw8IDUpIHwgKHZhbC5nZXRTZWNvbmRzKCkgPj4gMSk7XG4gICAgfVxuICAgIHJldHVybiAoZGF0ZSA8PCAxNikgfCB0aW1lO1xufTtcblxuVXRpbHMuaXNXaW4gPSBpc1dpbjsgLy8gRG8gd2UgaGF2ZSB3aW5kb3dzIHN5c3RlbVxuVXRpbHMuY3JjVGFibGUgPSBjcmNUYWJsZTtcbiIsICJjb25zdCBwdGggPSByZXF1aXJlKFwicGF0aFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLypTdHJpbmcqLyBwYXRoLCAvKlV0aWxzIG9iamVjdCovIHsgZnMgfSkge1xuICAgIHZhciBfcGF0aCA9IHBhdGggfHwgXCJcIixcbiAgICAgICAgX29iaiA9IG5ld0F0dHIoKSxcbiAgICAgICAgX3N0YXQgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gbmV3QXR0cigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeTogZmFsc2UsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgZXhlY3V0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBtdGltZTogMCxcbiAgICAgICAgICAgIGF0aW1lOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKF9wYXRoICYmIGZzLmV4aXN0c1N5bmMoX3BhdGgpKSB7XG4gICAgICAgIF9zdGF0ID0gZnMuc3RhdFN5bmMoX3BhdGgpO1xuICAgICAgICBfb2JqLmRpcmVjdG9yeSA9IF9zdGF0LmlzRGlyZWN0b3J5KCk7XG4gICAgICAgIF9vYmoubXRpbWUgPSBfc3RhdC5tdGltZTtcbiAgICAgICAgX29iai5hdGltZSA9IF9zdGF0LmF0aW1lO1xuICAgICAgICBfb2JqLmV4ZWN1dGFibGUgPSAoMG8xMTEgJiBfc3RhdC5tb2RlKSAhPT0gMDsgLy8gZmlsZSBpcyBleGVjdXRhYmxlIHdobyBldmVyIGhhciByaWdodCBub3QganVzdCBvd25lclxuICAgICAgICBfb2JqLnJlYWRvbmx5ID0gKDBvMjAwICYgX3N0YXQubW9kZSkgPT09IDA7IC8vIHJlYWRvbmx5IGlmIG93bmVyIGhhcyBubyB3cml0ZSByaWdodFxuICAgICAgICBfb2JqLmhpZGRlbiA9IHB0aC5iYXNlbmFtZShfcGF0aClbMF0gPT09IFwiLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgcGF0aDogXCIgKyBfcGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGRpcmVjdG9yeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLmRpcmVjdG9yeTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcmVhZE9ubHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5yZWFkb25seTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgaGlkZGVuKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmouaGlkZGVuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBtdGltZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLm10aW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBhdGltZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLmF0aW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBleGVjdXRhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmouZXhlY3V0YWJsZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWNvZGVBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoKSB7fSxcblxuICAgICAgICBlbmNvZGVBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoKSB7fSxcblxuICAgICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgICAgICAgICAgaXNEaXJlY3Rvcnk6IF9vYmouZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIGlzUmVhZE9ubHk6IF9vYmoucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgaXNIaWRkZW46IF9vYmouaGlkZGVuLFxuICAgICAgICAgICAgICAgIGlzRXhlY3V0YWJsZTogX29iai5leGVjdXRhYmxlLFxuICAgICAgICAgICAgICAgIG1UaW1lOiBfb2JqLm10aW1lLFxuICAgICAgICAgICAgICAgIGFUaW1lOiBfb2JqLmF0aW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSwgbnVsbCwgXCJcXHRcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlZnM6IHRydWUsXG4gICAgZW5jb2RlOiAoZGF0YSkgPT4gQnVmZmVyLmZyb20oZGF0YSwgXCJ1dGY4XCIpLFxuICAgIGRlY29kZTogKGRhdGEpID0+IGRhdGEudG9TdHJpbmcoXCJ1dGY4XCIpXG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5tb2R1bGUuZXhwb3J0cy5Db25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5tb2R1bGUuZXhwb3J0cy5FcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5tb2R1bGUuZXhwb3J0cy5GaWxlQXR0ciA9IHJlcXVpcmUoXCIuL2ZhdHRyXCIpO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlciA9IHJlcXVpcmUoXCIuL2RlY29kZXJcIik7XG4iLCAidmFyIFV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxcIiksXG4gICAgQ29uc3RhbnRzID0gVXRpbHMuQ29uc3RhbnRzO1xuXG4vKiBUaGUgY2VudHJhbCBkaXJlY3RvcnkgZmlsZSBoZWFkZXIgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdmVyTWFkZSA9IDIwLCAvLyB2Mi4wXG4gICAgICAgIF92ZXJzaW9uID0gMTAsIC8vIHYxLjBcbiAgICAgICAgX2ZsYWdzID0gMCxcbiAgICAgICAgX21ldGhvZCA9IDAsXG4gICAgICAgIF90aW1lID0gMCxcbiAgICAgICAgX2NyYyA9IDAsXG4gICAgICAgIF9jb21wcmVzc2VkU2l6ZSA9IDAsXG4gICAgICAgIF9zaXplID0gMCxcbiAgICAgICAgX2ZuYW1lTGVuID0gMCxcbiAgICAgICAgX2V4dHJhTGVuID0gMCxcbiAgICAgICAgX2NvbUxlbiA9IDAsXG4gICAgICAgIF9kaXNrU3RhcnQgPSAwLFxuICAgICAgICBfaW5hdHRyID0gMCxcbiAgICAgICAgX2F0dHIgPSAwLFxuICAgICAgICBfb2Zmc2V0ID0gMDtcblxuICAgIF92ZXJNYWRlIHw9IFV0aWxzLmlzV2luID8gMHgwYTAwIDogMHgwMzAwO1xuXG4gICAgLy8gU2V0IEVGUyBmbGFnIHNpbmNlIGZpbGVuYW1lIGFuZCBjb21tZW50IGZpZWxkcyBhcmUgYWxsIGJ5IGRlZmF1bHQgZW5jb2RlZCB1c2luZyBVVEYtOC5cbiAgICAvLyBXaXRob3V0IGl0IGZpbGUgbmFtZXMgbWF5IGJlIGNvcnJ1cHRlZCBmb3Igb3RoZXIgYXBwcyB3aGVuIGZpbGUgbmFtZXMgdXNlIHVuaWNvZGUgY2hhcnNcbiAgICBfZmxhZ3MgfD0gQ29uc3RhbnRzLkZMR19FRlM7XG5cbiAgICBjb25zdCBfbG9jYWxIZWFkZXIgPSB7XG4gICAgICAgIGV4dHJhTGVuOiAwXG4gICAgfTtcblxuICAgIC8vIGNhc3RpbmdcbiAgICBjb25zdCB1aW50MzIgPSAodmFsKSA9PiBNYXRoLm1heCgwLCB2YWwpID4+PiAwO1xuICAgIGNvbnN0IHVpbnQxNiA9ICh2YWwpID0+IE1hdGgubWF4KDAsIHZhbCkgJiAweGZmZmY7XG4gICAgY29uc3QgdWludDggPSAodmFsKSA9PiBNYXRoLm1heCgwLCB2YWwpICYgMHhmZjtcblxuICAgIF90aW1lID0gVXRpbHMuZnJvbURhdGUyRE9TKG5ldyBEYXRlKCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG1hZGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3Zlck1hZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBtYWRlKHZhbCkge1xuICAgICAgICAgICAgX3Zlck1hZGUgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHZlcnNpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZlcnNpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB2ZXJzaW9uKHZhbCkge1xuICAgICAgICAgICAgX3ZlcnNpb24gPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGZsYWdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9mbGFncztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGZsYWdzKHZhbCkge1xuICAgICAgICAgICAgX2ZsYWdzID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBmbGFnc19lZnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9mbGFncyAmIENvbnN0YW50cy5GTEdfRUZTKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBmbGFnc19lZnModmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgX2ZsYWdzIHw9IENvbnN0YW50cy5GTEdfRUZTO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfZmxhZ3MgJj0gfkNvbnN0YW50cy5GTEdfRUZTO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBmbGFnc19kZXNjKCkge1xuICAgICAgICAgICAgcmV0dXJuIChfZmxhZ3MgJiBDb25zdGFudHMuRkxHX0RFU0MpID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGZsYWdzX2Rlc2ModmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgX2ZsYWdzIHw9IENvbnN0YW50cy5GTEdfREVTQztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2ZsYWdzICY9IH5Db25zdGFudHMuRkxHX0RFU0M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG1ldGhvZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbWV0aG9kO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbWV0aG9kKHZhbCkge1xuICAgICAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0YW50cy5TVE9SRUQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDEwO1xuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RhbnRzLkRFRkxBVEVEOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21ldGhvZCA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5mcm9tRE9TMkRhdGUodGhpcy50aW1ldmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHRpbWUodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWV2YWwgPSBVdGlscy5mcm9tRGF0ZTJET1ModmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdGltZXZhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHRpbWV2YWwodmFsKSB7XG4gICAgICAgICAgICBfdGltZSA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0aW1lSGlnaEJ5dGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdWludDgoX3RpbWUgPj4+IDgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgY3JjKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jcmM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjcmModmFsKSB7XG4gICAgICAgICAgICBfY3JjID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNvbXByZXNzZWRTaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb21wcmVzc2VkU2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNvbXByZXNzZWRTaXplKHZhbCkge1xuICAgICAgICAgICAgX2NvbXByZXNzZWRTaXplID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBzaXplKHZhbCkge1xuICAgICAgICAgICAgX3NpemUgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZmlsZU5hbWVMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZuYW1lTGVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZmlsZU5hbWVMZW5ndGgodmFsKSB7XG4gICAgICAgICAgICBfZm5hbWVMZW4gPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGV4dHJhTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRyYUxlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGV4dHJhTGVuZ3RoKHZhbCkge1xuICAgICAgICAgICAgX2V4dHJhTGVuID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBleHRyYUxvY2FsTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9sb2NhbEhlYWRlci5leHRyYUxlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGV4dHJhTG9jYWxMZW5ndGgodmFsKSB7XG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuZXh0cmFMZW4gPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNvbW1lbnRMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbUxlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNvbW1lbnRMZW5ndGgodmFsKSB7XG4gICAgICAgICAgICBfY29tTGVuID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBkaXNrTnVtU3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2Rpc2tTdGFydDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGRpc2tOdW1TdGFydCh2YWwpIHtcbiAgICAgICAgICAgIF9kaXNrU3RhcnQgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgaW5BdHRyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pbmF0dHI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBpbkF0dHIodmFsKSB7XG4gICAgICAgICAgICBfaW5hdHRyID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGF0dHIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2F0dHI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBhdHRyKHZhbCkge1xuICAgICAgICAgICAgX2F0dHIgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBnZXQgVW5peCBmaWxlIHBlcm1pc3Npb25zXG4gICAgICAgIGdldCBmaWxlQXR0cigpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2F0dHIgfHwgMCkgPj4gMTYgJiAweGZmZjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvZmZzZXQodmFsKSB7XG4gICAgICAgICAgICBfb2Zmc2V0ID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGVuY3J5cHRlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2ZsYWdzICYgQ29uc3RhbnRzLkZMR19FTkMpID09PSBDb25zdGFudHMuRkxHX0VOQztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY2VudHJhbEhlYWRlclNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLkNFTkhEUiArIF9mbmFtZUxlbiArIF9leHRyYUxlbiArIF9jb21MZW47XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHJlYWxEYXRhT2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vZmZzZXQgKyBDb25zdGFudHMuTE9DSERSICsgX2xvY2FsSGVhZGVyLmZuYW1lTGVuICsgX2xvY2FsSGVhZGVyLmV4dHJhTGVuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBsb2NhbEhlYWRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfbG9jYWxIZWFkZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZExvY2FsSGVhZGVyRnJvbUJpbmFyeTogZnVuY3Rpb24gKC8qQnVmZmVyKi8gaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gaW5wdXQuc2xpY2UoX29mZnNldCwgX29mZnNldCArIENvbnN0YW50cy5MT0NIRFIpO1xuICAgICAgICAgICAgLy8gMzAgYnl0ZXMgYW5kIHNob3VsZCBzdGFydCB3aXRoIFwiUEtcXDAwM1xcMDA0XCJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlYWRVSW50MzJMRSgwKSAhPT0gQ29uc3RhbnRzLkxPQ1NJRykge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX0xPQygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIudmVyc2lvbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5MT0NWRVIpO1xuICAgICAgICAgICAgLy8gZ2VuZXJhbCBwdXJwb3NlIGJpdCBmbGFnXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuZmxhZ3MgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuTE9DRkxHKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLm1ldGhvZCA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5MT0NIT1cpO1xuICAgICAgICAgICAgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLnRpbWUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuTE9DVElNKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1XG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuY3JjID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkxPQ0NSQyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5MT0NTSVopO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5zaXplID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkxPQ0xFTik7XG4gICAgICAgICAgICAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5mbmFtZUxlbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5MT0NOQU0pO1xuICAgICAgICAgICAgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIuZXh0cmFMZW4gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuTE9DRVhUKTtcblxuICAgICAgICAgICAgLy8gcmVhZCBleHRyYSBkYXRhXG4gICAgICAgICAgICBjb25zdCBleHRyYVN0YXJ0ID0gX29mZnNldCArIENvbnN0YW50cy5MT0NIRFIgKyBfbG9jYWxIZWFkZXIuZm5hbWVMZW47XG4gICAgICAgICAgICBjb25zdCBleHRyYUVuZCA9IGV4dHJhU3RhcnQgKyBfbG9jYWxIZWFkZXIuZXh0cmFMZW47XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2UoZXh0cmFTdGFydCwgZXh0cmFFbmQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRGcm9tQmluYXJ5OiBmdW5jdGlvbiAoLypCdWZmZXIqLyBkYXRhKSB7XG4gICAgICAgICAgICAvLyBkYXRhIHNob3VsZCBiZSA0NiBieXRlcyBhbmQgc3RhcnQgd2l0aCBcIlBLIDAxIDAyXCJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gQ29uc3RhbnRzLkNFTkhEUiB8fCBkYXRhLnJlYWRVSW50MzJMRSgwKSAhPT0gQ29uc3RhbnRzLkNFTlNJRykge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX0NFTigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyc2lvbiBtYWRlIGJ5XG4gICAgICAgICAgICBfdmVyTWFkZSA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5WRU0pO1xuICAgICAgICAgICAgLy8gdmVyc2lvbiBuZWVkZWQgdG8gZXh0cmFjdFxuICAgICAgICAgICAgX3ZlcnNpb24gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOVkVSKTtcbiAgICAgICAgICAgIC8vIGVuY3J5cHQsIGRlY3J5cHQgZmxhZ3NcbiAgICAgICAgICAgIF9mbGFncyA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5GTEcpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgICAgICAgICBfbWV0aG9kID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkhPVyk7XG4gICAgICAgICAgICAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgICAgICAgICBfdGltZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5USU0pO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgICAgICAgICBfY3JjID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTkNSQyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIF9jb21wcmVzc2VkU2l6ZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5TSVopO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIF9zaXplID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTkxFTik7XG4gICAgICAgICAgICAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICAgICAgICAgIF9mbmFtZUxlbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5OQU0pO1xuICAgICAgICAgICAgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG4gICAgICAgICAgICBfZXh0cmFMZW4gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VORVhUKTtcbiAgICAgICAgICAgIC8vIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgIF9jb21MZW4gPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOQ09NKTtcbiAgICAgICAgICAgIC8vIHZvbHVtZSBudW1iZXIgc3RhcnRcbiAgICAgICAgICAgIF9kaXNrU3RhcnQgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VORFNLKTtcbiAgICAgICAgICAgIC8vIGludGVybmFsIGZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgX2luYXR0ciA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5BVFQpO1xuICAgICAgICAgICAgLy8gZXh0ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBfYXR0ciA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5BVFgpO1xuICAgICAgICAgICAgLy8gTE9DIGhlYWRlciBvZmZzZXRcbiAgICAgICAgICAgIF9vZmZzZXQgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOT0ZGKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2NhbEhlYWRlclRvQmluYXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBMT0MgaGVhZGVyIHNpemUgKDMwIGJ5dGVzKVxuICAgICAgICAgICAgdmFyIGRhdGEgPSBCdWZmZXIuYWxsb2MoQ29uc3RhbnRzLkxPQ0hEUik7XG4gICAgICAgICAgICAvLyBcIlBLXFwwMDNcXDAwNFwiXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoQ29uc3RhbnRzLkxPQ1NJRywgMCk7XG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX3ZlcnNpb24sIENvbnN0YW50cy5MT0NWRVIpO1xuICAgICAgICAgICAgLy8gZ2VuZXJhbCBwdXJwb3NlIGJpdCBmbGFnXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2ZsYWdzLCBDb25zdGFudHMuTE9DRkxHKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9tZXRob2QsIENvbnN0YW50cy5MT0NIT1cpO1xuICAgICAgICAgICAgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF90aW1lLCBDb25zdGFudHMuTE9DVElNKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9jcmMsIENvbnN0YW50cy5MT0NDUkMpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX2NvbXByZXNzZWRTaXplLCBDb25zdGFudHMuTE9DU0laKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX3NpemUsIENvbnN0YW50cy5MT0NMRU4pO1xuICAgICAgICAgICAgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2ZuYW1lTGVuLCBDb25zdGFudHMuTE9DTkFNKTtcbiAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9sb2NhbEhlYWRlci5leHRyYUxlbiwgQ29uc3RhbnRzLkxPQ0VYVCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcblxuICAgICAgICBjZW50cmFsSGVhZGVyVG9CaW5hcnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENFTiBoZWFkZXIgc2l6ZSAoNDYgYnl0ZXMpXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEJ1ZmZlci5hbGxvYyhDb25zdGFudHMuQ0VOSERSICsgX2ZuYW1lTGVuICsgX2V4dHJhTGVuICsgX2NvbUxlbik7XG4gICAgICAgICAgICAvLyBcIlBLXFwwMDFcXDAwMlwiXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoQ29uc3RhbnRzLkNFTlNJRywgMCk7XG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG1hZGUgYnlcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfdmVyTWFkZSwgQ29uc3RhbnRzLkNFTlZFTSk7XG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX3ZlcnNpb24sIENvbnN0YW50cy5DRU5WRVIpO1xuICAgICAgICAgICAgLy8gZW5jcnlwdCwgZGVjcnlwdCBmbGFnc1xuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9mbGFncywgQ29uc3RhbnRzLkNFTkZMRyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfbWV0aG9kLCBDb25zdGFudHMuQ0VOSE9XKTtcbiAgICAgICAgICAgIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfdGltZSwgQ29uc3RhbnRzLkNFTlRJTSk7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfY3JjLCBDb25zdGFudHMuQ0VOQ1JDKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9jb21wcmVzc2VkU2l6ZSwgQ29uc3RhbnRzLkNFTlNJWik7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9zaXplLCBDb25zdGFudHMuQ0VOTEVOKTtcbiAgICAgICAgICAgIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9mbmFtZUxlbiwgQ29uc3RhbnRzLkNFTk5BTSk7XG4gICAgICAgICAgICAvLyBleHRyYSBmaWVsZCBsZW5ndGhcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZXh0cmFMZW4sIENvbnN0YW50cy5DRU5FWFQpO1xuICAgICAgICAgICAgLy8gZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9jb21MZW4sIENvbnN0YW50cy5DRU5DT00pO1xuICAgICAgICAgICAgLy8gdm9sdW1lIG51bWJlciBzdGFydFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9kaXNrU3RhcnQsIENvbnN0YW50cy5DRU5EU0spO1xuICAgICAgICAgICAgLy8gaW50ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2luYXR0ciwgQ29uc3RhbnRzLkNFTkFUVCk7XG4gICAgICAgICAgICAvLyBleHRlcm5hbCBmaWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfYXR0ciwgQ29uc3RhbnRzLkNFTkFUWCk7XG4gICAgICAgICAgICAvLyBMT0MgaGVhZGVyIG9mZnNldFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9vZmZzZXQsIENvbnN0YW50cy5DRU5PRkYpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGZ1bmN0aW9uIChucikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuciArIFwiIGJ5dGVzXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hZGU6IF92ZXJNYWRlLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IF92ZXJzaW9uLFxuICAgICAgICAgICAgICAgIGZsYWdzOiBfZmxhZ3MsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBVdGlscy5tZXRob2RUb1N0cmluZyhfbWV0aG9kKSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgICAgICAgY3JjOiBcIjB4XCIgKyBfY3JjLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIGNvbXByZXNzZWRTaXplOiBieXRlcyhfY29tcHJlc3NlZFNpemUpLFxuICAgICAgICAgICAgICAgIHNpemU6IGJ5dGVzKF9zaXplKSxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZUxlbmd0aDogYnl0ZXMoX2ZuYW1lTGVuKSxcbiAgICAgICAgICAgICAgICBleHRyYUxlbmd0aDogYnl0ZXMoX2V4dHJhTGVuKSxcbiAgICAgICAgICAgICAgICBjb21tZW50TGVuZ3RoOiBieXRlcyhfY29tTGVuKSxcbiAgICAgICAgICAgICAgICBkaXNrTnVtU3RhcnQ6IF9kaXNrU3RhcnQsXG4gICAgICAgICAgICAgICAgaW5BdHRyOiBfaW5hdHRyLFxuICAgICAgICAgICAgICAgIGF0dHI6IF9hdHRyLFxuICAgICAgICAgICAgICAgIG9mZnNldDogX29mZnNldCxcbiAgICAgICAgICAgICAgICBjZW50cmFsSGVhZGVyU2l6ZTogYnl0ZXMoQ29uc3RhbnRzLkNFTkhEUiArIF9mbmFtZUxlbiArIF9leHRyYUxlbiArIF9jb21MZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSwgbnVsbCwgXCJcXHRcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJ2YXIgVXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbFwiKSxcbiAgICBDb25zdGFudHMgPSBVdGlscy5Db25zdGFudHM7XG5cbi8qIFRoZSBlbnRyaWVzIGluIHRoZSBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm9sdW1lRW50cmllcyA9IDAsXG4gICAgICAgIF90b3RhbEVudHJpZXMgPSAwLFxuICAgICAgICBfc2l6ZSA9IDAsXG4gICAgICAgIF9vZmZzZXQgPSAwLFxuICAgICAgICBfY29tbWVudExlbmd0aCA9IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgZGlza0VudHJpZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZvbHVtZUVudHJpZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBkaXNrRW50cmllcygvKk51bWJlciovIHZhbCkge1xuICAgICAgICAgICAgX3ZvbHVtZUVudHJpZXMgPSBfdG90YWxFbnRyaWVzID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0b3RhbEVudHJpZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RvdGFsRW50cmllcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHRvdGFsRW50cmllcygvKk51bWJlciovIHZhbCkge1xuICAgICAgICAgICAgX3RvdGFsRW50cmllcyA9IF92b2x1bWVFbnRyaWVzID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgc2l6ZSgvKk51bWJlciovIHZhbCkge1xuICAgICAgICAgICAgX3NpemUgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb2Zmc2V0KC8qTnVtYmVyKi8gdmFsKSB7XG4gICAgICAgICAgICBfb2Zmc2V0ID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjb21tZW50TGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb21tZW50TGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY29tbWVudExlbmd0aCgvKk51bWJlciovIHZhbCkge1xuICAgICAgICAgICAgX2NvbW1lbnRMZW5ndGggPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG1haW5IZWFkZXJTaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5FTkRIRFIgKyBfY29tbWVudExlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkRnJvbUJpbmFyeTogZnVuY3Rpb24gKC8qQnVmZmVyKi8gZGF0YSkge1xuICAgICAgICAgICAgLy8gZGF0YSBzaG91bGQgYmUgMjIgYnl0ZXMgYW5kIHN0YXJ0IHdpdGggXCJQSyAwNSAwNlwiXG4gICAgICAgICAgICAvLyBvciBiZSA1NisgYnl0ZXMgYW5kIHN0YXJ0IHdpdGggXCJQSyAwNiAwNlwiIGZvciBaaXA2NFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChkYXRhLmxlbmd0aCAhPT0gQ29uc3RhbnRzLkVOREhEUiB8fCBkYXRhLnJlYWRVSW50MzJMRSgwKSAhPT0gQ29uc3RhbnRzLkVORFNJRykgJiZcbiAgICAgICAgICAgICAgICAoZGF0YS5sZW5ndGggPCBDb25zdGFudHMuWklQNjRIRFIgfHwgZGF0YS5yZWFkVUludDMyTEUoMCkgIT09IENvbnN0YW50cy5aSVA2NFNJRylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX0VORCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWFkVUludDMyTEUoMCkgPT09IENvbnN0YW50cy5FTkRTSUcpIHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXIgb2YgZW50cmllcyBvbiB0aGlzIHZvbHVtZVxuICAgICAgICAgICAgICAgIF92b2x1bWVFbnRyaWVzID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkVORFNVQik7XG4gICAgICAgICAgICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICAgICAgICAgICAgICBfdG90YWxFbnRyaWVzID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkVORFRPVCk7XG4gICAgICAgICAgICAgICAgLy8gY2VudHJhbCBkaXJlY3Rvcnkgc2l6ZSBpbiBieXRlc1xuICAgICAgICAgICAgICAgIF9zaXplID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkVORFNJWik7XG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0IG9mIGZpcnN0IENFTiBoZWFkZXJcbiAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkVORE9GRik7XG4gICAgICAgICAgICAgICAgLy8gemlwIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgICAgICBfY29tbWVudExlbmd0aCA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5FTkRDT00pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXIgb2YgZW50cmllcyBvbiB0aGlzIHZvbHVtZVxuICAgICAgICAgICAgICAgIF92b2x1bWVFbnRyaWVzID0gVXRpbHMucmVhZEJpZ1VJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5aSVA2NFNVQik7XG4gICAgICAgICAgICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICAgICAgICAgICAgICBfdG90YWxFbnRyaWVzID0gVXRpbHMucmVhZEJpZ1VJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5aSVA2NFRPVCk7XG4gICAgICAgICAgICAgICAgLy8gY2VudHJhbCBkaXJlY3Rvcnkgc2l6ZSBpbiBieXRlc1xuICAgICAgICAgICAgICAgIF9zaXplID0gVXRpbHMucmVhZEJpZ1VJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5aSVA2NFNJWkUpO1xuICAgICAgICAgICAgICAgIC8vIG9mZnNldCBvZiBmaXJzdCBDRU4gaGVhZGVyXG4gICAgICAgICAgICAgICAgX29mZnNldCA9IFV0aWxzLnJlYWRCaWdVSW50NjRMRShkYXRhLCBDb25zdGFudHMuWklQNjRPRkYpO1xuXG4gICAgICAgICAgICAgICAgX2NvbW1lbnRMZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvQmluYXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYiA9IEJ1ZmZlci5hbGxvYyhDb25zdGFudHMuRU5ESERSICsgX2NvbW1lbnRMZW5ndGgpO1xuICAgICAgICAgICAgLy8gXCJQSyAwNSAwNlwiIHNpZ25hdHVyZVxuICAgICAgICAgICAgYi53cml0ZVVJbnQzMkxFKENvbnN0YW50cy5FTkRTSUcsIDApO1xuICAgICAgICAgICAgYi53cml0ZVVJbnQzMkxFKDAsIDQpO1xuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGVudHJpZXMgb24gdGhpcyB2b2x1bWVcbiAgICAgICAgICAgIGIud3JpdGVVSW50MTZMRShfdm9sdW1lRW50cmllcywgQ29uc3RhbnRzLkVORFNVQik7XG4gICAgICAgICAgICAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgICAgICAgICAgYi53cml0ZVVJbnQxNkxFKF90b3RhbEVudHJpZXMsIENvbnN0YW50cy5FTkRUT1QpO1xuICAgICAgICAgICAgLy8gY2VudHJhbCBkaXJlY3Rvcnkgc2l6ZSBpbiBieXRlc1xuICAgICAgICAgICAgYi53cml0ZVVJbnQzMkxFKF9zaXplLCBDb25zdGFudHMuRU5EU0laKTtcbiAgICAgICAgICAgIC8vIG9mZnNldCBvZiBmaXJzdCBDRU4gaGVhZGVyXG4gICAgICAgICAgICBiLndyaXRlVUludDMyTEUoX29mZnNldCwgQ29uc3RhbnRzLkVORE9GRik7XG4gICAgICAgICAgICAvLyB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgYi53cml0ZVVJbnQxNkxFKF9jb21tZW50TGVuZ3RoLCBDb25zdGFudHMuRU5EQ09NKTtcbiAgICAgICAgICAgIC8vIGZpbGwgY29tbWVudCBtZW1vcnkgd2l0aCBzcGFjZXMgc28gbm8gZ2FyYmFnZSBpcyBsZWZ0IHRoZXJlXG4gICAgICAgICAgICBiLmZpbGwoXCIgXCIsIENvbnN0YW50cy5FTkRIRFIpO1xuXG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZXMgMHgwMDAwIHN0eWxlIG91dHB1dFxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZnVuY3Rpb24gKG5yLCBsZW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgb2ZmcyA9IG5yLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvZmZzLmxlbmd0aCA8IGxlbikgb2ZmcyA9IFwiMFwiICsgb2ZmcztcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIweFwiICsgb2ZmcztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlza0VudHJpZXM6IF92b2x1bWVFbnRyaWVzLFxuICAgICAgICAgICAgICAgIHRvdGFsRW50cmllczogX3RvdGFsRW50cmllcyxcbiAgICAgICAgICAgICAgICBzaXplOiBfc2l6ZSArIFwiIGJ5dGVzXCIsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQoX29mZnNldCwgNCksXG4gICAgICAgICAgICAgICAgY29tbWVudExlbmd0aDogX2NvbW1lbnRMZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpLCBudWxsLCBcIlxcdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLy8gTWlzc3BlbGxlZFxuIiwgImV4cG9ydHMuRW50cnlIZWFkZXIgPSByZXF1aXJlKFwiLi9lbnRyeUhlYWRlclwiKTtcbmV4cG9ydHMuTWFpbkhlYWRlciA9IHJlcXVpcmUoXCIuL21haW5IZWFkZXJcIik7XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLypCdWZmZXIqLyBpbmJ1Zikge1xuICAgIHZhciB6bGliID0gcmVxdWlyZShcInpsaWJcIik7XG5cbiAgICB2YXIgb3B0cyA9IHsgY2h1bmtTaXplOiAocGFyc2VJbnQoaW5idWYubGVuZ3RoIC8gMTAyNCkgKyAxKSAqIDEwMjQgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlZmxhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6bGliLmRlZmxhdGVSYXdTeW5jKGluYnVmLCBvcHRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZsYXRlQXN5bmM6IGZ1bmN0aW9uICgvKkZ1bmN0aW9uKi8gY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSB6bGliLmNyZWF0ZURlZmxhdGVSYXcob3B0cyksXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA9IDA7XG4gICAgICAgICAgICB0bXAub24oXCJkYXRhXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG1wLm9uKFwiZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gQnVmZmVyLmFsbG9jKHRvdGFsKSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdHRlbiA9IDA7XG4gICAgICAgICAgICAgICAgYnVmLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LmNvcHkoYnVmLCB3cml0dGVuKTtcbiAgICAgICAgICAgICAgICAgICAgd3JpdHRlbiArPSBwYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soYnVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG1wLmVuZChpbmJ1Zik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJjb25zdCB2ZXJzaW9uID0gKyhwcm9jZXNzLnZlcnNpb25zID8gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlIDogXCJcIikuc3BsaXQoXCIuXCIpWzBdIHx8IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qQnVmZmVyKi8gaW5idWYsIC8qbnVtYmVyKi8gZXhwZWN0ZWRMZW5ndGgpIHtcbiAgICB2YXIgemxpYiA9IHJlcXVpcmUoXCJ6bGliXCIpO1xuICAgIGNvbnN0IG9wdGlvbiA9IHZlcnNpb24gPj0gMTUgJiYgZXhwZWN0ZWRMZW5ndGggPiAwID8geyBtYXhPdXRwdXRMZW5ndGg6IGV4cGVjdGVkTGVuZ3RoIH0gOiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluZmxhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6bGliLmluZmxhdGVSYXdTeW5jKGluYnVmLCBvcHRpb24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluZmxhdGVBc3luYzogZnVuY3Rpb24gKC8qRnVuY3Rpb24qLyBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHpsaWIuY3JlYXRlSW5mbGF0ZVJhdyhvcHRpb24pLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgdG90YWwgPSAwO1xuICAgICAgICAgICAgdG1wLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRtcC5vbihcImVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZiA9IEJ1ZmZlci5hbGxvYyh0b3RhbCksXG4gICAgICAgICAgICAgICAgICAgIHdyaXR0ZW4gPSAwO1xuICAgICAgICAgICAgICAgIGJ1Zi5maWxsKDApO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5jb3B5KGJ1Ziwgd3JpdHRlbik7XG4gICAgICAgICAgICAgICAgICAgIHdyaXR0ZW4gKz0gcGFydC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGJ1Zik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRtcC5lbmQoaW5idWYpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIG5vZGUgY3J5cHQsIHdlIHVzZSBpdCBmb3IgZ2VuZXJhdGUgc2FsdFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuY29uc3QgeyByYW5kb21GaWxsU3luYyB9ID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoXCIuLi91dGlsL2Vycm9yc1wiKTtcblxuLy8gZ2VuZXJhdGUgQ1JDMzIgbG9va3VwIHRhYmxlXG5jb25zdCBjcmN0YWJsZSA9IG5ldyBVaW50MzJBcnJheSgyNTYpLm1hcCgodCwgY3JjKSA9PiB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgaWYgKDAgIT09IChjcmMgJiAxKSkge1xuICAgICAgICAgICAgY3JjID0gKGNyYyA+Pj4gMSkgXiAweGVkYjg4MzIwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JjID4+Pj0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JjID4+PiAwO1xufSk7XG5cbi8vIEMtc3R5bGUgdUludDMyIE11bHRpcGx5IChkaXNjYXJkcyBoaWdoZXIgYml0cywgd2hlbiBKUyBtdWx0aXBseSBkaXNjYXJkcyBsb3dlciBiaXRzKVxuY29uc3QgdU11bCA9IChhLCBiKSA9PiBNYXRoLmltdWwoYSwgYikgPj4+IDA7XG5cbi8vIGNyYzMyIGJ5dGUgc2luZ2xlIHVwZGF0ZSAoYWN0dWFsbHkgc2FtZSBmdW5jdGlvbiBpcyBwYXJ0IG9mIHV0aWxzLmNyYzMyIGZ1bmN0aW9uIDopIClcbmNvbnN0IGNyYzMydXBkYXRlID0gKHBDcmMzMiwgYnZhbCkgPT4ge1xuICAgIHJldHVybiBjcmN0YWJsZVsocENyYzMyIF4gYnZhbCkgJiAweGZmXSBeIChwQ3JjMzIgPj4+IDgpO1xufTtcblxuLy8gZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgc2FsdCBmb3IgZW5jcnl0aW9uIGhlYWRlclxuY29uc3QgZ2VuU2FsdCA9ICgpID0+IHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmFuZG9tRmlsbFN5bmMpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUZpbGxTeW5jKEJ1ZmZlci5hbGxvYygxMikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIGlmIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgIHJldHVybiBnZW5TYWx0Lm5vZGUoKTtcbiAgICB9XG59O1xuXG4vLyBzYWx0IGdlbmVyYXRpb24gd2l0aCBub2RlIHJhbmRvbSBmdW5jdGlvbiAobWFpbmx5IGFzIGZhbGxiYWNrKVxuZ2VuU2FsdC5ub2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhbHQgPSBCdWZmZXIuYWxsb2MoMTIpO1xuICAgIGNvbnN0IGxlbiA9IHNhbHQubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHNhbHRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweGZmO1xuICAgIHJldHVybiBzYWx0O1xufTtcblxuLy8gZ2VuZXJhbCBjb25maWdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBnZW5TYWx0XG59O1xuXG4vLyBDbGFzcyBJbml0a2V5cyBoYW5kbGVzIHNhbWUgYmFzaWMgb3BzIHdpdGgga2V5c1xuZnVuY3Rpb24gSW5pdGtleXMocHcpIHtcbiAgICBjb25zdCBwYXNzID0gQnVmZmVyLmlzQnVmZmVyKHB3KSA/IHB3IDogQnVmZmVyLmZyb20ocHcpO1xuICAgIHRoaXMua2V5cyA9IG5ldyBVaW50MzJBcnJheShbMHgxMjM0NTY3OCwgMHgyMzQ1Njc4OSwgMHgzNDU2Nzg5MF0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnVwZGF0ZUtleXMocGFzc1tpXSk7XG4gICAgfVxufVxuXG5Jbml0a2V5cy5wcm90b3R5cGUudXBkYXRlS2V5cyA9IGZ1bmN0aW9uIChieXRlVmFsdWUpIHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzO1xuICAgIGtleXNbMF0gPSBjcmMzMnVwZGF0ZShrZXlzWzBdLCBieXRlVmFsdWUpO1xuICAgIGtleXNbMV0gKz0ga2V5c1swXSAmIDB4ZmY7XG4gICAga2V5c1sxXSA9IHVNdWwoa2V5c1sxXSwgMTM0Nzc1ODEzKSArIDE7XG4gICAga2V5c1syXSA9IGNyYzMydXBkYXRlKGtleXNbMl0sIGtleXNbMV0gPj4+IDI0KTtcbiAgICByZXR1cm4gYnl0ZVZhbHVlO1xufTtcblxuSW5pdGtleXMucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgayA9ICh0aGlzLmtleXNbMl0gfCAyKSA+Pj4gMDsgLy8ga2V5XG4gICAgcmV0dXJuICh1TXVsKGssIGsgXiAxKSA+PiA4KSAmIDB4ZmY7IC8vIGRlY29kZVxufTtcblxuZnVuY3Rpb24gbWFrZV9kZWNyeXB0ZXIoLypCdWZmZXIqLyBwd2QpIHtcbiAgICAvLyAxLiBTdGFnZSBpbml0aWFsaXplIGtleVxuICAgIGNvbnN0IGtleXMgPSBuZXcgSW5pdGtleXMocHdkKTtcblxuICAgIC8vIHJldHVybiBkZWNyeXB0ZXIgZnVuY3Rpb25cbiAgICByZXR1cm4gZnVuY3Rpb24gKC8qQnVmZmVyKi8gZGF0YSkge1xuICAgICAgICAvLyByZXN1bHQgLSB3ZSBjcmVhdGUgbmV3IEJ1ZmZlciBmb3IgcmVzdWx0c1xuICAgICAgICBjb25zdCByZXN1bHQgPSBCdWZmZXIuYWxsb2MoZGF0YS5sZW5ndGgpO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgLy8gcHJvY2VzcyBpbnB1dCBkYXRhXG4gICAgICAgIGZvciAobGV0IGMgb2YgZGF0YSkge1xuICAgICAgICAgICAgLy9jIF49IGtleXMubmV4dCgpO1xuICAgICAgICAgICAgLy9yZXN1bHRbcG9zKytdID0gYzsgLy8gZGVjb2RlICYgU2F2ZSBWYWx1ZVxuICAgICAgICAgICAgcmVzdWx0W3BvcysrXSA9IGtleXMudXBkYXRlS2V5cyhjIF4ga2V5cy5uZXh0KCkpOyAvLyB1cGRhdGUga2V5cyB3aXRoIGRlY29kZWQgYnl0ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV9lbmNyeXB0ZXIoLypCdWZmZXIqLyBwd2QpIHtcbiAgICAvLyAxLiBTdGFnZSBpbml0aWFsaXplIGtleVxuICAgIGNvbnN0IGtleXMgPSBuZXcgSW5pdGtleXMocHdkKTtcblxuICAgIC8vIHJldHVybiBlbmNyeXB0aW5nIGZ1bmN0aW9uLCByZXN1bHQgYW5kIHBvcyBpcyBoZXJlIHNvIHdlIGRvbnQgaGF2ZSB0byBtZXJnZSBidWZmZXJzIGxhdGVyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKkJ1ZmZlciovIGRhdGEsIC8qQnVmZmVyKi8gcmVzdWx0LCAvKiBOdW1iZXIgKi8gcG9zID0gMCkge1xuICAgICAgICAvLyByZXN1bHQgLSB3ZSBjcmVhdGUgbmV3IEJ1ZmZlciBmb3IgcmVzdWx0c1xuICAgICAgICBpZiAoIXJlc3VsdCkgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgLy8gcHJvY2VzcyBpbnB1dCBkYXRhXG4gICAgICAgIGZvciAobGV0IGMgb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXMubmV4dCgpOyAvLyBzYXZlIGtleSBieXRlXG4gICAgICAgICAgICByZXN1bHRbcG9zKytdID0gYyBeIGs7IC8vIHNhdmUgdmFsXG4gICAgICAgICAgICBrZXlzLnVwZGF0ZUtleXMoYyk7IC8vIHVwZGF0ZSBrZXlzIHdpdGggZGVjb2RlZCBieXRlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBkZWNyeXB0KC8qQnVmZmVyKi8gZGF0YSwgLypPYmplY3QqLyBoZWFkZXIsIC8qU3RyaW5nLCBCdWZmZXIqLyBwd2QpIHtcbiAgICBpZiAoIWRhdGEgfHwgIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSB8fCBkYXRhLmxlbmd0aCA8IDEyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgfVxuXG4gICAgLy8gMS4gV2UgSW5pdGlhbGl6ZSBhbmQgZ2VuZXJhdGUgZGVjcnlwdGluZyBmdW5jdGlvblxuICAgIGNvbnN0IGRlY3J5cHRlciA9IG1ha2VfZGVjcnlwdGVyKHB3ZCk7XG5cbiAgICAvLyAyLiBkZWNyeXB0IHNhbHQgd2hhdCBpcyBhbHdheXMgMTIgYnl0ZXMgYW5kIGlzIGEgcGFydCBvZiBmaWxlIGNvbnRlbnRcbiAgICBjb25zdCBzYWx0ID0gZGVjcnlwdGVyKGRhdGEuc2xpY2UoMCwgMTIpKTtcblxuICAgIC8vIGlmIGJpdCAzICgweDA4KSBvZiB0aGUgZ2VuZXJhbC1wdXJwb3NlIGZsYWdzIGZpZWxkIGlzIHNldCwgY2hlY2sgc2FsdFsxMV0gd2l0aCB0aGUgaGlnaCBieXRlIG9mIHRoZSBoZWFkZXIgdGltZVxuICAgIC8vIDIgYnl0ZSBkYXRhIGJsb2NrIChhcyBwZXIgSW5mby1aaXAgc3BlYyksIG90aGVyd2lzZSBjaGVjayB3aXRoIHRoZSBoaWdoIGJ5dGUgb2YgdGhlIGhlYWRlciBlbnRyeVxuICAgIGNvbnN0IHZlcmlmeUJ5dGUgPSAoaGVhZGVyLmZsYWdzICYgMHg4KSA9PT0gMHg4ID8gaGVhZGVyLnRpbWVIaWdoQnl0ZSA6IGhlYWRlci5jcmMgPj4+IDI0O1xuXG4gICAgLy8zLiBkb2VzIHBhc3N3b3JkIG1lZXQgZXhwZWN0YXRpb25zXG4gICAgaWYgKHNhbHRbMTFdICE9PSB2ZXJpZnlCeXRlKSB7XG4gICAgICAgIHRocm93IEVycm9ycy5XUk9OR19QQVNTV09SRCgpO1xuICAgIH1cblxuICAgIC8vIDQuIGRlY29kZSBjb250ZW50XG4gICAgcmV0dXJuIGRlY3J5cHRlcihkYXRhLnNsaWNlKDEyKSk7XG59XG5cbi8vIGxldHMgYWRkIHdheSB0byBwb3B1bGF0ZSBzYWx0LCBOT1QgUkVDT01NRU5ERUQgZm9yIHByb2R1Y3Rpb24gYnV0IG1heWJlIHVzZWZ1bCBmb3IgdGVzdGluZyBnZW5lcmFsIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIF9zYWx0ZXIoZGF0YSkge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkgJiYgZGF0YS5sZW5ndGggPj0gMTIpIHtcbiAgICAgICAgLy8gYmUgYXdhcmUgLSBjdXJyZW50bHkgc2FsdGluZyBidWZmZXIgZGF0YSBpcyBtb2RpZmllZFxuICAgICAgICBjb25maWcuZ2VuU2FsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnNsaWNlKDAsIDEyKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT09IFwibm9kZVwiKSB7XG4gICAgICAgIC8vIHRlc3Qgc2FsdCBnZW5lcmF0aW9uIHdpdGggbm9kZSByYW5kb20gZnVuY3Rpb25cbiAgICAgICAgY29uZmlnLmdlblNhbHQgPSBnZW5TYWx0Lm5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdmFsdWUgaXMgbm90IGFjY2VwdGFibGUgY29uZmlnIGdldHMgcmVzZXQuXG4gICAgICAgIGNvbmZpZy5nZW5TYWx0ID0gZ2VuU2FsdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuY3J5cHQoLypCdWZmZXIqLyBkYXRhLCAvKk9iamVjdCovIGhlYWRlciwgLypTdHJpbmcsIEJ1ZmZlciovIHB3ZCwgLypCb29sZWFuKi8gb2xkbGlrZSA9IGZhbHNlKSB7XG4gICAgLy8gMS4gdGVzdCBkYXRhIGlmIGRhdGEgaXMgbm90IEJ1ZmZlciB3ZSBtYWtlIGJ1ZmZlciBmcm9tIGl0XG4gICAgaWYgKGRhdGEgPT0gbnVsbCkgZGF0YSA9IEJ1ZmZlci5hbGxvYygwKTtcbiAgICAvLyBpZiBkYXRhIGlzIG5vdCBidWZmZXIgYmUgbWFrZSBidWZmZXIgZnJvbSBpdFxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSBkYXRhID0gQnVmZmVyLmZyb20oZGF0YS50b1N0cmluZygpKTtcblxuICAgIC8vIDIuIFdlIEluaXRpYWxpemUgYW5kIGdlbmVyYXRlIGVuY3J5cHRpbmcgZnVuY3Rpb25cbiAgICBjb25zdCBlbmNyeXB0ZXIgPSBtYWtlX2VuY3J5cHRlcihwd2QpO1xuXG4gICAgLy8gMy4gZ2VuZXJhdGUgc2FsdCAoMTItYnl0ZXMgb2YgcmFuZG9tIGRhdGEpXG4gICAgY29uc3Qgc2FsdCA9IGNvbmZpZy5nZW5TYWx0KCk7XG4gICAgc2FsdFsxMV0gPSAoaGVhZGVyLmNyYyA+Pj4gMjQpICYgMHhmZjtcblxuICAgIC8vIG9sZCBpbXBsZW1lbnRhdGlvbnMgKGJlZm9yZSBQS1ppcCAyLjA0ZykgdXNlZCB0d28gYnl0ZSBjaGVja1xuICAgIGlmIChvbGRsaWtlKSBzYWx0WzEwXSA9IChoZWFkZXIuY3JjID4+PiAxNikgJiAweGZmO1xuXG4gICAgLy8gNC4gY3JlYXRlIG91dHB1dFxuICAgIGNvbnN0IHJlc3VsdCA9IEJ1ZmZlci5hbGxvYyhkYXRhLmxlbmd0aCArIDEyKTtcbiAgICBlbmNyeXB0ZXIoc2FsdCwgcmVzdWx0KTtcblxuICAgIC8vIGZpbmFsbHkgZW5jb2RlIGNvbnRlbnRcbiAgICByZXR1cm4gZW5jcnlwdGVyKGRhdGEsIHJlc3VsdCwgMTIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZGVjcnlwdCwgZW5jcnlwdCwgX3NhbHRlciB9O1xuIiwgImV4cG9ydHMuRGVmbGF0ZXIgPSByZXF1aXJlKFwiLi9kZWZsYXRlclwiKTtcbmV4cG9ydHMuSW5mbGF0ZXIgPSByZXF1aXJlKFwiLi9pbmZsYXRlclwiKTtcbmV4cG9ydHMuWmlwQ3J5cHRvID0gcmVxdWlyZShcIi4vemlwY3J5cHRvXCIpO1xuIiwgInZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxcIiksXG4gICAgSGVhZGVycyA9IHJlcXVpcmUoXCIuL2hlYWRlcnNcIiksXG4gICAgQ29uc3RhbnRzID0gVXRpbHMuQ29uc3RhbnRzLFxuICAgIE1ldGhvZHMgPSByZXF1aXJlKFwiLi9tZXRob2RzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKiogb2JqZWN0ICovIG9wdGlvbnMsIC8qQnVmZmVyKi8gaW5wdXQpIHtcbiAgICB2YXIgX2NlbnRyYWxIZWFkZXIgPSBuZXcgSGVhZGVycy5FbnRyeUhlYWRlcigpLFxuICAgICAgICBfZW50cnlOYW1lID0gQnVmZmVyLmFsbG9jKDApLFxuICAgICAgICBfY29tbWVudCA9IEJ1ZmZlci5hbGxvYygwKSxcbiAgICAgICAgX2lzRGlyZWN0b3J5ID0gZmFsc2UsXG4gICAgICAgIHVuY29tcHJlc3NlZERhdGEgPSBudWxsLFxuICAgICAgICBfZXh0cmEgPSBCdWZmZXIuYWxsb2MoMCksXG4gICAgICAgIF9leHRyYWxvY2FsID0gQnVmZmVyLmFsbG9jKDApLFxuICAgICAgICBfZWZzID0gdHJ1ZTtcblxuICAgIC8vIGFzc2lnbiBvcHRpb25zXG4gICAgY29uc3Qgb3B0cyA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkZWNvZGVyID0gdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gXCJvYmplY3RcIiA/IG9wdHMuZGVjb2RlciA6IFV0aWxzLmRlY29kZXI7XG4gICAgX2VmcyA9IGRlY29kZXIuaGFzT3duUHJvcGVydHkoXCJlZnNcIikgPyBkZWNvZGVyLmVmcyA6IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0Q29tcHJlc3NlZERhdGFGcm9tWmlwKCkge1xuICAgICAgICAvL2lmICghaW5wdXQgfHwgIUJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgaWYgKCFpbnB1dCB8fCAhKGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgICAgIH1cbiAgICAgICAgX2V4dHJhbG9jYWwgPSBfY2VudHJhbEhlYWRlci5sb2FkTG9jYWxIZWFkZXJGcm9tQmluYXJ5KGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNsaWNlKF9jZW50cmFsSGVhZGVyLnJlYWxEYXRhT2Zmc2V0LCBfY2VudHJhbEhlYWRlci5yZWFsRGF0YU9mZnNldCArIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmMzMk9LKGRhdGEpIHtcbiAgICAgICAgLy8gaWYgYml0IDMgKDB4MDgpIG9mIHRoZSBnZW5lcmFsLXB1cnBvc2UgZmxhZ3MgZmllbGQgaXMgc2V0LCB0aGVuIHRoZSBDUkMtMzIgYW5kIGZpbGUgc2l6ZXMgYXJlIG5vdCBrbm93biB3aGVuIHRoZSBsb2NhbCBoZWFkZXIgaXMgd3JpdHRlblxuICAgICAgICBpZiAoIV9jZW50cmFsSGVhZGVyLmZsYWdzX2Rlc2MpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5jcmMzMihkYXRhKSAhPT0gX2NlbnRyYWxIZWFkZXIubG9jYWxIZWFkZXIuY3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHt9O1xuICAgICAgICAgICAgY29uc3QgZGF0YUVuZE9mZnNldCA9IF9jZW50cmFsSGVhZGVyLnJlYWxEYXRhT2Zmc2V0ICsgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemU7XG4gICAgICAgICAgICAvLyBubyBkZXNjcmlwdG9yIGFmdGVyIGNvbXByZXNzZWQgZGF0YSwgaW5zdGVhZCBuZXcgbG9jYWwgaGVhZGVyXG4gICAgICAgICAgICBpZiAoaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQpID09IENvbnN0YW50cy5MT0NTSUcgfHwgaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQpID09IENvbnN0YW50cy5DRU5TSUcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuREVTQ1JJUFRPUl9OT1RfRVhJU1QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZ2V0IGRlY3JpcHRvciBkYXRhXG4gICAgICAgICAgICBpZiAoaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQpID09IENvbnN0YW50cy5FWFRTSUcpIHtcbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdG9yIHdpdGggc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jcmMgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRDUkMpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY29tcHJlc3NlZFNpemUgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRTSVopO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2l6ZSA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVExFTik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnJlYWRVSW50MTZMRShkYXRhRW5kT2Zmc2V0ICsgMTIpID09PSAweDRiNTApIHtcbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdG9yIHdpdGhvdXQgc2lnbmF0dXJlICh3ZSBjaGVjayBpcyBuZXcgaGVhZGVyIHN0YXJ0aW5nIHdoZXJlIHdlIGV4cGVjdClcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNyYyA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVENSQyAtIDQpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY29tcHJlc3NlZFNpemUgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRTSVogLSA0KTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNpemUgPSBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCArIENvbnN0YW50cy5FWFRMRU4gLSA0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkRFU0NSSVBUT1JfVU5LTk9XTigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBkYXRhIGludGVncml0eVxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuY29tcHJlc3NlZFNpemUgIT09IF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplIHx8IGRlc2NyaXB0b3Iuc2l6ZSAhPT0gX2NlbnRyYWxIZWFkZXIuc2l6ZSB8fCBkZXNjcmlwdG9yLmNyYyAhPT0gX2NlbnRyYWxIZWFkZXIuY3JjKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkRFU0NSSVBUT1JfRkFVTFRZKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVXRpbHMuY3JjMzIoZGF0YSkgIT09IGRlc2NyaXB0b3IuY3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBAVE9ETzogemlwNjQgYml0IGRlc2NyaXB0b3IgZmllbGRzXG4gICAgICAgICAgICAvLyBpZiBiaXQgMyBpcyBzZXQgYW5kIGFueSB2YWx1ZSBpbiBsb2NhbCBoZWFkZXIgXCJ6aXA2NCBFeHRlbmRlZCBpbmZvcm1hdGlvblwiIGV4dHJhIGZpZWxkIGFyZSBzZXQgMCAocGxhY2UgaG9sZGVyKVxuICAgICAgICAgICAgLy8gdGhlbiA2NC1iaXQgZGVzY3JpcHRvciBmb3JtYXQgaXMgdXNlZCBpbnN0ZWFkIG9mIDMyLWJpdFxuICAgICAgICAgICAgLy8gY2VudHJhbCBoZWFkZXIgLSBcInppcDY0IEV4dGVuZGVkIGluZm9ybWF0aW9uXCIgZXh0cmEgZmllbGQgc2hvdWxkIHN0b3JlIHJlYWwgdmFsdWVzIGFuZCBub3QgcGxhY2UgaG9sZGVyc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29tcHJlc3MoLypCb29sZWFuKi8gYXN5bmMsIC8qRnVuY3Rpb24qLyBjYWxsYmFjaywgLypTdHJpbmcsIEJ1ZmZlciovIHBhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYXN5bmMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhc3MgPSBhc3luYztcbiAgICAgICAgICAgIGFzeW5jID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKEJ1ZmZlci5hbGxvYygwKSwgVXRpbHMuRXJyb3JzLkRJUkVDVE9SWV9DT05URU5UX0VSUk9SKCkpOyAvL3NpIGFkZGVkIGVycm9yLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wcmVzc2VkRGF0YSA9IGdldENvbXByZXNzZWREYXRhRnJvbVppcCgpO1xuXG4gICAgICAgIGlmIChjb21wcmVzc2VkRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEZpbGUgaXMgZW1wdHksIG5vdGhpbmcgdG8gZGVjb21wcmVzcy5cbiAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXByZXNzZWREYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLmVuY3J5cHRlZCkge1xuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT09IHR5cGVvZiBwYXNzICYmICFCdWZmZXIuaXNCdWZmZXIocGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9QQVNTX1BBUkFNKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wcmVzc2VkRGF0YSA9IE1ldGhvZHMuWmlwQ3J5cHRvLmRlY3J5cHQoY29tcHJlc3NlZERhdGEsIF9jZW50cmFsSGVhZGVyLCBwYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0gQnVmZmVyLmFsbG9jKF9jZW50cmFsSGVhZGVyLnNpemUpO1xuXG4gICAgICAgIHN3aXRjaCAoX2NlbnRyYWxIZWFkZXIubWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlIFV0aWxzLkNvbnN0YW50cy5TVE9SRUQ6XG4gICAgICAgICAgICAgICAgY29tcHJlc3NlZERhdGEuY29weShkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNyYzMyT0soZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhkYXRhLCBVdGlscy5FcnJvcnMuQkFEX0NSQygpKTsgLy9zaSBhZGRlZCBlcnJvclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQkFEX0NSQygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vc2kgYWRkZWQgb3RoZXJ3aXNlIGRpZCBub3Qgc2VlbSB0byByZXR1cm4gZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBVdGlscy5Db25zdGFudHMuREVGTEFURUQ6XG4gICAgICAgICAgICAgICAgdmFyIGluZmxhdGVyID0gbmV3IE1ldGhvZHMuSW5mbGF0ZXIoY29tcHJlc3NlZERhdGEsIF9jZW50cmFsSGVhZGVyLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmICghYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaW5mbGF0ZXIuaW5mbGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvcHkoZGF0YSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JjMzJPSyhkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkJBRF9DUkMoYFwiJHtkZWNvZGVyLmRlY29kZShfZW50cnlOYW1lKX1cImApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmxhdGVyLmluZmxhdGVBc3luYyhmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuY29weShyZXN1bHQsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmMzMk9LKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LCBVdGlscy5FcnJvcnMuQkFEX0NSQygpKTsgLy9zaSBhZGRlZCBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soQnVmZmVyLmFsbG9jKDApLCBVdGlscy5FcnJvcnMuVU5LTk9XTl9NRVRIT0QoKSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLlVOS05PV05fTUVUSE9EKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wcmVzcygvKkJvb2xlYW4qLyBhc3luYywgLypGdW5jdGlvbiovIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICgoIXVuY29tcHJlc3NlZERhdGEgfHwgIXVuY29tcHJlc3NlZERhdGEubGVuZ3RoKSAmJiBCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgICAgICAvLyBubyBkYXRhIHNldCBvciB0aGUgZGF0YSB3YXNuJ3QgY2hhbmdlZCB0byByZXF1aXJlIHJlY29tcHJlc3Npb25cbiAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soZ2V0Q29tcHJlc3NlZERhdGFGcm9tWmlwKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXByZXNzZWREYXRhRnJvbVppcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVuY29tcHJlc3NlZERhdGEubGVuZ3RoICYmICFfaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHZhciBjb21wcmVzc2VkRGF0YTtcbiAgICAgICAgICAgIC8vIExvY2FsIGZpbGUgaGVhZGVyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jZW50cmFsSGVhZGVyLm1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgVXRpbHMuQ29uc3RhbnRzLlNUT1JFRDpcbiAgICAgICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPSBfY2VudHJhbEhlYWRlci5zaXplO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXByZXNzZWREYXRhID0gQnVmZmVyLmFsbG9jKHVuY29tcHJlc3NlZERhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdW5jb21wcmVzc2VkRGF0YS5jb3B5KGNvbXByZXNzZWREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXByZXNzZWREYXRhO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY2FzZSBVdGlscy5Db25zdGFudHMuREVGTEFURUQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZsYXRlciA9IG5ldyBNZXRob2RzLkRlZmxhdGVyKHVuY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmbGF0ZWQgPSBkZWZsYXRlci5kZWZsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9IGRlZmxhdGVkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZsYXRlZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmxhdGVyLmRlZmxhdGVBc3luYyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByZXNzZWREYXRhID0gQnVmZmVyLmFsbG9jKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29weShjb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmbGF0ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhc3luYyAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soQnVmZmVyLmFsbG9jKDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkVUludDY0TEUoYnVmZmVyLCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIChidWZmZXIucmVhZFVJbnQzMkxFKG9mZnNldCArIDQpIDw8IDQpICsgYnVmZmVyLnJlYWRVSW50MzJMRShvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlRXh0cmEoZGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICAgICAgICB2YXIgc2lnbmF0dXJlLCBzaXplLCBwYXJ0O1xuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCArIDQgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZSA9IGRhdGEucmVhZFVJbnQxNkxFKG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGRhdGEucmVhZFVJbnQxNkxFKG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgcGFydCA9IGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzaXplKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICAgICAgICAgICAgICBpZiAoQ29uc3RhbnRzLklEX1pJUDY0ID09PSBzaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VaaXA2NEV4dGVuZGVkSW5mb3JtYXRpb24ocGFydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkVYVFJBX0ZJRUxEX1BBUlNFX0VSUk9SKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL092ZXJyaWRlIGhlYWRlciBmaWVsZCB2YWx1ZXMgd2l0aCB2YWx1ZXMgZnJvbSB0aGUgWklQNjQgZXh0cmEgZmllbGRcbiAgICBmdW5jdGlvbiBwYXJzZVppcDY0RXh0ZW5kZWRJbmZvcm1hdGlvbihkYXRhKSB7XG4gICAgICAgIHZhciBzaXplLCBjb21wcmVzc2VkU2l6ZSwgb2Zmc2V0LCBkaXNrTnVtU3RhcnQ7XG5cbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID49IENvbnN0YW50cy5FRl9aSVA2NF9TQ09NUCkge1xuICAgICAgICAgICAgc2l6ZSA9IHJlYWRVSW50NjRMRShkYXRhLCBDb25zdGFudHMuRUZfWklQNjRfU1VOQ09NUCk7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuc2l6ZSA9PT0gQ29uc3RhbnRzLkVGX1pJUDY0X09SXzMyKSB7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID49IENvbnN0YW50cy5FRl9aSVA2NF9SSE8pIHtcbiAgICAgICAgICAgIGNvbXByZXNzZWRTaXplID0gcmVhZFVJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5FRl9aSVA2NF9TQ09NUCk7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPT09IENvbnN0YW50cy5FRl9aSVA2NF9PUl8zMikge1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplID0gY29tcHJlc3NlZFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID49IENvbnN0YW50cy5FRl9aSVA2NF9EU04pIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHJlYWRVSW50NjRMRShkYXRhLCBDb25zdGFudHMuRUZfWklQNjRfUkhPKTtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5vZmZzZXQgPT09IENvbnN0YW50cy5FRl9aSVA2NF9PUl8zMikge1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPj0gQ29uc3RhbnRzLkVGX1pJUDY0X0RTTiArIDQpIHtcbiAgICAgICAgICAgIGRpc2tOdW1TdGFydCA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5FRl9aSVA2NF9EU04pO1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLmRpc2tOdW1TdGFydCA9PT0gQ29uc3RhbnRzLkVGX1pJUDY0X09SXzE2KSB7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZGlza051bVN0YXJ0ID0gZGlza051bVN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGVudHJ5TmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVyLmRlY29kZShfZW50cnlOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHJhd0VudHJ5TmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZW50cnlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZW50cnlOYW1lKHZhbCkge1xuICAgICAgICAgICAgX2VudHJ5TmFtZSA9IFV0aWxzLnRvQnVmZmVyKHZhbCwgZGVjb2Rlci5lbmNvZGUpO1xuICAgICAgICAgICAgdmFyIGxhc3RDaGFyID0gX2VudHJ5TmFtZVtfZW50cnlOYW1lLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgX2lzRGlyZWN0b3J5ID0gbGFzdENoYXIgPT09IDQ3IHx8IGxhc3RDaGFyID09PSA5MjtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmZpbGVOYW1lTGVuZ3RoID0gX2VudHJ5TmFtZS5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGVmcygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX2VmcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9lZnModGhpcy5lbnRyeU5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2VmcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZXh0cmEoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dHJhO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZXh0cmEodmFsKSB7XG4gICAgICAgICAgICBfZXh0cmEgPSB2YWw7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5leHRyYUxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgICBwYXJzZUV4dHJhKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNvbW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoX2NvbW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY29tbWVudCh2YWwpIHtcbiAgICAgICAgICAgIF9jb21tZW50ID0gVXRpbHMudG9CdWZmZXIodmFsLCBkZWNvZGVyLmVuY29kZSk7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jb21tZW50TGVuZ3RoID0gX2NvbW1lbnQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKF9jb21tZW50Lmxlbmd0aCA+IDB4ZmZmZikgdGhyb3cgVXRpbHMuRXJyb3JzLkNPTU1FTlRfVE9PX0xPTkcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBuID0gZGVjb2Rlci5kZWNvZGUoX2VudHJ5TmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gX2lzRGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgPyBuXG4gICAgICAgICAgICAgICAgICAgICAgLnN1YnN0cihuLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgICAgIDogbi5zcGxpdChcIi9cIikucG9wKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc0RpcmVjdG9yeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfaXNEaXJlY3Rvcnk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q29tcHJlc3NlZERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wcmVzcyhmYWxzZSwgbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q29tcHJlc3NlZERhdGFBc3luYzogZnVuY3Rpb24gKC8qRnVuY3Rpb24qLyBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29tcHJlc3ModHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldERhdGE6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdW5jb21wcmVzc2VkRGF0YSA9IFV0aWxzLnRvQnVmZmVyKHZhbHVlLCBVdGlscy5kZWNvZGVyLmVuY29kZSk7XG4gICAgICAgICAgICBpZiAoIV9pc0RpcmVjdG9yeSAmJiB1bmNvbXByZXNzZWREYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLnNpemUgPSB1bmNvbXByZXNzZWREYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5tZXRob2QgPSBVdGlscy5Db25zdGFudHMuREVGTEFURUQ7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY3JjID0gVXRpbHMuY3JjMzIodmFsdWUpO1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmb2xkZXJzIGFuZCBibGFuayBmaWxlcyBzaG91bGQgYmUgc3RvcmVkXG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIubWV0aG9kID0gVXRpbHMuQ29uc3RhbnRzLlNUT1JFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXREYXRhOiBmdW5jdGlvbiAocGFzcykge1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5jb21wcmVzc2VkRGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29tcHJlc3MoZmFsc2UsIG51bGwsIHBhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldERhdGFBc3luYzogZnVuY3Rpb24gKC8qRnVuY3Rpb24qLyBjYWxsYmFjaywgcGFzcykge1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjb21wcmVzcyh0cnVlLCBjYWxsYmFjaywgcGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IGF0dHIoYXR0cikge1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuYXR0ciA9IGF0dHI7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBhdHRyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jZW50cmFsSGVhZGVyLmF0dHI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IGhlYWRlcigvKkJ1ZmZlciovIGRhdGEpIHtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmxvYWRGcm9tQmluYXJ5KGRhdGEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBoZWFkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NlbnRyYWxIZWFkZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFja0NlbnRyYWxIZWFkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmZsYWdzX2VmcyA9IHRoaXMuZWZzO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZXh0cmFMZW5ndGggPSBfZXh0cmEubGVuZ3RoO1xuICAgICAgICAgICAgLy8gMS4gY3JlYXRlIGhlYWRlciAoYnVmZmVyKVxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IF9jZW50cmFsSGVhZGVyLmNlbnRyYWxIZWFkZXJUb0JpbmFyeSgpO1xuICAgICAgICAgICAgdmFyIGFkZHBvcyA9IFV0aWxzLkNvbnN0YW50cy5DRU5IRFI7XG4gICAgICAgICAgICAvLyAyLiBhZGQgZmlsZSBuYW1lXG4gICAgICAgICAgICBfZW50cnlOYW1lLmNvcHkoaGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgYWRkcG9zICs9IF9lbnRyeU5hbWUubGVuZ3RoO1xuICAgICAgICAgICAgLy8gMy4gYWRkIGV4dHJhIGRhdGFcbiAgICAgICAgICAgIF9leHRyYS5jb3B5KGhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIGFkZHBvcyArPSBfY2VudHJhbEhlYWRlci5leHRyYUxlbmd0aDtcbiAgICAgICAgICAgIC8vIDQuIGFkZCBmaWxlIGNvbW1lbnRcbiAgICAgICAgICAgIF9jb21tZW50LmNvcHkoaGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBwYWNrTG9jYWxIZWFkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBhZGRwb3MgPSAwO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZmxhZ3NfZWZzID0gdGhpcy5lZnM7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5leHRyYUxvY2FsTGVuZ3RoID0gX2V4dHJhbG9jYWwubGVuZ3RoO1xuICAgICAgICAgICAgLy8gMS4gY29uc3RydWN0IGxvY2FsIGhlYWRlciBCdWZmZXJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsSGVhZGVyQnVmID0gX2NlbnRyYWxIZWFkZXIubG9jYWxIZWFkZXJUb0JpbmFyeSgpO1xuICAgICAgICAgICAgLy8gMi4gbG9jYWxIZWFkZXIgLSBjcmF0ZSBoZWFkZXIgYnVmZmVyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEhlYWRlciA9IEJ1ZmZlci5hbGxvYyhsb2NhbEhlYWRlckJ1Zi5sZW5ndGggKyBfZW50cnlOYW1lLmxlbmd0aCArIF9jZW50cmFsSGVhZGVyLmV4dHJhTG9jYWxMZW5ndGgpO1xuICAgICAgICAgICAgLy8gMi4xIGFkZCBsb2NhbGhlYWRlclxuICAgICAgICAgICAgbG9jYWxIZWFkZXJCdWYuY29weShsb2NhbEhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIGFkZHBvcyArPSBsb2NhbEhlYWRlckJ1Zi5sZW5ndGg7XG4gICAgICAgICAgICAvLyAyLjIgYWRkIGZpbGUgbmFtZVxuICAgICAgICAgICAgX2VudHJ5TmFtZS5jb3B5KGxvY2FsSGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgYWRkcG9zICs9IF9lbnRyeU5hbWUubGVuZ3RoO1xuICAgICAgICAgICAgLy8gMi4zIGFkZCBleHRyYSBmaWVsZFxuICAgICAgICAgICAgX2V4dHJhbG9jYWwuY29weShsb2NhbEhlYWRlciwgYWRkcG9zKTtcbiAgICAgICAgICAgIGFkZHBvcyArPSBfZXh0cmFsb2NhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiBsb2NhbEhlYWRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gZnVuY3Rpb24gKG5yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPFwiICsgKChuciAmJiBuci5sZW5ndGggKyBcIiBieXRlcyBidWZmZXJcIikgfHwgXCJudWxsXCIpICsgXCI+XCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudHJ5TmFtZTogdGhpcy5lbnRyeU5hbWUsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuY29tbWVudCxcbiAgICAgICAgICAgICAgICBpc0RpcmVjdG9yeTogdGhpcy5pc0RpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IF9jZW50cmFsSGVhZGVyLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgIGNvbXByZXNzZWREYXRhOiBieXRlcyhpbnB1dCksXG4gICAgICAgICAgICAgICAgZGF0YTogYnl0ZXModW5jb21wcmVzc2VkRGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpLCBudWxsLCBcIlxcdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgImNvbnN0IFppcEVudHJ5ID0gcmVxdWlyZShcIi4vemlwRW50cnlcIik7XG5jb25zdCBIZWFkZXJzID0gcmVxdWlyZShcIi4vaGVhZGVyc1wiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLypCdWZmZXJ8bnVsbCovIGluQnVmZmVyLCAvKiogb2JqZWN0ICovIG9wdGlvbnMpIHtcbiAgICB2YXIgZW50cnlMaXN0ID0gW10sXG4gICAgICAgIGVudHJ5VGFibGUgPSB7fSxcbiAgICAgICAgX2NvbW1lbnQgPSBCdWZmZXIuYWxsb2MoMCksXG4gICAgICAgIG1haW5IZWFkZXIgPSBuZXcgSGVhZGVycy5NYWluSGVhZGVyKCksXG4gICAgICAgIGxvYWRlZEVudHJpZXMgPSBmYWxzZTtcbiAgICB2YXIgcGFzc3dvcmQgPSBudWxsO1xuICAgIGNvbnN0IHRlbXBvcmFyeSA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGFzc2lnbiBvcHRpb25zXG4gICAgY29uc3Qgb3B0cyA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCB7IG5vU29ydCwgZGVjb2RlciB9ID0gb3B0cztcblxuICAgIGlmIChpbkJ1ZmZlcikge1xuICAgICAgICAvLyBpcyBhIG1lbW9yeSBidWZmZXJcbiAgICAgICAgcmVhZE1haW5IZWFkZXIob3B0cy5yZWFkRW50cmllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uZS4gaXMgYSBuZXcgZmlsZVxuICAgICAgICBsb2FkZWRFbnRyaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlVGVtcG9yYXJ5Rm9sZGVycygpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyc0xpc3QgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSBsaXN0IG9mIGFsbCBmb2xkZXJzIGluIGZpbGVcbiAgICAgICAgZm9yIChjb25zdCBlbGVtIG9mIE9iamVjdC5rZXlzKGVudHJ5VGFibGUpKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGVsZW0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgZWxlbWVudHMucG9wKCk7IC8vIGZpbGVuYW1lXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRzLmxlbmd0aCkgY29udGludWU7IC8vIG5vIGZvbGRlcnNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSBlbGVtZW50cy5zbGljZSgwLCBpICsgMSkuam9pbihcIi9cIikgKyBcIi9cIjtcbiAgICAgICAgICAgICAgICBmb2xkZXJzTGlzdC5hZGQoc3ViKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBtaXNzaW5nIGZvbGRlcnMgYXMgdGVtcG9yYXJ5XG4gICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiBmb2xkZXJzTGlzdCkge1xuICAgICAgICAgICAgaWYgKCEoZWxlbSBpbiBlbnRyeVRhYmxlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBmb2xkZXIgPSBuZXcgWmlwRW50cnkob3B0cyk7XG4gICAgICAgICAgICAgICAgdGVtcGZvbGRlci5lbnRyeU5hbWUgPSBlbGVtO1xuICAgICAgICAgICAgICAgIHRlbXBmb2xkZXIuYXR0ciA9IDB4MTA7XG4gICAgICAgICAgICAgICAgdGVtcGZvbGRlci50ZW1wb3JhcnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVudHJ5TGlzdC5wdXNoKHRlbXBmb2xkZXIpO1xuICAgICAgICAgICAgICAgIGVudHJ5VGFibGVbdGVtcGZvbGRlci5lbnRyeU5hbWVdID0gdGVtcGZvbGRlcjtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnkuYWRkKHRlbXBmb2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZEVudHJpZXMoKSB7XG4gICAgICAgIGxvYWRlZEVudHJpZXMgPSB0cnVlO1xuICAgICAgICBlbnRyeVRhYmxlID0ge307XG4gICAgICAgIGlmIChtYWluSGVhZGVyLmRpc2tFbnRyaWVzID4gKGluQnVmZmVyLmxlbmd0aCAtIG1haW5IZWFkZXIub2Zmc2V0KSAvIFV0aWxzLkNvbnN0YW50cy5DRU5IRFIpIHtcbiAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5ESVNLX0VOVFJZX1RPT19MQVJHRSgpO1xuICAgICAgICB9XG4gICAgICAgIGVudHJ5TGlzdCA9IG5ldyBBcnJheShtYWluSGVhZGVyLmRpc2tFbnRyaWVzKTsgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXNcbiAgICAgICAgdmFyIGluZGV4ID0gbWFpbkhlYWRlci5vZmZzZXQ7IC8vIG9mZnNldCBvZiBmaXJzdCBDRU4gaGVhZGVyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50cnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW50cnkgPSBuZXcgWmlwRW50cnkob3B0cywgaW5CdWZmZXIpO1xuICAgICAgICAgICAgZW50cnkuaGVhZGVyID0gaW5CdWZmZXIuc2xpY2UodG1wLCAodG1wICs9IFV0aWxzLkNvbnN0YW50cy5DRU5IRFIpKTtcblxuICAgICAgICAgICAgZW50cnkuZW50cnlOYW1lID0gaW5CdWZmZXIuc2xpY2UodG1wLCAodG1wICs9IGVudHJ5LmhlYWRlci5maWxlTmFtZUxlbmd0aCkpO1xuXG4gICAgICAgICAgICBpZiAoZW50cnkuaGVhZGVyLmV4dHJhTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZXh0cmEgPSBpbkJ1ZmZlci5zbGljZSh0bXAsICh0bXAgKz0gZW50cnkuaGVhZGVyLmV4dHJhTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS5oZWFkZXIuY29tbWVudExlbmd0aCkgZW50cnkuY29tbWVudCA9IGluQnVmZmVyLnNsaWNlKHRtcCwgdG1wICsgZW50cnkuaGVhZGVyLmNvbW1lbnRMZW5ndGgpO1xuXG4gICAgICAgICAgICBpbmRleCArPSBlbnRyeS5oZWFkZXIuY2VudHJhbEhlYWRlclNpemU7XG5cbiAgICAgICAgICAgIGVudHJ5TGlzdFtpXSA9IGVudHJ5O1xuICAgICAgICAgICAgZW50cnlUYWJsZVtlbnRyeS5lbnRyeU5hbWVdID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcG9yYXJ5LmNsZWFyKCk7XG4gICAgICAgIG1ha2VUZW1wb3JhcnlGb2xkZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZE1haW5IZWFkZXIoLypCb29sZWFuKi8gcmVhZE5vdykge1xuICAgICAgICB2YXIgaSA9IGluQnVmZmVyLmxlbmd0aCAtIFV0aWxzLkNvbnN0YW50cy5FTkRIRFIsIC8vIEVORCBoZWFkZXIgc2l6ZVxuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgoMCwgaSAtIDB4ZmZmZiksIC8vIDB4RkZGRiBpcyB0aGUgbWF4IHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICBuID0gbWF4LFxuICAgICAgICAgICAgZW5kU3RhcnQgPSBpbkJ1ZmZlci5sZW5ndGgsXG4gICAgICAgICAgICBlbmRPZmZzZXQgPSAtMSwgLy8gU3RhcnQgb2Zmc2V0IG9mIHRoZSBFTkQgaGVhZGVyXG4gICAgICAgICAgICBjb21tZW50RW5kID0gMDtcblxuICAgICAgICAvLyBvcHRpb24gdG8gc2VhcmNoIGhlYWRlciBmb3JtIGVudGlyZSBmaWxlXG4gICAgICAgIGNvbnN0IHRyYWlsaW5nU3BhY2UgPSB0eXBlb2Ygb3B0cy50cmFpbGluZ1NwYWNlID09PSBcImJvb2xlYW5cIiA/IG9wdHMudHJhaWxpbmdTcGFjZSA6IGZhbHNlO1xuICAgICAgICBpZiAodHJhaWxpbmdTcGFjZSkgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGk7IGkgPj0gbjsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaW5CdWZmZXJbaV0gIT09IDB4NTApIGNvbnRpbnVlOyAvLyBxdWljayBjaGVjayB0aGF0IHRoZSBieXRlIGlzICdQJ1xuICAgICAgICAgICAgaWYgKGluQnVmZmVyLnJlYWRVSW50MzJMRShpKSA9PT0gVXRpbHMuQ29uc3RhbnRzLkVORFNJRykge1xuICAgICAgICAgICAgICAgIC8vIFwiUEtcXDAwNVxcMDA2XCJcbiAgICAgICAgICAgICAgICBlbmRPZmZzZXQgPSBpO1xuICAgICAgICAgICAgICAgIGNvbW1lbnRFbmQgPSBpO1xuICAgICAgICAgICAgICAgIGVuZFN0YXJ0ID0gaSArIFV0aWxzLkNvbnN0YW50cy5FTkRIRFI7XG4gICAgICAgICAgICAgICAgLy8gV2UgYWxyZWFkeSBmb3VuZCBhIHJlZ3VsYXIgc2lnbmF0dXJlLCBsZXQncyBsb29rIGp1c3QgYSBiaXQgZnVydGhlciB0byBjaGVjayBpZiB0aGVyZSdzIGFueSB6aXA2NCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgICBuID0gaSAtIFV0aWxzLkNvbnN0YW50cy5FTkQ2NEhEUjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluQnVmZmVyLnJlYWRVSW50MzJMRShpKSA9PT0gVXRpbHMuQ29uc3RhbnRzLkVORDY0U0lHKSB7XG4gICAgICAgICAgICAgICAgLy8gRm91bmQgYSB6aXA2NCBzaWduYXR1cmUsIGxldCdzIGNvbnRpbnVlIHJlYWRpbmcgdGhlIHdob2xlIHppcDY0IHJlY29yZFxuICAgICAgICAgICAgICAgIG4gPSBtYXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbkJ1ZmZlci5yZWFkVUludDMyTEUoaSkgPT09IFV0aWxzLkNvbnN0YW50cy5aSVA2NFNJRykge1xuICAgICAgICAgICAgICAgIC8vIEZvdW5kIHRoZSB6aXA2NCByZWNvcmQsIGxldCdzIGRldGVybWluZSBpdCdzIHNpemVcbiAgICAgICAgICAgICAgICBlbmRPZmZzZXQgPSBpO1xuICAgICAgICAgICAgICAgIGVuZFN0YXJ0ID0gaSArIFV0aWxzLnJlYWRCaWdVSW50NjRMRShpbkJ1ZmZlciwgaSArIFV0aWxzLkNvbnN0YW50cy5aSVA2NFNJWkUpICsgVXRpbHMuQ29uc3RhbnRzLlpJUDY0TEVBRDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRPZmZzZXQgPT0gLTEpIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX0ZPUk1BVCgpO1xuXG4gICAgICAgIG1haW5IZWFkZXIubG9hZEZyb21CaW5hcnkoaW5CdWZmZXIuc2xpY2UoZW5kT2Zmc2V0LCBlbmRTdGFydCkpO1xuICAgICAgICBpZiAobWFpbkhlYWRlci5jb21tZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBfY29tbWVudCA9IGluQnVmZmVyLnNsaWNlKGNvbW1lbnRFbmQgKyBVdGlscy5Db25zdGFudHMuRU5ESERSKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhZE5vdykgcmVhZEVudHJpZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb3J0RW50cmllcygpIHtcbiAgICAgICAgaWYgKGVudHJ5TGlzdC5sZW5ndGggPiAxICYmICFub1NvcnQpIHtcbiAgICAgICAgICAgIGVudHJ5TGlzdC5zb3J0KChhLCBiKSA9PiBhLmVudHJ5TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5lbnRyeU5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgWmlwRW50cnkgb2JqZWN0cyBleGlzdGVudCBpbiB0aGUgY3VycmVudCBvcGVuZWQgYXJjaGl2ZVxuICAgICAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBnZXQgZW50cmllcygpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW50cnlMaXN0LmZpbHRlcigoZSkgPT4gIXRlbXBvcmFyeS5oYXMoZSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmNoaXZlIGNvbW1lbnRcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGNvbW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoX2NvbW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY29tbWVudCh2YWwpIHtcbiAgICAgICAgICAgIF9jb21tZW50ID0gVXRpbHMudG9CdWZmZXIodmFsLCBkZWNvZGVyLmVuY29kZSk7XG4gICAgICAgICAgICBtYWluSGVhZGVyLmNvbW1lbnRMZW5ndGggPSBfY29tbWVudC5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RW50cnlDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1haW5IZWFkZXIuZGlza0VudHJpZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeUxpc3QubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBlbnRyeSB3aXRoIHRoZSBnaXZlbiBuYW1lIG9yIG51bGwgaWYgZW50cnkgaXMgaW5leGlzdGVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZW50cnlOYW1lXG4gICAgICAgICAqIEByZXR1cm4gWmlwRW50cnlcbiAgICAgICAgICovXG4gICAgICAgIGdldEVudHJ5OiBmdW5jdGlvbiAoLypTdHJpbmcqLyBlbnRyeU5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW50cnlUYWJsZVtlbnRyeU5hbWVdIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgdGhlIGdpdmVuIGVudHJ5IHRvIHRoZSBlbnRyeSBsaXN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBlbnRyeVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0RW50cnk6IGZ1bmN0aW9uICgvKlppcEVudHJ5Ki8gZW50cnkpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeUxpc3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICBlbnRyeVRhYmxlW2VudHJ5LmVudHJ5TmFtZV0gPSBlbnRyeTtcbiAgICAgICAgICAgIG1haW5IZWFkZXIudG90YWxFbnRyaWVzID0gZW50cnlMaXN0Lmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgZmlsZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGZyb20gdGhlIGVudHJ5IGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBlbnRyeSBpcyBhIGRpcmVjdG9yeSwgdGhlbiBhbGwgbmVzdGVkIGZpbGVzIGFuZCBkaXJlY3RvcmllcyB3aWxsIGJlIHJlbW92ZWRcbiAgICAgICAgICogQHBhcmFtIGVudHJ5TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uICgvKlN0cmluZyovIGVudHJ5TmFtZSwgd2l0aHN1YmZvbGRlcnMgPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeVRhYmxlW2VudHJ5TmFtZV07XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRFbnRyeUNoaWxkcmVuKGVudHJ5LCB3aXRoc3ViZm9sZGVycykubWFwKChjaGlsZCkgPT4gY2hpbGQuZW50cnlOYW1lKTtcblxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKHRoaXMuZGVsZXRlRW50cnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBlbnRyeSB3aXRoIHRoZSBnaXZlbiBuYW1lIGZyb20gdGhlIGVudHJ5IGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbnRyeU5hbWVcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBkZWxldGVFbnRyeTogZnVuY3Rpb24gKC8qU3RyaW5nKi8gZW50cnlOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeVRhYmxlW2VudHJ5TmFtZV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGVudHJ5TGlzdC5pbmRleE9mKGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZW50cnlMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVudHJ5VGFibGVbZW50cnlOYW1lXTtcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnRvdGFsRW50cmllcyA9IGVudHJ5TGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBJdGVyYXRlcyBhbmQgcmV0dXJucyBhbGwgbmVzdGVkIGZpbGVzIGFuZCBkaXJlY3RvcmllcyBvZiB0aGUgZ2l2ZW4gZW50cnlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGVudHJ5XG4gICAgICAgICAqIEByZXR1cm4gQXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIGdldEVudHJ5Q2hpbGRyZW46IGZ1bmN0aW9uICgvKlppcEVudHJ5Ki8gZW50cnksIHN1YmZvbGRlcnMgPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSAmJiBzdWJmb2xkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVudHJ5LmVudHJ5TmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHppcEVudHJ5IG9mIGVudHJ5TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHppcEVudHJ5LmVudHJ5TmFtZS5zdGFydHNXaXRoKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHppcEVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2VudHJ5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBIb3cgbWFueSBjaGlsZCBlbGVtZW50cyBlbnRyeSBoYXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeX0gZW50cnlcbiAgICAgICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgICAgICovXG4gICAgICAgIGdldENoaWxkQ291bnQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0RW50cnlDaGlsZHJlbihlbnRyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QuaW5jbHVkZXMoZW50cnkpID8gbGlzdC5sZW5ndGggLSAxIDogbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgemlwIGZpbGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBCdWZmZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbXByZXNzVG9CdWZmZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0RW50cmllcygpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhQmxvY2sgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZSA9IDA7XG4gICAgICAgICAgICBsZXQgZGluZGV4ID0gMDtcblxuICAgICAgICAgICAgbWFpbkhlYWRlci5zaXplID0gMDtcbiAgICAgICAgICAgIG1haW5IZWFkZXIub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGxldCB0b3RhbEVudHJpZXMgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbXByZXNzIGRhdGEgYW5kIHNldCBsb2NhbCBhbmQgZW50cnkgaGVhZGVyIGFjY29yZGluZ2x5LiBSZWFzb24gd2h5IGlzIGNhbGxlZCBmaXJzdFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzZWREYXRhID0gZW50cnkuZ2V0Q29tcHJlc3NlZERhdGEoKTtcbiAgICAgICAgICAgICAgICBlbnRyeS5oZWFkZXIub2Zmc2V0ID0gZGluZGV4O1xuXG4gICAgICAgICAgICAgICAgLy8gMS4gY29uc3RydWN0IGxvY2FsIGhlYWRlclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsSGVhZGVyID0gZW50cnkucGFja0xvY2FsSGVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICAvLyAyLiBvZmZzZXRzXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IGxvY2FsSGVhZGVyLmxlbmd0aCArIGNvbXByZXNzZWREYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBkaW5kZXggKz0gZGF0YUxlbmd0aDtcblxuICAgICAgICAgICAgICAgIC8vIDMuIHN0b3JlIHZhbHVlcyBpbiBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIGRhdGFCbG9jay5wdXNoKGxvY2FsSGVhZGVyKTtcbiAgICAgICAgICAgICAgICBkYXRhQmxvY2sucHVzaChjb21wcmVzc2VkRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAvLyA0LiBjb25zdHJ1Y3QgY2VudHJhbCBoZWFkZXJcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50cmFsSGVhZGVyID0gZW50cnkucGFja0NlbnRyYWxIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBoZWFkZXJCbG9ja3MucHVzaChjZW50cmFsSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAvLyA1LiB1cGRhdGUgbWFpbiBoZWFkZXJcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnNpemUgKz0gY2VudHJhbEhlYWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdG90YWxTaXplICs9IGRhdGFMZW5ndGggKyBjZW50cmFsSGVhZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0b3RhbEVudHJpZXMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWxTaXplICs9IG1haW5IZWFkZXIubWFpbkhlYWRlclNpemU7IC8vIGFsc28gaW5jbHVkZXMgemlwIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgIC8vIHBvaW50IHRvIGVuZCBvZiBkYXRhIGFuZCBiZWdpbm5pbmcgb2YgY2VudHJhbCBkaXJlY3RvcnkgZmlyc3QgcmVjb3JkXG4gICAgICAgICAgICBtYWluSGVhZGVyLm9mZnNldCA9IGRpbmRleDtcbiAgICAgICAgICAgIG1haW5IZWFkZXIudG90YWxFbnRyaWVzID0gdG90YWxFbnRyaWVzO1xuXG4gICAgICAgICAgICBkaW5kZXggPSAwO1xuICAgICAgICAgICAgY29uc3Qgb3V0QnVmZmVyID0gQnVmZmVyLmFsbG9jKHRvdGFsU2l6ZSk7XG4gICAgICAgICAgICAvLyB3cml0ZSBkYXRhIGJsb2Nrc1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIGRhdGFCbG9jaykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY29weShvdXRCdWZmZXIsIGRpbmRleCk7XG4gICAgICAgICAgICAgICAgZGluZGV4ICs9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZSBjZW50cmFsIGRpcmVjdG9yeSBlbnRyaWVzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnQgb2YgaGVhZGVyQmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTtcbiAgICAgICAgICAgICAgICBkaW5kZXggKz0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdyaXRlIG1haW4gaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBtaCA9IG1haW5IZWFkZXIudG9CaW5hcnkoKTtcbiAgICAgICAgICAgIGlmIChfY29tbWVudCkge1xuICAgICAgICAgICAgICAgIF9jb21tZW50LmNvcHkobWgsIFV0aWxzLkNvbnN0YW50cy5FTkRIRFIpOyAvLyBhZGQgemlwIGZpbGUgY29tbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWguY29weShvdXRCdWZmZXIsIGRpbmRleCk7XG5cbiAgICAgICAgICAgIC8vIFNpbmNlIHdlIHVwZGF0ZSBlbnRyeSBhbmQgbWFpbiBoZWFkZXIgb2Zmc2V0cyxcbiAgICAgICAgICAgIC8vIHRoZXkgYXJlIG5vIGxvbmdlciB2YWxpZCBhbmQgd2UgaGF2ZSB0byByZXNldCBjb250ZW50XG4gICAgICAgICAgICAvLyAoSXNzdWUgNjQpXG5cbiAgICAgICAgICAgIGluQnVmZmVyID0gb3V0QnVmZmVyO1xuICAgICAgICAgICAgbG9hZGVkRW50cmllcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0QnVmZmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvQXN5bmNCdWZmZXI6IGZ1bmN0aW9uICgvKkZ1bmN0aW9uKi8gb25TdWNjZXNzLCAvKkZ1bmN0aW9uKi8gb25GYWlsLCAvKkZ1bmN0aW9uKi8gb25JdGVtU3RhcnQsIC8qRnVuY3Rpb24qLyBvbkl0ZW1FbmQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvcnRFbnRyaWVzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmxvY2sgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50cmFsSGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbFNpemUgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBkaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbEVudHJpZXMgPSAwO1xuXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5zaXplID0gMDtcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLm9mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wcmVzczJCdWZmZXIgPSBmdW5jdGlvbiAoZW50cnlMaXN0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5TGlzdHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5lbnRyeU5hbWUgKyBlbnRyeS5leHRyYS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uSXRlbVN0YXJ0KSBvbkl0ZW1TdGFydChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmdldENvbXByZXNzZWREYXRhQXN5bmMoZnVuY3Rpb24gKGNvbXByZXNzZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uSXRlbUVuZCkgb25JdGVtRW5kKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmhlYWRlci5vZmZzZXQgPSBkaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBjb25zdHJ1Y3QgbG9jYWwgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxIZWFkZXIgPSBlbnRyeS5wYWNrTG9jYWxIZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIG9mZnNldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhTGVuZ3RoID0gbG9jYWxIZWFkZXIubGVuZ3RoICsgY29tcHJlc3NlZERhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbmRleCArPSBkYXRhTGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4gc3RvcmUgdmFsdWVzIGluIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJsb2NrLnB1c2gobG9jYWxIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCbG9jay5wdXNoKGNvbXByZXNzZWREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbnRyYWwgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGFsSGVhZGVyID0gZW50cnkucGFja0NlbnRyYWxIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50cmFsSGVhZGVycy5wdXNoKGNlbnRhbEhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkhlYWRlci5zaXplICs9IGNlbnRhbEhlYWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTaXplICs9IGRhdGFMZW5ndGggKyBjZW50YWxIZWFkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRW50cmllcysrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3MyQnVmZmVyKGVudHJ5TGlzdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNpemUgKz0gbWFpbkhlYWRlci5tYWluSGVhZGVyU2l6ZTsgLy8gYWxzbyBpbmNsdWRlcyB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9pbnQgdG8gZW5kIG9mIGRhdGEgYW5kIGJlZ2lubmluZyBvZiBjZW50cmFsIGRpcmVjdG9yeSBmaXJzdCByZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5IZWFkZXIub2Zmc2V0ID0gZGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkhlYWRlci50b3RhbEVudHJpZXMgPSB0b3RhbEVudHJpZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRCdWZmZXIgPSBCdWZmZXIuYWxsb2ModG90YWxTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCbG9jay5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTsgLy8gd3JpdGUgZGF0YSBibG9ja3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW5kZXggKz0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRyYWxIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpOyAvLyB3cml0ZSBjZW50cmFsIGRpcmVjdG9yeSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGluZGV4ICs9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1oID0gbWFpbkhlYWRlci50b0JpbmFyeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbW1lbnQuY29weShtaCwgVXRpbHMuQ29uc3RhbnRzLkVOREhEUik7IC8vIGFkZCB6aXAgZmlsZSBjb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1oLmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpOyAvLyB3cml0ZSBtYWluIGhlYWRlclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSB1cGRhdGUgZW50cnkgYW5kIG1haW4gaGVhZGVyIG9mZnNldHMsIHRoZXkgYXJlIG5vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb25nZXIgdmFsaWQgYW5kIHdlIGhhdmUgdG8gcmVzZXQgY29udGVudCB1c2luZyBvdXIgbmV3IGJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKElzc3VlIDY0KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbkJ1ZmZlciA9IG91dEJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZEVudHJpZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKG91dEJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29tcHJlc3MyQnVmZmVyKEFycmF5LmZyb20odGhpcy5lbnRyaWVzKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgb25GYWlsKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuY29uc3QgcHRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBaaXBFbnRyeSA9IHJlcXVpcmUoXCIuL3ppcEVudHJ5XCIpO1xuY29uc3QgWmlwRmlsZSA9IHJlcXVpcmUoXCIuL3ppcEZpbGVcIik7XG5cbmNvbnN0IGdldF9Cb29sID0gKC4uLnZhbCkgPT4gVXRpbHMuZmluZExhc3QodmFsLCAoYykgPT4gdHlwZW9mIGMgPT09IFwiYm9vbGVhblwiKTtcbmNvbnN0IGdldF9TdHIgPSAoLi4udmFsKSA9PiBVdGlscy5maW5kTGFzdCh2YWwsIChjKSA9PiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIik7XG5jb25zdCBnZXRfRnVuID0gKC4uLnZhbCkgPT4gVXRpbHMuZmluZExhc3QodmFsLCAoYykgPT4gdHlwZW9mIGMgPT09IFwiZnVuY3Rpb25cIik7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIG9wdGlvbiBcIm5vU29ydFwiIDogaWYgdHJ1ZSBpdCBkaXNhYmxlcyBmaWxlcyBzb3J0aW5nXG4gICAgbm9Tb3J0OiBmYWxzZSxcbiAgICAvLyByZWFkIGVudHJpZXMgZHVyaW5nIGxvYWQgKGluaXRpYWwgbG9hZGluZyBtYXkgYmUgc2xvd2VyKVxuICAgIHJlYWRFbnRyaWVzOiBmYWxzZSxcbiAgICAvLyBkZWZhdWx0IG1ldGhvZCBpcyBub25lXG4gICAgbWV0aG9kOiBVdGlscy5Db25zdGFudHMuTk9ORSxcbiAgICAvLyBmaWxlIHN5c3RlbVxuICAgIGZzOiBudWxsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKipTdHJpbmcqLyBpbnB1dCwgLyoqIG9iamVjdCAqLyBvcHRpb25zKSB7XG4gICAgbGV0IGluQnVmZmVyID0gbnVsbDtcblxuICAgIC8vIGNyZWF0ZSBvYmplY3QgYmFzZWQgZGVmYXVsdCBvcHRpb25zLCBhbGxvd2luZyB0aGVtIHRvIGJlIG92ZXJ3cml0dGVuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgZGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgLy8gdGVzdCBpbnB1dCB2YXJpYWJsZVxuICAgIGlmIChpbnB1dCAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgaW5wdXQpIHtcbiAgICAgICAgLy8gaWYgdmFsdWUgaXMgbm90IGJ1ZmZlciB3ZSBhY2NlcHQgaXQgdG8gYmUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICAgICAgICBpZiAoIShpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9wdHMsIGlucHV0KTtcbiAgICAgICAgICAgIGlucHV0ID0gb3B0cy5pbnB1dCA/IG9wdHMuaW5wdXQgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAob3B0cy5pbnB1dCkgZGVsZXRlIG9wdHMuaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpbnB1dCBpcyBidWZmZXJcbiAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgICAgIGluQnVmZmVyID0gaW5wdXQ7XG4gICAgICAgICAgICBvcHRzLm1ldGhvZCA9IFV0aWxzLkNvbnN0YW50cy5CVUZGRVI7XG4gICAgICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzc2lnbiBvcHRpb25zXG4gICAgT2JqZWN0LmFzc2lnbihvcHRzLCBvcHRpb25zKTtcblxuICAgIC8vIGluc3RhbmNpYXRlIHV0aWxzIGZpbGVzeXN0ZW1cbiAgICBjb25zdCBmaWxldG9vbHMgPSBuZXcgVXRpbHMob3B0cyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuZGVjb2RlciAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb3B0cy5kZWNvZGVyLmVuY29kZSAhPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBvcHRzLmRlY29kZXIuZGVjb2RlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3B0cy5kZWNvZGVyID0gVXRpbHMuZGVjb2RlcjtcbiAgICB9XG5cbiAgICAvLyBpZiBpbnB1dCBpcyBmaWxlIG5hbWUgd2UgcmV0cmlldmUgaXRzIGNvbnRlbnRcbiAgICBpZiAoaW5wdXQgJiYgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGlucHV0KSB7XG4gICAgICAgIC8vIGxvYWQgemlwIGZpbGVcbiAgICAgICAgaWYgKGZpbGV0b29scy5mcy5leGlzdHNTeW5jKGlucHV0KSkge1xuICAgICAgICAgICAgb3B0cy5tZXRob2QgPSBVdGlscy5Db25zdGFudHMuRklMRTtcbiAgICAgICAgICAgIG9wdHMuZmlsZW5hbWUgPSBpbnB1dDtcbiAgICAgICAgICAgIGluQnVmZmVyID0gZmlsZXRvb2xzLmZzLnJlYWRGaWxlU3luYyhpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuSU5WQUxJRF9GSUxFTkFNRSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHZhcmlhYmxlXG4gICAgY29uc3QgX3ppcCA9IG5ldyBaaXBGaWxlKGluQnVmZmVyLCBvcHRzKTtcblxuICAgIGNvbnN0IHsgY2Fub25pY2FsLCBzYW5pdGl6ZSwgemlwbmFtZWZpeCB9ID0gVXRpbHM7XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRyeSgvKipPYmplY3QqLyBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgJiYgX3ppcCkge1xuICAgICAgICAgICAgdmFyIGl0ZW07XG4gICAgICAgICAgICAvLyBJZiBlbnRyeSB3YXMgZ2l2ZW4gYXMgYSBmaWxlIG5hbWVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIpIGl0ZW0gPSBfemlwLmdldEVudHJ5KHB0aC5wb3NpeC5ub3JtYWxpemUoZW50cnkpKTtcbiAgICAgICAgICAgIC8vIGlmIGVudHJ5IHdhcyBnaXZlbiBhcyBhIFppcEVudHJ5IG9iamVjdFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkuZW50cnlOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBlbnRyeS5oZWFkZXIgIT09IFwidW5kZWZpbmVkXCIpIGl0ZW0gPSBfemlwLmdldEVudHJ5KGVudHJ5LmVudHJ5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4UGF0aCh6aXBQYXRoKSB7XG4gICAgICAgIGNvbnN0IHsgam9pbiwgbm9ybWFsaXplLCBzZXAgfSA9IHB0aC5wb3NpeDtcbiAgICAgICAgLy8gY29udmVydCB3aW5kb3dzIGZpbGUgc2VwYXJhdG9ycyBhbmQgbm9ybWFsaXplXG4gICAgICAgIHJldHVybiBqb2luKFwiLlwiLCBub3JtYWxpemUoc2VwICsgemlwUGF0aC5zcGxpdChcIlxcXFxcIikuam9pbihzZXApICsgc2VwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsZW5hbWVGaWx0ZXIoZmlsdGVyZm4pIHtcbiAgICAgICAgaWYgKGZpbHRlcmZuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAvLyBpZiBmaWx0ZXIgaXMgUmVnRXhwIHdyYXAgaXRcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHJ4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcngudGVzdChmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKGZpbHRlcmZuKTtcbiAgICAgICAgfSBlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBmaWx0ZXJmbikge1xuICAgICAgICAgICAgLy8gaWYgZmlsdGVyIGlzIG5vdCBmdW5jdGlvbiB3ZSB3aWxsIHJlcGxhY2UgaXRcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJmbjtcbiAgICB9XG5cbiAgICAvLyBrZWVwIGxhc3QgY2hhcmFjdGVyIG9uIGZvbGRlcnNcbiAgICBjb25zdCByZWxhdGl2ZVBhdGggPSAobG9jYWwsIGVudHJ5KSA9PiB7XG4gICAgICAgIGxldCBsYXN0Q2hhciA9IGVudHJ5LnNsaWNlKC0xKTtcbiAgICAgICAgbGFzdENoYXIgPSBsYXN0Q2hhciA9PT0gZmlsZXRvb2xzLnNlcCA/IGZpbGV0b29scy5zZXAgOiBcIlwiO1xuICAgICAgICByZXR1cm4gcHRoLnJlbGF0aXZlKGxvY2FsLCBlbnRyeSkgKyBsYXN0Q2hhcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBnaXZlbiBlbnRyeSBmcm9tIHRoZSBhcmNoaXZlIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IGFzIGEgQnVmZmVyIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnkgWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7QnVmZmVyfHN0cmluZ30gW3Bhc3NdIC0gcGFzc3dvcmRcbiAgICAgICAgICogQHJldHVybiBCdWZmZXIgb3IgTnVsbCBpbiBjYXNlIG9mIGVycm9yXG4gICAgICAgICAqL1xuICAgICAgICByZWFkRmlsZTogZnVuY3Rpb24gKGVudHJ5LCBwYXNzKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbSAmJiBpdGVtLmdldERhdGEocGFzcykpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaG93IG1hbnkgY2hpbGQgZWxlbWVudHMgaGFzIG9uIGVudHJ5IChkaXJlY3Rvcmllcykgb24gZmlsZXMgaXQgaXMgYWx3YXlzIDBcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5IFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJucyB7aW50ZWdlcn1cbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkQ291bnQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF96aXAuZ2V0Q2hpbGRDb3VudChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXN5bmNocm9ub3VzIHJlYWRGaWxlXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBCdWZmZXIgb3IgTnVsbCBpbiBjYXNlIG9mIGVycm9yXG4gICAgICAgICAqL1xuICAgICAgICByZWFkRmlsZUFzeW5jOiBmdW5jdGlvbiAoZW50cnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXREYXRhQXN5bmMoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBcImdldEVudHJ5IGZhaWxlZCBmb3I6XCIgKyBlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBnaXZlbiBlbnRyeSBmcm9tIHRoZSBhcmNoaXZlIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IGFzIHBsYWluIHRleHQgaW4gdGhlIGdpdmVuIGVuY29kaW5nXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeSAtIFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5jb2RpbmcgLSBPcHRpb25hbC4gSWYgbm8gZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHV0ZjggaXMgdXNlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZEFzVGV4dDogZnVuY3Rpb24gKGVudHJ5LCBlbmNvZGluZykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gaXRlbS5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoZW5jb2RpbmcgfHwgXCJ1dGY4XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3luY2hyb25vdXMgcmVhZEFzVGV4dFxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnkgWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZW5jb2RpbmddIC0gT3B0aW9uYWwuIElmIG5vIGVuY29kaW5nIGlzIHNwZWNpZmllZCB1dGY4IGlzIHVzZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRBc1RleHRBc3luYzogZnVuY3Rpb24gKGVudHJ5LCBjYWxsYmFjaywgZW5jb2RpbmcpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldERhdGFBc3luYyhmdW5jdGlvbiAoZGF0YSwgZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YS50b1N0cmluZyhlbmNvZGluZyB8fCBcInV0ZjhcIikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZW50cnkgZnJvbSB0aGUgZmlsZSBvciB0aGUgZW50cnkgYW5kIGFsbCBpdCdzIG5lc3RlZCBkaXJlY3RvcmllcyBhbmQgZmlsZXMgaWYgdGhlIGdpdmVuIGVudHJ5IGlzIGEgZGlyZWN0b3J5XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uIChlbnRyeSwgd2l0aHN1YmZvbGRlcnMgPSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAVE9ETzogdGVzdCBkZWxldGVGaWxlXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgX3ppcC5kZWxldGVGaWxlKGl0ZW0uZW50cnlOYW1lLCB3aXRoc3ViZm9sZGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZW50cnkgZnJvbSB0aGUgZmlsZSBvciBkaXJlY3Rvcnkgd2l0aG91dCBhZmZlY3RpbmcgYW55IG5lc3RlZCBlbnRyaWVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZUVudHJ5OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIC8vIEBUT0RPOiB0ZXN0IGRlbGV0ZUVudHJ5XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgX3ppcC5kZWxldGVFbnRyeShpdGVtLmVudHJ5TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjb21tZW50IHRvIHRoZSB6aXAuIFRoZSB6aXAgbXVzdCBiZSByZXdyaXR0ZW4gYWZ0ZXIgYWRkaW5nIHRoZSBjb21tZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkWmlwQ29tbWVudDogZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEBUT0RPOiB0ZXN0IGFkZFppcENvbW1lbnRcbiAgICAgICAgICAgIF96aXAuY29tbWVudCA9IGNvbW1lbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHppcCBjb21tZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBnZXRaaXBDb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ppcC5jb21tZW50IHx8IFwiXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjb21tZW50IHRvIGEgc3BlY2lmaWVkIHppcEVudHJ5LiBUaGUgemlwIG11c3QgYmUgcmV3cml0dGVuIGFmdGVyIGFkZGluZyB0aGUgY29tbWVudFxuICAgICAgICAgKiBUaGUgY29tbWVudCBjYW5ub3QgZXhjZWVkIDY1NTM1IGNoYXJhY3RlcnMgaW4gbGVuZ3RoXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl9IGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50XG4gICAgICAgICAqL1xuICAgICAgICBhZGRaaXBFbnRyeUNvbW1lbnQ6IGZ1bmN0aW9uIChlbnRyeSwgY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY29tbWVudCA9IGNvbW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGNvbW1lbnQgb2YgdGhlIHNwZWNpZmllZCBlbnRyeVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0WmlwRW50cnlDb21tZW50OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb21tZW50IHx8IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgY29udGVudCBvZiBhbiBleGlzdGluZyBlbnRyeSBpbnNpZGUgdGhlIGFyY2hpdmUuIFRoZSB6aXAgbXVzdCBiZSByZXdyaXR0ZW4gYWZ0ZXIgdXBkYXRpbmcgdGhlIGNvbnRlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeX0gZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtCdWZmZXJ9IGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZUZpbGU6IGZ1bmN0aW9uIChlbnRyeSwgY29udGVudCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGZpbGUgZnJvbSB0aGUgZGlzayB0byB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxQYXRoIEZpbGUgdG8gYWRkIHRvIHppcFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3ppcFBhdGhdIE9wdGlvbmFsIHBhdGggaW5zaWRlIHRoZSB6aXBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt6aXBOYW1lXSBPcHRpb25hbCBuYW1lIGZvciB0aGUgZmlsZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIE9wdGlvbmFsIGZpbGUgY29tbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGaWxlOiBmdW5jdGlvbiAobG9jYWxQYXRoLCB6aXBQYXRoLCB6aXBOYW1lLCBjb21tZW50KSB7XG4gICAgICAgICAgICBpZiAoZmlsZXRvb2xzLmZzLmV4aXN0c1N5bmMobG9jYWxQYXRoKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpeCBaaXBQYXRoXG4gICAgICAgICAgICAgICAgemlwUGF0aCA9IHppcFBhdGggPyBmaXhQYXRoKHppcFBhdGgpIDogXCJcIjtcblxuICAgICAgICAgICAgICAgIC8vIHAgLSBsb2NhbCBmaWxlIG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gcHRoLndpbjMyLmJhc2VuYW1lKHB0aC53aW4zMi5ub3JtYWxpemUobG9jYWxQYXRoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgZmlsZSBuYW1lIGludG8gemlwcGF0aFxuICAgICAgICAgICAgICAgIHppcFBhdGggKz0gemlwTmFtZSA/IHppcE5hbWUgOiBwO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVhZCBmaWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBfYXR0ciA9IGZpbGV0b29scy5mcy5zdGF0U3luYyhsb2NhbFBhdGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZpbGUgY29udGVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfYXR0ci5pc0ZpbGUoKSA/IGZpbGV0b29scy5mcy5yZWFkRmlsZVN5bmMobG9jYWxQYXRoKSA6IEJ1ZmZlci5hbGxvYygwKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGZvbGRlclxuICAgICAgICAgICAgICAgIGlmIChfYXR0ci5pc0RpcmVjdG9yeSgpKSB6aXBQYXRoICs9IGZpbGV0b29scy5zZXA7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgZmlsZSBpbnRvIHppcCBmaWxlXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWxlKHppcFBhdGgsIGRhdGEsIGNvbW1lbnQsIF9hdHRyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkZJTEVfTk9UX0ZPVU5EKGxvY2FsUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIGZvciBzaG93aW5nIGlmIGV2ZXJ5dGhpbmcgd2FzIGRvbmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjYWxsYmFjayBkb25lQ2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtFcnJvcn0gZXJyIC0gRXJyb3Igb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9uZSAtIHdhcyByZXF1ZXN0IGZ1bGx5IGNvbXBsZXRlZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGZpbGUgZnJvbSB0aGUgZGlzayB0byB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyhvYmplY3R8c3RyaW5nKX0gb3B0aW9ucyAtIG9wdGlvbnMgb2JqZWN0LCBpZiBpdCBpcyBzdHJpbmcgaXQgdXMgdXNlZCBhcyBsb2NhbFBhdGguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsUGF0aCAtIExvY2FsIHBhdGggdG8gdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jb21tZW50XSAtIE9wdGlvbmFsIGZpbGUgY29tbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnppcFBhdGhdIC0gT3B0aW9uYWwgcGF0aCBpbnNpZGUgdGhlIHppcFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuemlwTmFtZV0gLSBPcHRpb25hbCBuYW1lIGZvciB0aGUgZmlsZVxuICAgICAgICAgKiBAcGFyYW0ge2RvbmVDYWxsYmFja30gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBoYW5kbGVzIHRoZSByZXNwb25zZS5cbiAgICAgICAgICovXG4gICAgICAgIGFkZExvY2FsRmlsZUFzeW5jOiBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMgOiB7IGxvY2FsUGF0aDogb3B0aW9ucyB9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQYXRoID0gcHRoLnJlc29sdmUob3B0aW9ucy5sb2NhbFBhdGgpO1xuICAgICAgICAgICAgY29uc3QgeyBjb21tZW50IH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgbGV0IHsgemlwUGF0aCwgemlwTmFtZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBmaWxldG9vbHMuZnMuc3RhdChsb2NhbFBhdGgsIGZ1bmN0aW9uIChlcnIsIHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVyciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIGZpeCBaaXBQYXRoXG4gICAgICAgICAgICAgICAgemlwUGF0aCA9IHppcFBhdGggPyBmaXhQYXRoKHppcFBhdGgpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAvLyBwIC0gbG9jYWwgZmlsZSBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHB0aC53aW4zMi5iYXNlbmFtZShwdGgud2luMzIubm9ybWFsaXplKGxvY2FsUGF0aCkpO1xuICAgICAgICAgICAgICAgIC8vIGFkZCBmaWxlIG5hbWUgaW50byB6aXBwYXRoXG4gICAgICAgICAgICAgICAgemlwUGF0aCArPSB6aXBOYW1lID8gemlwTmFtZSA6IHA7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnJlYWRGaWxlKGxvY2FsUGF0aCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVyciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRGaWxlKHppcFBhdGgsIGRhdGEsIGNvbW1lbnQsIHN0YXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICB6aXBQYXRoICs9IGZpbGV0b29scy5zZXA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkRmlsZSh6aXBQYXRoLCBCdWZmZXIuYWxsb2MoMCksIGNvbW1lbnQsIHN0YXRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEltbWVkaWF0ZShjYWxsYmFjaywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGxvY2FsIGRpcmVjdG9yeSBhbmQgYWxsIGl0cyBuZXN0ZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIHRvIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbFBhdGggLSBsb2NhbCBwYXRoIHRvIHRoZSBmb2xkZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt6aXBQYXRoXSAtIG9wdGlvbmFsIHBhdGggaW5zaWRlIHppcFxuICAgICAgICAgKiBAcGFyYW0geyhSZWdFeHB8ZnVuY3Rpb24pfSBbZmlsdGVyXSAtIG9wdGlvbmFsIFJlZ0V4cCBvciBGdW5jdGlvbiBpZiBmaWxlcyBtYXRjaCB3aWxsIGJlIGluY2x1ZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGb2xkZXI6IGZ1bmN0aW9uIChsb2NhbFBhdGgsIHppcFBhdGgsIGZpbHRlcikge1xuICAgICAgICAgICAgLy8gUHJlcGFyZSBmaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbGVuYW1lRmlsdGVyKGZpbHRlcik7XG5cbiAgICAgICAgICAgIC8vIGZpeCBaaXBQYXRoXG4gICAgICAgICAgICB6aXBQYXRoID0gemlwUGF0aCA/IGZpeFBhdGgoemlwUGF0aCkgOiBcIlwiO1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgdGhlIHBhdGggZmlyc3RcbiAgICAgICAgICAgIGxvY2FsUGF0aCA9IHB0aC5ub3JtYWxpemUobG9jYWxQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGV0b29scy5mcy5leGlzdHNTeW5jKGxvY2FsUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGZpbGV0b29scy5maW5kRmlsZXMobG9jYWxQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlcGF0aCBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHB0aC5qb2luKHppcFBhdGgsIHJlbGF0aXZlUGF0aChsb2NhbFBhdGgsIGZpbGVwYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRMb2NhbEZpbGUoZmlsZXBhdGgsIHB0aC5kaXJuYW1lKHApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkZJTEVfTk9UX0ZPVU5EKGxvY2FsUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzeW5jaHJvbm91cyBhZGRMb2NhbEZvbGRlclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxQYXRoXG4gICAgICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbemlwUGF0aF0gb3B0aW9uYWwgcGF0aCBpbnNpZGUgemlwXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfGZ1bmN0aW9ufSBbZmlsdGVyXSBvcHRpb25hbCBSZWdFeHAgb3IgRnVuY3Rpb24gaWYgZmlsZXMgbWF0Y2ggd2lsbFxuICAgICAgICAgKiAgICAgICAgICAgICAgIGJlIGluY2x1ZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGb2xkZXJBc3luYzogZnVuY3Rpb24gKGxvY2FsUGF0aCwgY2FsbGJhY2ssIHppcFBhdGgsIGZpbHRlcikge1xuICAgICAgICAgICAgLy8gUHJlcGFyZSBmaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbGVuYW1lRmlsdGVyKGZpbHRlcik7XG5cbiAgICAgICAgICAgIC8vIGZpeCBaaXBQYXRoXG4gICAgICAgICAgICB6aXBQYXRoID0gemlwUGF0aCA/IGZpeFBhdGgoemlwUGF0aCkgOiBcIlwiO1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgdGhlIHBhdGggZmlyc3RcbiAgICAgICAgICAgIGxvY2FsUGF0aCA9IHB0aC5ub3JtYWxpemUobG9jYWxQYXRoKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgZmlsZXRvb2xzLmZzLm9wZW4obG9jYWxQYXRoLCBcInJcIiwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmNvZGUgPT09IFwiRU5PRU5UXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBVdGlscy5FcnJvcnMuRklMRV9OT1RfRk9VTkQobG9jYWxQYXRoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IGZpbGV0b29scy5maW5kRmlsZXMobG9jYWxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAtMTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVwYXRoID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSByZWxhdGl2ZVBhdGgobG9jYWxQYXRoLCBmaWxlcGF0aCkuc3BsaXQoXCJcXFxcXCIpLmpvaW4oXCIvXCIpOyAvL3dpbmRvd3MgZml4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csIFwiXCIpOyAvLyBhY2NlbnQgZml4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcihwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMuc3RhdChmaWxlcGF0aCwgZnVuY3Rpb24gKGVyMCwgc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcjApIGNhbGxiYWNrKHVuZGVmaW5lZCwgZXIwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0cy5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy5yZWFkRmlsZShmaWxlcGF0aCwgZnVuY3Rpb24gKGVyMSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGVyMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEZpbGUoemlwUGF0aCArIHAsIGRhdGEsIFwiXCIsIHN0YXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEZpbGUoemlwUGF0aCArIHAgKyBcIi9cIiwgQnVmZmVyLmFsbG9jKDApLCBcIlwiLCBzdGF0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGxvY2FsIGRpcmVjdG9yeSBhbmQgYWxsIGl0cyBuZXN0ZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIHRvIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nfSBvcHRpb25zIC0gb3B0aW9ucyBvYmplY3QsIGlmIGl0IGlzIHN0cmluZyBpdCB1cyB1c2VkIGFzIGxvY2FsUGF0aC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxQYXRoIC0gTG9jYWwgcGF0aCB0byB0aGUgZm9sZGVyLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuemlwUGF0aF0gLSBvcHRpb25hbCBwYXRoIGluc2lkZSB6aXAuXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfGZ1bmN0aW9ufSBbb3B0aW9ucy5maWx0ZXJdIC0gb3B0aW9uYWwgUmVnRXhwIG9yIEZ1bmN0aW9uIGlmIGZpbGVzIG1hdGNoIHdpbGwgYmUgaW5jbHVkZWQuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb258c3RyaW5nfSBbb3B0aW9ucy5uYW1lZml4XSAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGhlbHAgZml4IGZpbGVuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7ZG9uZUNhbGxiYWNrfSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IGhhbmRsZXMgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGb2xkZXJBc3luYzI6IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zIDogeyBsb2NhbFBhdGg6IG9wdGlvbnMgfTtcbiAgICAgICAgICAgIGxvY2FsUGF0aCA9IHB0aC5yZXNvbHZlKGZpeFBhdGgob3B0aW9ucy5sb2NhbFBhdGgpKTtcbiAgICAgICAgICAgIGxldCB7IHppcFBhdGgsIGZpbHRlciwgbmFtZWZpeCB9ID0gb3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKGZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IChmdW5jdGlvbiAocngpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ4LnRlc3QoZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKGZpbHRlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIGZpbHRlcikge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZml4IFppcFBhdGhcbiAgICAgICAgICAgIHppcFBhdGggPSB6aXBQYXRoID8gZml4UGF0aCh6aXBQYXRoKSA6IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIE5hbWVmaXggZnVuY3Rpb25cbiAgICAgICAgICAgIGlmIChuYW1lZml4ID09IFwibGF0aW4xXCIpIHtcbiAgICAgICAgICAgICAgICBuYW1lZml4ID0gKHN0cikgPT5cbiAgICAgICAgICAgICAgICAgICAgc3RyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxceDIwLVxceDdFXS9nLCBcIlwiKTsgLy8gYWNjZW50IGZpeCAobGF0aW4xIGNoYXJhY2VycyBvbmx5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hbWVmaXggIT09IFwiZnVuY3Rpb25cIikgbmFtZWZpeCA9IChzdHIpID0+IHN0cjtcblxuICAgICAgICAgICAgLy8gaW50ZXJuYWwsIGNyZWF0ZSByZWxhdGl2ZSBwYXRoICsgZml4IHRoZSBuYW1lXG4gICAgICAgICAgICBjb25zdCByZWxQYXRoRml4ID0gKGVudHJ5KSA9PiBwdGguam9pbih6aXBQYXRoLCBuYW1lZml4KHJlbGF0aXZlUGF0aChsb2NhbFBhdGgsIGVudHJ5KSkpO1xuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWVGaXggPSAoZW50cnkpID0+IHB0aC53aW4zMi5iYXNlbmFtZShwdGgud2luMzIubm9ybWFsaXplKG5hbWVmaXgoZW50cnkpKSk7XG5cbiAgICAgICAgICAgIGZpbGV0b29scy5mcy5vcGVuKGxvY2FsUGF0aCwgXCJyXCIsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIGVyci5jb2RlID09PSBcIkVOT0VOVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgVXRpbHMuRXJyb3JzLkZJTEVfTk9UX0ZPVU5EKGxvY2FsUGF0aCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZmluZEZpbGVzQXN5bmMobG9jYWxQYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlRW50cmllcyA9IGZpbGVFbnRyaWVzLmZpbHRlcigoZGlyKSA9PiBmaWx0ZXIocmVsUGF0aEZpeChkaXIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGVFbnRyaWVzLmxlbmd0aCkgY2FsbGJhY2sodW5kZWZpbmVkLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlRW50cmllcy5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChuZXh0LCBlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVyciwgZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciB8fCBkb25lID09PSBmYWxzZSkgcmV0dXJuIHNldEltbWVkaWF0ZShuZXh0LCBlcnIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRMb2NhbEZpbGVBc3luYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUGF0aDogZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcFBhdGg6IHB0aC5kaXJuYW1lKHJlbFBhdGhGaXgoZW50cnkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemlwTmFtZTogZmlsZU5hbWVGaXgoZW50cnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBsb2NhbCBkaXJlY3RvcnkgYW5kIGFsbCBpdHMgbmVzdGVkIGZpbGVzIGFuZCBkaXJlY3RvcmllcyB0byB0aGUgYXJjaGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxQYXRoIC0gcGF0aCB3aGVyZSBmaWxlcyB3aWxsIGJlIGV4dHJhY3RlZFxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgLSBvcHRpb25hbCBwcm9wZXJ0aWVzXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuemlwUGF0aF0gLSBvcHRpb25hbCBwYXRoIGluc2lkZSB6aXBcbiAgICAgICAgICogQHBhcmFtIHtSZWdFeHB8ZnVuY3Rpb259IFtwcm9wcy5maWx0ZXJdIC0gb3B0aW9uYWwgUmVnRXhwIG9yIEZ1bmN0aW9uIGlmIGZpbGVzIG1hdGNoIHdpbGwgYmUgaW5jbHVkZWQuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb258c3RyaW5nfSBbcHJvcHMubmFtZWZpeF0gLSBvcHRpb25hbCBmdW5jdGlvbiB0byBoZWxwIGZpeCBmaWxlbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGb2xkZXJQcm9taXNlOiBmdW5jdGlvbiAobG9jYWxQYXRoLCBwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExvY2FsRm9sZGVyQXN5bmMyKE9iamVjdC5hc3NpZ24oeyBsb2NhbFBhdGggfSwgcHJvcHMpLCAoZXJyLCBkb25lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGVudHJ5IChmaWxlIG9yIGRpcmVjdG9yeSkgaW4gdGhlIHppcCBmaWxlLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBkaXJlY3RvcnkgdGhlIGVudHJ5TmFtZSBtdXN0IGVuZCBpbiAvIGFuZCBhIG51bGwgYnVmZmVyIHNob3VsZCBiZSBwcm92aWRlZC5cbiAgICAgICAgICogQ29tbWVudCBhbmQgYXR0cmlidXRlcyBhcmUgb3B0aW9uYWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGVudHJ5TmFtZVxuICAgICAgICAgKiBAcGFyYW0ge0J1ZmZlciB8IHN0cmluZ30gY29udGVudCAtIGZpbGUgY29udGVudCBhcyBidWZmZXIgb3IgdXRmOCBjb2RlZCBzdHJpbmdcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb21tZW50XSAtIGZpbGUgY29tbWVudFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlciB8IG9iamVjdH0gW2F0dHJdIC0gbnVtYmVyIGFzIHVuaXggZmlsZSBwZXJtaXNzaW9ucywgb2JqZWN0IGFzIGZpbGVzeXN0ZW0gU3RhdHMgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBhZGRGaWxlOiBmdW5jdGlvbiAoZW50cnlOYW1lLCBjb250ZW50LCBjb21tZW50LCBhdHRyKSB7XG4gICAgICAgICAgICBlbnRyeU5hbWUgPSB6aXBuYW1lZml4KGVudHJ5TmFtZSk7XG4gICAgICAgICAgICBsZXQgZW50cnkgPSBnZXRFbnRyeShlbnRyeU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlID0gZW50cnkgIT0gbnVsbDtcblxuICAgICAgICAgICAgLy8gcHJlcGFyZSBuZXcgZW50cnlcbiAgICAgICAgICAgIGlmICghdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZW50cnkgPSBuZXcgWmlwRW50cnkob3B0cyk7XG4gICAgICAgICAgICAgICAgZW50cnkuZW50cnlOYW1lID0gZW50cnlOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuY29tbWVudCA9IGNvbW1lbnQgfHwgXCJcIjtcblxuICAgICAgICAgICAgY29uc3QgaXNTdGF0ID0gXCJvYmplY3RcIiA9PT0gdHlwZW9mIGF0dHIgJiYgYXR0ciBpbnN0YW5jZW9mIGZpbGV0b29scy5mcy5TdGF0cztcblxuICAgICAgICAgICAgLy8gbGFzdCBtb2RpZmljYXRpb24gdGltZSBmcm9tIGZpbGUgc3RhdHNcbiAgICAgICAgICAgIGlmIChpc1N0YXQpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5oZWFkZXIudGltZSA9IGF0dHIubXRpbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBmaWxlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdmFyIGZpbGVhdHRyID0gZW50cnkuaXNEaXJlY3RvcnkgPyAweDEwIDogMDsgLy8gKE1TLURPUyBkaXJlY3RvcnkgZmxhZylcblxuICAgICAgICAgICAgLy8gZXh0ZW5kZWQgYXR0cmlidXRlcyBmaWVsZCBmb3IgVW5peFxuICAgICAgICAgICAgLy8gc2V0IGZpbGUgdHlwZSBlaXRoZXIgU19JRkRJUiAvIFNfSUZSRUdcbiAgICAgICAgICAgIGxldCB1bml4ID0gZW50cnkuaXNEaXJlY3RvcnkgPyAweDQwMDAgOiAweDgwMDA7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXQpIHtcbiAgICAgICAgICAgICAgICAvLyBGaWxlIGF0dHJpYnV0ZXMgZnJvbSBmaWxlIHN0YXRzXG4gICAgICAgICAgICAgICAgdW5peCB8PSAweGZmZiAmIGF0dHIubW9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJudW1iZXJcIiA9PT0gdHlwZW9mIGF0dHIpIHtcbiAgICAgICAgICAgICAgICAvLyBhdHRyIGZyb20gZ2l2ZW4gYXR0ciB2YWx1ZXNcbiAgICAgICAgICAgICAgICB1bml4IHw9IDB4ZmZmICYgYXR0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB2YWx1ZXM6XG4gICAgICAgICAgICAgICAgdW5peCB8PSBlbnRyeS5pc0RpcmVjdG9yeSA/IDBvNzU1IDogMG82NDQ7IC8vIHBlcm1pc3Npb25zIChkcnd4ci14ci14KSBvciAoLXItd3ItLXItLSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsZWF0dHIgPSAoZmlsZWF0dHIgfCAodW5peCA8PCAxNikpID4+PiAwOyAvLyBhZGQgYXR0cmlidXRlc1xuXG4gICAgICAgICAgICBlbnRyeS5hdHRyID0gZmlsZWF0dHI7XG5cbiAgICAgICAgICAgIGVudHJ5LnNldERhdGEoY29udGVudCk7XG4gICAgICAgICAgICBpZiAoIXVwZGF0ZSkgX3ppcC5zZXRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBaaXBFbnRyeSBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgZmlsZXMgYW5kIGZvbGRlcnMgaW5zaWRlIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFzc3dvcmRdXG4gICAgICAgICAqIEByZXR1cm5zIEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBnZXRFbnRyaWVzOiBmdW5jdGlvbiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAgIF96aXAucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgIHJldHVybiBfemlwID8gX3ppcC5lbnRyaWVzIDogW107XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBaaXBFbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9yIGZvbGRlciBzcGVjaWZpZWQgYnkgYGBuYW1lYGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4gWmlwRW50cnlcbiAgICAgICAgICovXG4gICAgICAgIGdldEVudHJ5OiBmdW5jdGlvbiAoLyoqU3RyaW5nKi8gbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEVudHJ5KG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVudHJ5Q291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfemlwLmdldEVudHJ5Q291bnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBfemlwLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgZ2l2ZW4gZW50cnkgdG8gdGhlIGdpdmVuIHRhcmdldFBhdGhcbiAgICAgICAgICogSWYgdGhlIGVudHJ5IGlzIGEgZGlyZWN0b3J5IGluc2lkZSB0aGUgYXJjaGl2ZSwgdGhlIGVudGlyZSBkaXJlY3RvcnkgYW5kIGl0J3Mgc3ViZGlyZWN0b3JpZXMgd2lsbCBiZSBleHRyYWN0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8WmlwRW50cnl9IGVudHJ5IC0gWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRQYXRoIC0gVGFyZ2V0IGZvbGRlciB3aGVyZSB0byB3cml0ZSB0aGUgZmlsZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFttYWludGFpbkVudHJ5UGF0aD10cnVlXSAtIElmIG1haW50YWluRW50cnlQYXRoIGlzIHRydWUgYW5kIHRoZSBlbnRyeSBpcyBpbnNpZGUgYSBmb2xkZXIsIHRoZSBlbnRyeSBmb2xkZXIgd2lsbCBiZSBjcmVhdGVkIGluIHRhcmdldFBhdGggYXMgd2VsbC4gRGVmYXVsdCBpcyBUUlVFXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZT1mYWxzZV0gLSBJZiB0aGUgZmlsZSBhbHJlYWR5IGV4aXN0cyBhdCB0aGUgdGFyZ2V0IHBhdGgsIHRoZSBmaWxlIHdpbGwgYmUgb3ZlcndyaXRlbiBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcmlnaW5hbFBlcm1pc3Npb249ZmFsc2VdIC0gVGhlIGZpbGUgd2lsbCBiZSBzZXQgYXMgdGhlIHBlcm1pc3Npb24gZnJvbSB0aGUgZW50cnkgaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW291dEZpbGVOYW1lXSAtIFN0cmluZyBJZiBzZXQgd2lsbCBvdmVycmlkZSB0aGUgZmlsZW5hbWUgb2YgdGhlIGV4dHJhY3RlZCBmaWxlIChPbmx5IHdvcmtzIGlmIHRoZSBlbnRyeSBpcyBhIGZpbGUpXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZXh0cmFjdEVudHJ5VG86IGZ1bmN0aW9uIChlbnRyeSwgdGFyZ2V0UGF0aCwgbWFpbnRhaW5FbnRyeVBhdGgsIG92ZXJ3cml0ZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgb3V0RmlsZU5hbWUpIHtcbiAgICAgICAgICAgIG92ZXJ3cml0ZSA9IGdldF9Cb29sKGZhbHNlLCBvdmVyd3JpdGUpO1xuICAgICAgICAgICAga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA9IGdldF9Cb29sKGZhbHNlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIG1haW50YWluRW50cnlQYXRoID0gZ2V0X0Jvb2wodHJ1ZSwgbWFpbnRhaW5FbnRyeVBhdGgpO1xuICAgICAgICAgICAgb3V0RmlsZU5hbWUgPSBnZXRfU3RyKGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIG91dEZpbGVOYW1lKTtcblxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuTk9fRU5UUlkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGVudHJ5TmFtZSA9IGNhbm9uaWNhbChpdGVtLmVudHJ5TmFtZSk7XG5cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzYW5pdGl6ZSh0YXJnZXRQYXRoLCBvdXRGaWxlTmFtZSAmJiAhaXRlbS5pc0RpcmVjdG9yeSA/IG91dEZpbGVOYW1lIDogbWFpbnRhaW5FbnRyeVBhdGggPyBlbnRyeU5hbWUgOiBwdGguYmFzZW5hbWUoZW50cnlOYW1lKSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3ppcC5nZXRFbnRyeUNoaWxkcmVuKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pc0RpcmVjdG9yeSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGNoaWxkLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQ0FOVF9FWFRSQUNUX0ZJTEUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGNhbm9uaWNhbChjaGlsZC5lbnRyeU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gc2FuaXRpemUodGFyZ2V0UGF0aCwgbWFpbnRhaW5FbnRyeVBhdGggPyBuYW1lIDogcHRoLmJhc2VuYW1lKG5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJldmVyc2Ugb3BlcmF0aW9uIGZvciBhdHRyIGRlcGVuZCBvbiBtZXRob2QgYWRkRmlsZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVBdHRyID0ga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA/IGNoaWxkLmhlYWRlci5maWxlQXR0ciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLndyaXRlRmlsZVRvKGNoaWxkTmFtZSwgY29udGVudCwgb3ZlcndyaXRlLCBmaWxlQXR0cik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gaXRlbS5nZXREYXRhKF96aXAucGFzc3dvcmQpO1xuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB0aHJvdyBVdGlscy5FcnJvcnMuQ0FOVF9FWFRSQUNUX0ZJTEUoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGV0b29scy5mcy5leGlzdHNTeW5jKHRhcmdldCkgJiYgIW92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5DQU5UX09WRVJSSURFKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgcmV2ZXJzZSBvcGVyYXRpb24gZm9yIGF0dHIgZGVwZW5kIG9uIG1ldGhvZCBhZGRGaWxlKClcbiAgICAgICAgICAgIGNvbnN0IGZpbGVBdHRyID0ga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA/IGVudHJ5LmhlYWRlci5maWxlQXR0ciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZpbGV0b29scy53cml0ZUZpbGVUbyh0YXJnZXQsIGNvbnRlbnQsIG92ZXJ3cml0ZSwgZmlsZUF0dHIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdCB0aGUgYXJjaGl2ZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Bhc3NdXG4gICAgICAgICAqL1xuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAocGFzcykge1xuICAgICAgICAgICAgaWYgKCFfemlwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBlbnRyeSBpbiBfemlwLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gX3ppcC5lbnRyaWVzW2VudHJ5XS5nZXREYXRhKHBhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBlbnRpcmUgYXJjaGl2ZSB0byB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGFyZ2V0IGxvY2F0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZT1mYWxzZV0gSWYgdGhlIGZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGhlIHRhcmdldCBwYXRoLCB0aGUgZmlsZSB3aWxsIGJlIG92ZXJ3cml0ZW4gaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgRkFMU0VcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBba2VlcE9yaWdpbmFsUGVybWlzc2lvbj1mYWxzZV0gVGhlIGZpbGUgd2lsbCBiZSBzZXQgYXMgdGhlIHBlcm1pc3Npb24gZnJvbSB0aGUgZW50cnkgaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgRkFMU0VcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8QnVmZmVyfSBbcGFzc10gcGFzc3dvcmRcbiAgICAgICAgICovXG4gICAgICAgIGV4dHJhY3RBbGxUbzogZnVuY3Rpb24gKHRhcmdldFBhdGgsIG92ZXJ3cml0ZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgcGFzcykge1xuICAgICAgICAgICAga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA9IGdldF9Cb29sKGZhbHNlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIHBhc3MgPSBnZXRfU3RyKGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIHBhc3MpO1xuICAgICAgICAgICAgb3ZlcndyaXRlID0gZ2V0X0Jvb2woZmFsc2UsIG92ZXJ3cml0ZSk7XG4gICAgICAgICAgICBpZiAoIV96aXApIHRocm93IFV0aWxzLkVycm9ycy5OT19aSVAoKTtcblxuICAgICAgICAgICAgX3ppcC5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5TmFtZSA9IHNhbml0aXplKHRhcmdldFBhdGgsIGNhbm9uaWNhbChlbnRyeS5lbnRyeU5hbWUpKTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLm1ha2VEaXIoZW50cnlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGVudHJ5LmdldERhdGEocGFzcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5DQU5UX0VYVFJBQ1RfRklMRSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUaGUgcmV2ZXJzZSBvcGVyYXRpb24gZm9yIGF0dHIgZGVwZW5kIG9uIG1ldGhvZCBhZGRGaWxlKClcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlQXR0ciA9IGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPyBlbnRyeS5oZWFkZXIuZmlsZUF0dHIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZmlsZXRvb2xzLndyaXRlRmlsZVRvKGVudHJ5TmFtZSwgY29udGVudCwgb3ZlcndyaXRlLCBmaWxlQXR0cik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnV0aW1lc1N5bmMoZW50cnlOYW1lLCBlbnRyeS5oZWFkZXIudGltZSwgZW50cnkuaGVhZGVyLnRpbWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQ0FOVF9FWFRSQUNUX0ZJTEUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXN5bmNocm9ub3VzIGV4dHJhY3RBbGxUb1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0UGF0aCBUYXJnZXQgbG9jYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3ZlcndyaXRlPWZhbHNlXSBJZiB0aGUgZmlsZSBhbHJlYWR5IGV4aXN0cyBhdCB0aGUgdGFyZ2V0IHBhdGgsIHRoZSBmaWxlIHdpbGwgYmUgb3ZlcndyaXRlbiBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBGQUxTRVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtrZWVwT3JpZ2luYWxQZXJtaXNzaW9uPWZhbHNlXSBUaGUgZmlsZSB3aWxsIGJlIHNldCBhcyB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZSBlbnRyeSBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBGQUxTRVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCB3aGVuIGFsbCBlbnRyaWVzIGFyZSBleHRyYWN0ZWQgc3VjY2Vzc2Z1bGx5IG9yIGFueSBlcnJvciBpcyB0aHJvd24uXG4gICAgICAgICAqL1xuICAgICAgICBleHRyYWN0QWxsVG9Bc3luYzogZnVuY3Rpb24gKHRhcmdldFBhdGgsIG92ZXJ3cml0ZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZ2V0X0Z1bihvdmVyd3JpdGUsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPSBnZXRfQm9vbChmYWxzZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbik7XG4gICAgICAgICAgICBvdmVyd3JpdGUgPSBnZXRfQm9vbChmYWxzZSwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RBbGxUb0FzeW5jKHRhcmdldFBhdGgsIG92ZXJ3cml0ZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX3ppcCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFV0aWxzLkVycm9ycy5OT19aSVAoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXRQYXRoID0gcHRoLnJlc29sdmUodGFyZ2V0UGF0aCk7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGVudHJ5TmFtZSB0b1xuICAgICAgICAgICAgY29uc3QgZ2V0UGF0aCA9IChlbnRyeSkgPT4gc2FuaXRpemUodGFyZ2V0UGF0aCwgcHRoLm5vcm1hbGl6ZShjYW5vbmljYWwoZW50cnkuZW50cnlOYW1lKSkpO1xuICAgICAgICAgICAgY29uc3QgZ2V0RXJyb3IgPSAobXNnLCBmaWxlKSA9PiBuZXcgRXJyb3IobXNnICsgJzogXCInICsgZmlsZSArICdcIicpO1xuXG4gICAgICAgICAgICAvLyBzZXBhcmF0ZSBkaXJlY3RvcmllcyBmcm9tIGZpbGVzXG4gICAgICAgICAgICBjb25zdCBkaXJFbnRyaWVzID0gW107XG4gICAgICAgICAgICBjb25zdCBmaWxlRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgX3ppcC5lbnRyaWVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJFbnRyaWVzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZUVudHJpZXMucHVzaChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGRpcmVjdG9yeSBlbnRyaWVzIGZpcnN0IHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIC8vIHRoaXMgcHJldmVudHMgcmFjZSBjb25kaXRpb24gYW5kIGFzc3VyZXMgZm9sZGVycyBhcmUgdGhlcmUgYmVmb3JlIHdyaXRpbmcgZmlsZXNcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZGlyRW50cmllcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpclBhdGggPSBnZXRQYXRoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmV2ZXJzZSBvcGVyYXRpb24gZm9yIGF0dHIgZGVwZW5kIG9uIG1ldGhvZCBhZGRGaWxlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJBdHRyID0ga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA/IGVudHJ5LmhlYWRlci5maWxlQXR0ciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMubWFrZURpcihkaXJQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpckF0dHIpIGZpbGV0b29scy5mcy5jaG1vZFN5bmMoZGlyUGF0aCwgZGlyQXR0cik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHVuaXggdGltZXN0YW1wIHdpbGwgY2hhbmdlIGlmIGZpbGVzIGFyZSBsYXRlciBhZGRlZCB0byBmb2xkZXIsIGJ1dCBzdGlsbFxuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMudXRpbWVzU3luYyhkaXJQYXRoLCBlbnRyeS5oZWFkZXIudGltZSwgZW50cnkuaGVhZGVyLnRpbWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGdldEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBmb2xkZXJcIiwgZGlyUGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsZUVudHJpZXMucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAobmV4dCwgZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeU5hbWUgPSBwdGgubm9ybWFsaXplKGNhbm9uaWNhbChlbnRyeS5lbnRyeU5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gc2FuaXRpemUodGFyZ2V0UGF0aCwgZW50cnlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmdldERhdGFBc3luYyhmdW5jdGlvbiAoY29udGVudCwgZXJyXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KFV0aWxzLkVycm9ycy5DQU5UX0VYVFJBQ1RfRklMRSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmV2ZXJzZSBvcGVyYXRpb24gZm9yIGF0dHIgZGVwZW5kIG9uIG1ldGhvZCBhZGRGaWxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZUF0dHIgPSBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID8gZW50cnkuaGVhZGVyLmZpbGVBdHRyIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMud3JpdGVGaWxlVG9Bc3luYyhmaWxlUGF0aCwgY29udGVudCwgb3ZlcndyaXRlLCBmaWxlQXR0ciwgZnVuY3Rpb24gKHN1Y2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VjYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoZ2V0RXJyb3IoXCJVbmFibGUgdG8gd3JpdGUgZmlsZVwiLCBmaWxlUGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnV0aW1lcyhmaWxlUGF0aCwgZW50cnkuaGVhZGVyLnRpbWUsIGVudHJ5LmhlYWRlci50aW1lLCBmdW5jdGlvbiAoZXJyXzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyXzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChnZXRFcnJvcihcIlVuYWJsZSB0byBzZXQgdGltZXNcIiwgZmlsZVBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgdGhlIG5ld2x5IGNyZWF0ZWQgemlwIGZpbGUgdG8gZGlzayBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIG9yIGlmIGEgemlwIHdhcyBvcGVuZWQgYW5kIG5vIGBgdGFyZ2V0RmlsZU5hbWVgYCBpcyBwcm92aWRlZCwgaXQgd2lsbCBvdmVyd3JpdGUgdGhlIG9wZW5lZCB6aXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldEZpbGVOYW1lXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB3cml0ZVppcDogZnVuY3Rpb24gKHRhcmdldEZpbGVOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldEZpbGVOYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSB0YXJnZXRGaWxlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RmlsZU5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0YXJnZXRGaWxlTmFtZSAmJiBvcHRzLmZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RmlsZU5hbWUgPSBvcHRzLmZpbGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXRGaWxlTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgemlwRGF0YSA9IF96aXAuY29tcHJlc3NUb0J1ZmZlcigpO1xuICAgICAgICAgICAgaWYgKHppcERhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2sgPSBmaWxldG9vbHMud3JpdGVGaWxlVG8odGFyZ2V0RmlsZU5hbWUsIHppcERhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgY2FsbGJhY2soIW9rID8gbmV3IEVycm9yKFwiZmFpbGVkXCIpIDogbnVsbCwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRGaWxlTmFtZVxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5vdmVyd3JpdGU9dHJ1ZV0gSWYgdGhlIGZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGhlIHRhcmdldCBwYXRoLCB0aGUgZmlsZSB3aWxsIGJlIG92ZXJ3cml0ZW4gaWYgdGhpcyBpcyB0cnVlLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5wZXJtXSBUaGUgZmlsZSB3aWxsIGJlIHNldCBhcyB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZSBlbnRyeSBpZiB0aGlzIGlzIHRydWUuXG5cbiAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICAgICAqL1xuICAgICAgICB3cml0ZVppcFByb21pc2U6IGZ1bmN0aW9uICgvKipTdHJpbmcqLyB0YXJnZXRGaWxlTmFtZSwgLyogb2JqZWN0ICovIHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IG92ZXJ3cml0ZSwgcGVybSB9ID0gT2JqZWN0LmFzc2lnbih7IG92ZXJ3cml0ZTogdHJ1ZSB9LCBwcm9wcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCBmaWxlIG5hbWVcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldEZpbGVOYW1lICYmIG9wdHMuZmlsZW5hbWUpIHRhcmdldEZpbGVOYW1lID0gb3B0cy5maWxlbmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldEZpbGVOYW1lKSByZWplY3QoXCJBRE0tWklQOiBaSVAgRmlsZSBOYW1lIE1pc3NpbmdcIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvQnVmZmVyUHJvbWlzZSgpLnRoZW4oKHppcERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gKGRvbmUpID0+IChkb25lID8gcmVzb2x2ZShkb25lKSA6IHJlamVjdChcIkFETS1aSVA6IFdhc24ndCBhYmxlIHRvIHdyaXRlIHppcCBmaWxlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLndyaXRlRmlsZVRvQXN5bmModGFyZ2V0RmlsZU5hbWUsIHppcERhdGEsIG92ZXJ3cml0ZSwgcGVybSwgcmV0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEJ1ZmZlcj59IEEgcHJvbWlzZSB0byB0aGUgQnVmZmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdG9CdWZmZXJQcm9taXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIF96aXAudG9Bc3luY0J1ZmZlcihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIGVudGlyZSB6aXAgZmlsZSBhcyBhIEJ1ZmZlciBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age2Z1bmN0aW9ufSBbb25TdWNjZXNzXVxuICAgICAgICAgKiBAcHJvcCB7ZnVuY3Rpb259IFtvbkZhaWxdXG4gICAgICAgICAqIEBwcm9wIHtmdW5jdGlvbn0gW29uSXRlbVN0YXJ0XVxuICAgICAgICAgKiBAcHJvcCB7ZnVuY3Rpb259IFtvbkl0ZW1FbmRdXG4gICAgICAgICAqIEByZXR1cm5zIHtCdWZmZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0b0J1ZmZlcjogZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsLCBvbkl0ZW1TdGFydCwgb25JdGVtRW5kKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uU3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgX3ppcC50b0FzeW5jQnVmZmVyKG9uU3VjY2Vzcywgb25GYWlsLCBvbkl0ZW1TdGFydCwgb25JdGVtRW5kKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfemlwLmNvbXByZXNzVG9CdWZmZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgImltcG9ydCB7XG4gIEFwcCxcbiAgTm90aWNlLFxuICBQbHVnaW4sXG4gIFBsdWdpblNldHRpbmdUYWIsXG4gIFNldHRpbmcsXG4gIFRBYnN0cmFjdEZpbGUsXG4gIFRGaWxlLFxuICBURm9sZGVyXG59IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmc3AgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IEFkbVppcCBmcm9tIFwiYWRtLXppcFwiO1xuaW1wb3J0IHsgRG93bmxvYWRJdGVtLCBQdWxsU2V0dGluZ3MgfSBmcm9tIFwiLi9wdWxsLXR5cGVzXCI7XG5pbXBvcnQgeyBGdXp6eURvd25sb2FkTW9kYWwgfSBmcm9tIFwiLi9kb3dubG9hZC1tb2RhbFwiO1xuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQdWxsU2V0dGluZ3MgPSB7XG4gIGRvd25sb2Fkc0RpcjogXCJ+L0Rvd25sb2Fkc1wiLFxuICBsaXN0TGltaXQ6IDEwLFxuICBiZWhhdmlvcjogXCJtb3ZlXCIsXG4gIHdoaXRlbGlzdDogW10sXG4gIGJsYWNrbGlzdDogW10sXG4gIHppcENvbGxpc2lvbjogXCJ2ZXJzaW9uXCIsXG4gIGV4cGFuZFppcHM6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1bGxGcm9tRG93bmxvYWRzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IFB1bGxTZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKFwiZmlsZS1tZW51XCIsIChtZW51LCBmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEZvbGRlciA9IHRoaXMuZ2V0VGFyZ2V0Rm9sZGVyKGZpbGUpO1xuICAgICAgICBpZiAoIXRhcmdldEZvbGRlcikgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIC5zZXRUaXRsZShcIlB1bGwgZnJvbSBEb3dubG9hZHNcdTIwMjZcIilcbiAgICAgICAgICAgIC5zZXRJY29uKFwiZG93bmxvYWRcIilcbiAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuaGFuZGxlUHVsbCh0YXJnZXRGb2xkZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFB1bGxTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlUHVsbCh0YXJnZXRGb2xkZXI6IFRGb2xkZXIpIHtcbiAgICBjb25zdCBkb3dubG9hZHNQYXRoID0gZXhwYW5kSG9tZSh0aGlzLnNldHRpbmdzLmRvd25sb2Fkc0Rpcik7XG5cbiAgICBsZXQgY2FuZGlkYXRlczogRG93bmxvYWRJdGVtW10gPSBbXTtcbiAgICB0cnkge1xuICAgICAgY2FuZGlkYXRlcyA9IGF3YWl0IGdldFJlY2VudEZpbGVzKGRvd25sb2Fkc1BhdGgsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoXCJVbmFibGUgdG8gcmVhZCBkb3dubG9hZHMgZGlyZWN0b3J5LiBDaGVjayBzZXR0aW5ncy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXcgTm90aWNlKFwiTm8gbWF0Y2hpbmcgZmlsZXMgZm91bmQgaW4gRG93bmxvYWRzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBGdXp6eURvd25sb2FkTW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIGNhbmRpZGF0ZXMsXG4gICAgICB0aGlzLnNldHRpbmdzLFxuICAgICAgYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzU2VsZWN0aW9uKGl0ZW0sIHRhcmdldEZvbGRlcik7XG4gICAgICB9XG4gICAgKTtcblxuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJvY2Vzc1NlbGVjdGlvbihpdGVtOiBEb3dubG9hZEl0ZW0sIHRhcmdldEZvbGRlcjogVEZvbGRlcikge1xuICAgIGNvbnN0IGJhc2VBZGFwdGVyID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlcjtcbiAgICBpZiAoIShiYXNlQWRhcHRlciBhcyBhbnkpLmdldEJhc2VQYXRoKSB7XG4gICAgICBuZXcgTm90aWNlKFwiRmlsZSBzeXN0ZW0gYWRhcHRlciBub3QgYXZhaWxhYmxlIG9uIHRoaXMgcGxhdGZvcm0uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZhdWx0QmFzZSA9IChiYXNlQWRhcHRlciBhcyBhbnkpLmdldEJhc2VQYXRoKCkgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbih2YXVsdEJhc2UsIG5vcm1hbGl6ZVBhdGgodGFyZ2V0Rm9sZGVyLnBhdGgpKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBlbnN1cmVEaXIodGFyZ2V0RGlyKTtcbiAgICAgIGNvbnN0IGlzWmlwID0gcGF0aC5leHRuYW1lKGl0ZW0ubmFtZSkudG9Mb3dlckNhc2UoKSA9PT0gXCIuemlwXCI7XG5cbiAgICAgIGxldCBhY3Rpb24gPSBcIlB1bGxlZFwiO1xuICAgICAgaWYgKGlzWmlwICYmIHRoaXMuc2V0dGluZ3MuZXhwYW5kWmlwcykge1xuICAgICAgICBhd2FpdCBleHRyYWN0WmlwKGl0ZW0uYWJzb2x1dGVQYXRoLCB0YXJnZXREaXIsIHRoaXMuc2V0dGluZ3MuemlwQ29sbGlzaW9uKTtcbiAgICAgICAgYWN0aW9uID0gXCJFeHBhbmRlZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgbW92ZU9yQ29weUZpbGUoaXRlbS5hYnNvbHV0ZVBhdGgsIHRhcmdldERpciwgdGhpcy5zZXR0aW5ncy5iZWhhdmlvcik7XG4gICAgICB9XG5cbiAgICAgIG5ldyBOb3RpY2UoYCR7YWN0aW9ufSAke2l0ZW0ubmFtZX0gaW50byAke3RhcmdldEZvbGRlci5wYXRofWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoYFB1bGwgZmFpbGVkOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBnZXRUYXJnZXRGb2xkZXIoZmlsZTogVEFic3RyYWN0RmlsZSB8IG51bGwpOiBURm9sZGVyIHwgbnVsbCB7XG4gICAgaWYgKCFmaWxlKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpIHJldHVybiBmaWxlO1xuICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHJldHVybiBmaWxlLnBhcmVudDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBub3JtYWxpemVTZXR0aW5ncyh7IC4uLkRFRkFVTFRfU0VUVElOR1MsIC4uLihkYXRhID8/IHt9KSB9KTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG5cbmNsYXNzIFB1bGxTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IFB1bGxGcm9tRG93bmxvYWRzUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFB1bGxGcm9tRG93bmxvYWRzUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDEnLCB7IHRleHQ6ICdQdWxsIGZyb20gRG93bmxvYWRzJyB9KVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiAnQ3JlYXRlZCBieSBsYXN0b2JlbHVzJywgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sYXN0b2JlbHVzLycgfSlcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1NldHRpbmdzJyB9KVxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJEb3dubG9hZHMgZGlyZWN0b3J5XCIpXG4gICAgICAuc2V0RGVzYyhcIlBhdGggdG8gc2NhbjsgfiBpcyBleHBhbmRlZC5cIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwifi9Eb3dubG9hZHNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZG93bmxvYWRzRGlyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRvd25sb2Fkc0RpciA9IHZhbHVlIHx8IERFRkFVTFRfU0VUVElOR1MuZG93bmxvYWRzRGlyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiTnVtYmVyIG9mIGZpbGVzXCIpXG4gICAgICAuc2V0RGVzYyhcIkhvdyBtYW55IHJlY2VudCBmaWxlcyB0byBzaG93ICgxLTEwMClcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiMTBcIilcbiAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLmxpc3RMaW1pdCkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY2xhbXBOdW1iZXIocGFyc2VJbnQodmFsdWUsIDEwKSwgMSwgMTAwLCBERUZBVUxUX1NFVFRJTkdTLmxpc3RMaW1pdCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saXN0TGltaXQgPSBudW07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJCZWhhdmlvclwiKVxuICAgICAgLnNldERlc2MoXCJNb3ZlIChkZWZhdWx0KSByZW1vdmVzIGZyb20gRG93bmxvYWRzOyBDb3B5IGxlYXZlcyBpdCB0aGVyZS5cIilcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbihcIm1vdmVcIiwgXCJNb3ZlXCIpXG4gICAgICAgICAgLmFkZE9wdGlvbihcImNvcHlcIiwgXCJDb3B5XCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmJlaGF2aW9yKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJlaGF2aW9yID0gdmFsdWUgYXMgXCJtb3ZlXCIgfCBcImNvcHlcIjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIldoaXRlbGlzdCBleHRlbnNpb25zXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJDb21tYS9zcGFjZSBzZXBhcmF0ZWQuIElmIHNldCwgb25seSB0aGVzZSBleHRlbnNpb25zIGFyZSBzaG93biBhbmQgYmxhY2tsaXN0IGlzIGlnbm9yZWQuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiemlwLCBwZGYsIHBuZ1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZShmb3JtYXRFeHRMaXN0KHRoaXMucGx1Z2luLnNldHRpbmdzLndoaXRlbGlzdCkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Mud2hpdGVsaXN0ID0gcGFyc2VFeHRMaXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkJsYWNrbGlzdCBleHRlbnNpb25zXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJDb21tYS9zcGFjZSBzZXBhcmF0ZWQuIElnbm9yZWQgd2hlbiB3aGl0ZWxpc3QgaXMgbm9uLWVtcHR5LiBMZWF2ZSB3aGl0ZWxpc3QgZW1wdHkgdG8gdXNlIGJsYWNrbGlzdC5cIlxuICAgICAgKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJ0bXAsIGNyZG93bmxvYWRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoZm9ybWF0RXh0TGlzdCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5ibGFja2xpc3QpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJsYWNrbGlzdCA9IHBhcnNlRXh0TGlzdCh2YWx1ZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIlppcCBmaWxlc1wiIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkV4dHJhY3QgemlwIGZpbGVzXCIpXG4gICAgICAuc2V0RGVzYyhcIklmIG9mZiwgemlwcyBhcmUgbW92ZWQvY29waWVkIHdpdGhvdXQgZXh0cmFjdGluZy5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmV4cGFuZFppcHMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhwYW5kWmlwcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGNvbGxpc2lvblNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiWmlwIGNvbGxpc2lvbiBoYW5kbGluZ1wiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmV4cGFuZFppcHNcbiAgICAgICAgICA/IFwiQ2hvb3NlIGhvdyB0byBoYW5kbGUgZXhpc3RpbmcgZmlsZXMgd2hlbiBleHRyYWN0aW5nIHppcHMuXCJcbiAgICAgICAgICA6IFwiRW5hYmxlICdFeHRyYWN0IHppcCBmaWxlcycgdG8gY29uZmlndXJlIGNvbGxpc2lvbiBoYW5kbGluZy5cIlxuICAgICAgKTtcblxuICAgIGNvbGxpc2lvblNldHRpbmdcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbihcInZlcnNpb25cIiwgXCJWZXJzaW9uIGV4aXN0aW5nIGZpbGVzXCIpXG4gICAgICAgICAgLmFkZE9wdGlvbihcIm92ZXJ3cml0ZVwiLCBcIk92ZXJ3cml0ZSBleGlzdGluZyBmaWxlc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy56aXBDb2xsaXNpb24pXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuemlwQ29sbGlzaW9uID0gdmFsdWUgYXMgXCJ2ZXJzaW9uXCIgfCBcIm92ZXJ3cml0ZVwiO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zZXREaXNhYmxlZCghdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhwYW5kWmlwcyk7XG4gIH1cbn1cblxuLy8gSGVscGVyc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoKHA6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRIb21lKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaW5wdXQuc3RhcnRzV2l0aChcIn5cIikpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgaW5wdXQuc2xpY2UoMSkpO1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHRMaXN0KGlucHV0OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBpbnB1dFxuICAgIC5zcGxpdCgvW1xccyxdKy8pXG4gICAgLm1hcCgocykgPT4gcy50cmltKCkucmVwbGFjZSgvXlxcLi8sIFwiXCIpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RXh0TGlzdChsaXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIHJldHVybiBsaXN0LmpvaW4oXCIsIFwiKTtcbn1cblxuZnVuY3Rpb24gY2xhbXBOdW1iZXIodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiBmYWxsYmFjaztcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTZXR0aW5ncyhzZXR0aW5nczogUHVsbFNldHRpbmdzKTogUHVsbFNldHRpbmdzIHtcbiAgcmV0dXJuIHtcbiAgICBkb3dubG9hZHNEaXI6IHNldHRpbmdzLmRvd25sb2Fkc0Rpcj8udHJpbSgpIHx8IERFRkFVTFRfU0VUVElOR1MuZG93bmxvYWRzRGlyLFxuICAgIGxpc3RMaW1pdDogY2xhbXBOdW1iZXIoc2V0dGluZ3MubGlzdExpbWl0LCAxLCAxMDAsIERFRkFVTFRfU0VUVElOR1MubGlzdExpbWl0KSxcbiAgICBiZWhhdmlvcjogc2V0dGluZ3MuYmVoYXZpb3IgPT09IFwiY29weVwiID8gXCJjb3B5XCIgOiBcIm1vdmVcIixcbiAgICB3aGl0ZWxpc3Q6IHBhcnNlRXh0TGlzdChmb3JtYXRFeHRMaXN0KHNldHRpbmdzLndoaXRlbGlzdCB8fCBbXSkpLFxuICAgIGJsYWNrbGlzdDogcGFyc2VFeHRMaXN0KGZvcm1hdEV4dExpc3Qoc2V0dGluZ3MuYmxhY2tsaXN0IHx8IFtdKSksXG4gICAgemlwQ29sbGlzaW9uOiBzZXR0aW5ncy56aXBDb2xsaXNpb24gPT09IFwib3ZlcndyaXRlXCIgPyBcIm92ZXJ3cml0ZVwiIDogXCJ2ZXJzaW9uXCIsXG4gICAgZXhwYW5kWmlwczogc2V0dGluZ3MuZXhwYW5kWmlwcyAhPT0gZmFsc2VcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50RmlsZXMoZGlyOiBzdHJpbmcsIHNldHRpbmdzOiBQdWxsU2V0dGluZ3MpOiBQcm9taXNlPERvd25sb2FkSXRlbVtdPiB7XG4gIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmc3AucmVhZGRpcihkaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcbiAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzRmlsZSgpKTtcblxuICBjb25zdCBzdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGZpbGVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGguam9pbihkaXIsIGVudHJ5Lm5hbWUpO1xuICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzcC5zdGF0KGFic29sdXRlUGF0aCk7XG4gICAgICByZXR1cm4geyBlbnRyeSwgc3RhdCwgYWJzb2x1dGVQYXRoIH07XG4gICAgfSlcbiAgKTtcblxuICBjb25zdCB3aGl0ZWxpc3QgPSBzZXR0aW5ncy53aGl0ZWxpc3Q7XG4gIGNvbnN0IGJsYWNrbGlzdCA9IHNldHRpbmdzLmJsYWNrbGlzdDtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHN0YXRzXG4gICAgLmZpbHRlcigoeyBlbnRyeSB9KSA9PiBzaG91bGRJbmNsdWRlKGVudHJ5Lm5hbWUsIHdoaXRlbGlzdCwgYmxhY2tsaXN0KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zdGF0Lm10aW1lTXMgLSBhLnN0YXQubXRpbWVNcylcbiAgICAuc2xpY2UoMCwgc2V0dGluZ3MubGlzdExpbWl0KVxuICAgIC5tYXAoKHsgZW50cnksIHN0YXQsIGFic29sdXRlUGF0aCB9KSA9PiAoe1xuICAgICAgbmFtZTogZW50cnkubmFtZSxcbiAgICAgIGFic29sdXRlUGF0aCxcbiAgICAgIG10aW1lOiBzdGF0Lm10aW1lLFxuICAgICAgc2l6ZTogc3RhdC5zaXplXG4gICAgfSkpO1xuXG4gIHJldHVybiBmaWx0ZXJlZDtcbn1cblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZShuYW1lOiBzdHJpbmcsIHdoaXRlbGlzdDogc3RyaW5nW10sIGJsYWNrbGlzdDogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgY29uc3QgaWdub3JlZE5hbWVzID0gbmV3IFNldChbXG4gICAgXCIuRFNfU3RvcmVcIixcbiAgICBcIlRodW1icy5kYlwiLFxuICAgIFwiZGVza3RvcC5pbmlcIlxuICBdKTtcbiAgaWYgKGlnbm9yZWROYW1lcy5oYXMobmFtZSkpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUobmFtZSkucmVwbGFjZSgvXlxcLi8sIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIGlmICh3aGl0ZWxpc3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB3aGl0ZWxpc3QuaW5jbHVkZXMoZXh0KTtcbiAgfVxuICBpZiAoYmxhY2tsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gIWJsYWNrbGlzdC5pbmNsdWRlcyhleHQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVEaXIoZGlyOiBzdHJpbmcpIHtcbiAgYXdhaXQgZnNwLm1rZGlyKGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1vdmVPckNvcHlGaWxlKHNvdXJjZTogc3RyaW5nLCB0YXJnZXREaXI6IHN0cmluZywgYmVoYXZpb3I6IFwibW92ZVwiIHwgXCJjb3B5XCIpIHtcbiAgY29uc3QgdGFyZ2V0UGF0aCA9IGF3YWl0IHVuaXF1ZVBhdGgocGF0aC5qb2luKHRhcmdldERpciwgcGF0aC5iYXNlbmFtZShzb3VyY2UpKSk7XG5cbiAgaWYgKGJlaGF2aW9yID09PSBcImNvcHlcIikge1xuICAgIGF3YWl0IGZzcC5jb3B5RmlsZShzb3VyY2UsIHRhcmdldFBhdGgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZnNwLnJlbmFtZShzb3VyY2UsIHRhcmdldFBhdGgpO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09IFwiRVhERVZcIikge1xuICAgICAgYXdhaXQgZnNwLmNvcHlGaWxlKHNvdXJjZSwgdGFyZ2V0UGF0aCk7XG4gICAgICBhd2FpdCBmc3AudW5saW5rKHNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBleHRyYWN0WmlwKFxuICB6aXBQYXRoOiBzdHJpbmcsXG4gIHRhcmdldERpcjogc3RyaW5nLFxuICBzdHJhdGVneTogXCJ2ZXJzaW9uXCIgfCBcIm92ZXJ3cml0ZVwiXG4pIHtcbiAgY29uc3QgemlwID0gbmV3IEFkbVppcCh6aXBQYXRoKTtcbiAgY29uc3QgZW50cmllcyA9IHppcC5nZXRFbnRyaWVzKCk7XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgZW50cnlOYW1lID0gbm9ybWFsaXplUGF0aChlbnRyeS5lbnRyeU5hbWUpO1xuICAgIGNvbnN0IGRlc3RQYXRoID0gcGF0aC5qb2luKHRhcmdldERpciwgZW50cnlOYW1lKTtcblxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgYXdhaXQgZW5zdXJlRGlyKGRlc3RQYXRoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmFsUGF0aCA9XG4gICAgICBzdHJhdGVneSA9PT0gXCJvdmVyd3JpdGVcIiA/IGRlc3RQYXRoIDogYXdhaXQgdW5pcXVlUGF0aChkZXN0UGF0aCk7XG4gICAgYXdhaXQgZW5zdXJlRGlyKHBhdGguZGlybmFtZShmaW5hbFBhdGgpKTtcbiAgICBjb25zdCBkYXRhID0gZW50cnkuZ2V0RGF0YSgpO1xuICAgIGF3YWl0IGZzcC53cml0ZUZpbGUoZmluYWxQYXRoLCBkYXRhKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlxdWVQYXRoKHRhcmdldFBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGlmICghKGF3YWl0IGV4aXN0cyh0YXJnZXRQYXRoKSkpIHJldHVybiB0YXJnZXRQYXRoO1xuXG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZSh0YXJnZXRQYXRoKTtcbiAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKHRhcmdldFBhdGgpO1xuICBjb25zdCBiYXNlID0gcGF0aC5iYXNlbmFtZSh0YXJnZXRQYXRoLCBleHQpO1xuXG4gIGxldCBjb3VudGVyID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBwYXRoLmpvaW4oZGlyLCBgJHtiYXNlfS0ke2NvdW50ZXJ9JHtleHR9YCk7XG4gICAgaWYgKCEoYXdhaXQgZXhpc3RzKGNhbmRpZGF0ZSkpKSByZXR1cm4gY2FuZGlkYXRlO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGlzdHMocDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZnNwLmFjY2VzcyhwLCBmcy5jb25zdGFudHMuRl9PSyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBcHAsIEZ1enp5TWF0Y2gsIEZ1enp5U3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBEb3dubG9hZEl0ZW0sIFB1bGxTZXR0aW5ncyB9IGZyb20gXCIuL3B1bGwtdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIEZ1enp5RG93bmxvYWRNb2RhbCBleHRlbmRzIEZ1enp5U3VnZ2VzdE1vZGFsPERvd25sb2FkSXRlbT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBwcml2YXRlIGl0ZW1zOiBEb3dubG9hZEl0ZW1bXSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBQdWxsU2V0dGluZ3MsXG4gICAgcHJpdmF0ZSBvblNlbGVjdDogKGl0ZW06IERvd25sb2FkSXRlbSkgPT4gdm9pZFxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJTZWxlY3QgYSBmaWxlIHRvIHB1bGxcdTIwMjZcIik7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgc3VwZXIub25PcGVuKCk7XG4gICAgdGhpcy5zZXRJbnN0cnVjdGlvbnMoW1xuICAgICAge1xuICAgICAgICBjb21tYW5kOiBcImZpbGVzOlwiLFxuICAgICAgICBwdXJwb3NlOiB0aGlzLnNldHRpbmdzLmJlaGF2aW9yID09PSBcImNvcHlcIiA/IFwiY29weVwiIDogXCJtb3ZlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbW1hbmQ6IFwiemlwIGZpbGVzOlwiLFxuICAgICAgICBwdXJwb3NlOiB0aGlzLnNldHRpbmdzLmV4cGFuZFppcHMgPyBcImV4cGFuZFwiIDogXCJkb24ndCBleHBhbmRcIlxuICAgICAgfVxuICAgIF0pO1xuICB9XG5cbiAgZ2V0SXRlbXMoKTogRG93bmxvYWRJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbVRleHQoaXRlbTogRG93bmxvYWRJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5uYW1lO1xuICB9XG5cbiAgcmVuZGVyU3VnZ2VzdGlvbihtYXRjaDogRnV6enlNYXRjaDxEb3dubG9hZEl0ZW0+LCBlbDogSFRNTEVsZW1lbnQpIHtcbiAgICByZW5kZXJEb3dubG9hZFJvdyhtYXRjaC5pdGVtLCBlbCk7XG4gIH1cblxuICBvbkNob29zZUl0ZW0oaXRlbTogRG93bmxvYWRJdGVtKSB7XG4gICAgdGhpcy5vblNlbGVjdChpdGVtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEb3dubG9hZFJvdyhpdGVtOiBEb3dubG9hZEl0ZW0sIGVsOiBIVE1MRWxlbWVudCkge1xuICBjb25zdCByb3cgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwicHVsbC1kbC1yb3dcIiB9KTtcbiAgY29uc3QgbmFtZUVsID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJwdWxsLWRsLW5hbWVcIiB9KTtcbiAgbmFtZUVsLnNldFRleHQoaXRlbS5uYW1lKTtcblxuICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUoaXRlbS5uYW1lKS5yZXBsYWNlKC9eXFwuLywgXCJcIikudG9VcHBlckNhc2UoKTtcbiAgaWYgKGV4dCkge1xuICAgIGNvbnN0IGJhZGdlID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJwdWxsLWRsLWJhZGdlXCIgfSk7XG4gICAgYmFkZ2Uuc2V0VGV4dChleHQpO1xuICB9XG5cbiAgY29uc3QgbWV0YSA9IGVsLmNyZWF0ZURpdih7IGNsczogXCJwdWxsLWRsLW1ldGFcIiB9KTtcbiAgbWV0YS5zZXRUZXh0KFxuICAgIGAke2Zvcm1hdFJlbGF0aXZlKGl0ZW0ubXRpbWUpfSBcdTIwMjIgJHtpdGVtLm10aW1lLnRvTG9jYWxlU3RyaW5nKCl9IFx1MjAyMiAke2Zvcm1hdEJ5dGVzKGl0ZW0uc2l6ZSl9YFxuICApO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCeXRlcyhieXRlczogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGJ5dGVzID09PSAwKSByZXR1cm4gXCIwIEJcIjtcbiAgY29uc3QgayA9IDEwMjQ7XG4gIGNvbnN0IHNpemVzID0gW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCJdO1xuICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gIGNvbnN0IHZhbHVlID0gYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKTtcbiAgcmV0dXJuIGAke3ZhbHVlLnRvRml4ZWQodmFsdWUgPj0gMTAgfHwgaSA9PT0gMCA/IDAgOiAxKX0gJHtzaXplc1tpXX1gO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgZGlmZk1zID0gRGF0ZS5ub3coKSAtIGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBzZWMgPSBNYXRoLmZsb29yKGRpZmZNcyAvIDEwMDApO1xuICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcbiAgY29uc3QgaHIgPSBNYXRoLmZsb29yKG1pbiAvIDYwKTtcbiAgY29uc3QgZGF5ID0gTWF0aC5mbG9vcihociAvIDI0KTtcblxuICBpZiAoc2VjIDwgNjApIHJldHVybiBcImp1c3Qgbm93XCI7XG4gIGlmIChtaW4gPCA2MCkgcmV0dXJuIGAke21pbn0gbWluIGFnb2A7XG4gIGlmIChociA8IDI0KSByZXR1cm4gYCR7aHJ9IGhyJHtociA9PT0gMSA/IFwiXCIgOiBcInNcIn0gYWdvYDtcbiAgaWYgKGRheSA8IDcpIHJldHVybiBgJHtkYXl9IGRheSR7ZGF5ID09PSAxID8gXCJcIiA6IFwic1wifSBhZ29gO1xuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xufVxuXG5leHBvcnQgdHlwZSB7IERvd25sb2FkSXRlbSB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwyQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUEsTUFFYixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFHbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQTtBQUFBLE1BR25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFFbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixZQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLGVBQW1CO0FBQUE7QUFBQSxNQUVuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFdBQW1CO0FBQUE7QUFBQSxNQUNuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsYUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixZQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsbUJBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixPQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixNQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFB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UUFBTSxNQUFNLElBQUksZUFBQUMsUUFBTyxPQUFPO0FBQzlCLFFBQU0sVUFBVSxJQUFJLFdBQVc7QUFFL0IsYUFBVyxTQUFTLFNBQVM7QUFDM0IsVUFBTSxZQUFZLGNBQWMsTUFBTSxTQUFTO0FBQy9DLFVBQU0sV0FBZ0IsV0FBSyxXQUFXLFNBQVM7QUFFL0MsUUFBSSxNQUFNLGFBQWE7QUFDckIsWUFBTSxVQUFVLFFBQVE7QUFDeEI7QUFBQSxJQUNGO0FBRUEsVUFBTSxZQUNKLGFBQWEsY0FBYyxXQUFXLE1BQU0sV0FBVyxRQUFRO0FBQ2pFLFVBQU0sVUFBZSxjQUFRLFNBQVMsQ0FBQztBQUN2QyxVQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQU0sVUFBQUQsU0FBSSxVQUFVLFdBQVcsSUFBSTtBQUFBLEVBQ3JDO0FBQ0Y7QUFFQSxlQUFlLFdBQVcsWUFBcUM7QUFDN0QsTUFBSSxDQUFFLE1BQU0sT0FBTyxVQUFVLEVBQUksUUFBTztBQUV4QyxRQUFNLE1BQVcsY0FBUSxVQUFVO0FBQ25DLFFBQU0sTUFBVyxjQUFRLFVBQVU7QUFDbkMsUUFBTSxPQUFZLGVBQVMsWUFBWSxHQUFHO0FBRTFDLE1BQUksVUFBVTtBQUNkLFNBQU8sTUFBTTtBQUNYLFVBQU0sWUFBaUIsV0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLE9BQU8sR0FBRyxHQUFHLEVBQUU7QUFDM0QsUUFBSSxDQUFFLE1BQU0sT0FBTyxTQUFTLEVBQUksUUFBTztBQUN2QyxlQUFXO0FBQUEsRUFDYjtBQUNGO0FBRUEsZUFBZSxPQUFPLEdBQTZCO0FBQ2pELE1BQUk7QUFDRixVQUFNLFVBQUFBLFNBQUksT0FBTyxHQUFNLGFBQVUsSUFBSTtBQUNyQyxXQUFPO0FBQUEsRUFDVCxTQUFTLEdBQUc7QUFDVixXQUFPO0FBQUEsRUFDVDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInBhdGgiLCAiZXhpc3RzIiwgImVyciIsICJmZCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImZzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJqb2luIiwgImxvY2FsUGF0aCIsICJvcHRpb25zIiwgImVyciIsICJjb250ZW50IiwgImZpbGVBdHRyIiwgImltcG9ydF9vYnNpZGlhbiIsICJwYXRoIiwgImZzcCIsICJBZG1aaXAiXQp9Cg==
