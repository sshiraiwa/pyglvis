// Copyright (c) 2010-2021, Lawrence Livermore National Security, LLC. Produced
// at the Lawrence Livermore National Laboratory. All Rights reserved. See files
// LICENSE and NOTICE for details. LLNL-CODE-443271.
//
// This file is part of the GLVis visualization tool and library. For more
// information and source code availability see https://glvis.org.
//
// GLVis is free software; you can redistribute it and/or modify it under the
// terms of the BSD-3 license. We welcome feedback and contributions, see file
// CONTRIBUTING.md for details.

var glvis_jupyter = require("./index");
var base = require("@jupyter-widgets/base");

module.exports = {
  id: "jupyter.extensions.glvis-jupyter",
  requires: [base.IJupyterWidgetRegistry],
  activate: function (app, widgets) {
    widgets.registerWidget({
      name: "glvis-jupyter",
      version: glvis_jupyter.version,
      exports: glvis_jupyter,
    });
  },
  autoStart: true,
};
