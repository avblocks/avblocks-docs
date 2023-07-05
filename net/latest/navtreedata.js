/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "AVBlocks for .NET", "index.html", [
    [ "Welcome", "index.html", "index" ],
    [ "Runtime Requirements", "_runtime_requirements.html", [
      [ "AVBlocks", "_runtime_requirements.html#AVBlocksRuntimeRequirements", [
        [ "Windows", "_runtime_requirements.html#autotoc_md393", [
          [ ".NET", "_runtime_requirements.html#autotoc_md394", null ],
          [ "wmvcore.dll", "_runtime_requirements.html#autotoc_md395", null ],
          [ "msdmo.dll", "_runtime_requirements.html#autotoc_md396", null ]
        ] ],
        [ "macOS", "_runtime_requirements.html#autotoc_md397", null ],
        [ "Linux", "_runtime_requirements.html#autotoc_md398", null ]
      ] ]
    ] ],
    [ "Transcoder Input/Output Model", "transcoder_io.html", [
      [ "Transcoder Input/Output Requirements and Limitations", "transcoder_io.html#t_io", [
        [ "Using file or stream as input", "transcoder_io.html#t_input_stream", null ],
        [ "Using Transcoder push mode to provide input", "transcoder_io.html#t_input_push", null ],
        [ "Using file or stream as output", "transcoder_io.html#t_output_stream", null ],
        [ "Using Transcoder pull mode to get output", "transcoder_io.html#t_output_pull", null ]
      ] ]
    ] ],
    [ "Using Transcoder.Push", "using_transcoder_push.html", [
      [ "Common Steps", "using_transcoder_push.html#using_transcoder_push_common_steps", null ],
      [ "JPEG", "using_transcoder_push.html#using_transcoder_push_jpeg", [
        [ "1. Configure input MediaSocket, MediaPin, and VideoStreamInfo", "using_transcoder_push.html#using_transcoder_push_jpeg__input", null ],
        [ "2. Configure output MediaSocket, MediaPin, and VideoStreamInfo", "using_transcoder_push.html#using_transcoder_push_jpeg__output", null ],
        [ "3. Create a new MediaBuffer and attach the JPEG data to it", "using_transcoder_push.html#using_transcoder_push_jpeg__buffer", null ],
        [ "4. Create a new MediaSample and set its buffer", "using_transcoder_push.html#using_transcoder_push_jpeg__sample", null ],
        [ "5. Pass the sample to Transcoder.Push", "using_transcoder_push.html#using_transcoder_push_jpeg__push", null ]
      ] ]
    ] ],
    [ "Known Limitations", "_known_limitations.html", null ],
    [ "Release Notes", "_release_notes.html", [
      [ "AVBlocks SDK for .NET", "_release_notes.html#autotoc_md399", [
        [ "OS Requirements", "_release_notes.html#autotoc_md400", null ],
        [ "Redistributable Components", "_release_notes.html#autotoc_md401", [
          [ "Windows", "_release_notes.html#autotoc_md402", null ],
          [ "macOS", "_release_notes.html#autotoc_md403", null ],
          [ "Linux", "_release_notes.html#autotoc_md404", null ]
        ] ]
      ] ],
      [ "Runtime Requirements", "_release_notes.html#autotoc_md405", [
        [ "Windows", "_release_notes.html#autotoc_md406", null ],
        [ "macOS", "_release_notes.html#autotoc_md407", null ],
        [ "Linux", "_release_notes.html#autotoc_md408", null ]
      ] ],
      [ "Demo Restrictions", "_release_notes.html#autotoc_md409", [
        [ "Release notes", "_release_notes.html#autotoc_md410", [
          [ "3.0.0 (02 Jul 2023)", "_release_notes.html#autotoc_md411", [
            [ "Bug", "_release_notes.html#autotoc_md412", null ]
          ] ],
          [ "2.3.5 (13 Oct 2019)", "_release_notes.html#autotoc_md413", [
            [ "Bug", "_release_notes.html#autotoc_md414", null ]
          ] ],
          [ "2.3.4 (20 Sep 2019)", "_release_notes.html#autotoc_md415", [
            [ "Bug", "_release_notes.html#autotoc_md416", null ]
          ] ],
          [ "2.3.3 (02 Mar 2019)", "_release_notes.html#autotoc_md417", [
            [ "Bug", "_release_notes.html#autotoc_md418", null ]
          ] ],
          [ "2.3.2 (31 Dec 2018)", "_release_notes.html#autotoc_md419", [
            [ "Bug", "_release_notes.html#autotoc_md420", null ]
          ] ],
          [ "2.3.1 (03 Sep 2018)", "_release_notes.html#autotoc_md421", [
            [ "Bug", "_release_notes.html#autotoc_md422", null ],
            [ "Feature", "_release_notes.html#autotoc_md423", null ]
          ] ],
          [ "2.3.0 (12 Nov 2017)", "_release_notes.html#autotoc_md424", [
            [ "Feature", "_release_notes.html#autotoc_md425", null ]
          ] ],
          [ "2.2.1 (21 Jan 2017)", "_release_notes.html#autotoc_md426", [
            [ "Feature", "_release_notes.html#autotoc_md427", null ]
          ] ],
          [ "2.2.0 (08 Aug 2016)", "_release_notes.html#autotoc_md428", [
            [ "Feature", "_release_notes.html#autotoc_md429", null ],
            [ "Bug", "_release_notes.html#autotoc_md430", null ]
          ] ],
          [ "2.1.0 (23 May 2016)", "_release_notes.html#autotoc_md431", [
            [ "Feature", "_release_notes.html#autotoc_md432", null ],
            [ "Bug", "_release_notes.html#autotoc_md433", null ]
          ] ],
          [ "2.0.0 (15 Apr 2016)", "_release_notes.html#autotoc_md434", [
            [ "Feature", "_release_notes.html#autotoc_md435", null ],
            [ "Bug", "_release_notes.html#autotoc_md436", null ]
          ] ],
          [ "1.26.0 (14 Mar 2016)", "_release_notes.html#autotoc_md437", [
            [ "Feature", "_release_notes.html#autotoc_md438", null ],
            [ "Bug", "_release_notes.html#autotoc_md439", null ]
          ] ],
          [ "1.25.0 (20 Jan 2016)", "_release_notes.html#autotoc_md440", [
            [ "Feature", "_release_notes.html#autotoc_md441", null ],
            [ "Bug", "_release_notes.html#autotoc_md442", null ]
          ] ],
          [ "1.24.0 (29 Dec 2015)", "_release_notes.html#autotoc_md443", [
            [ "Feature", "_release_notes.html#autotoc_md444", null ],
            [ "Bug", "_release_notes.html#autotoc_md445", null ]
          ] ],
          [ "1.23.0 (13 Dec 2015)", "_release_notes.html#autotoc_md446", [
            [ "Feature", "_release_notes.html#autotoc_md447", null ],
            [ "Bug", "_release_notes.html#autotoc_md448", null ]
          ] ],
          [ "1.22.0 (07 Nov 2015)", "_release_notes.html#autotoc_md449", [
            [ "Feature", "_release_notes.html#autotoc_md450", null ],
            [ "Bug", "_release_notes.html#autotoc_md451", null ]
          ] ],
          [ "1.21.0 (29 Sep 2015)", "_release_notes.html#autotoc_md452", [
            [ "Feature", "_release_notes.html#autotoc_md453", null ],
            [ "Bug", "_release_notes.html#autotoc_md454", null ]
          ] ],
          [ "1.20.0 (11 Jul 2015)", "_release_notes.html#autotoc_md455", [
            [ "Feature", "_release_notes.html#autotoc_md456", null ],
            [ "Bug", "_release_notes.html#autotoc_md457", null ]
          ] ],
          [ "1.19.0 (25 May 2015)", "_release_notes.html#autotoc_md458", [
            [ "Feature", "_release_notes.html#autotoc_md459", null ],
            [ "Bug", "_release_notes.html#autotoc_md460", null ]
          ] ],
          [ "1.18.0 (10 Apr 2015)", "_release_notes.html#autotoc_md461", [
            [ "Feature", "_release_notes.html#autotoc_md462", null ],
            [ "Bug", "_release_notes.html#autotoc_md463", null ]
          ] ],
          [ "1.17.0 (14 Mar 2015)", "_release_notes.html#autotoc_md464", [
            [ "Feature", "_release_notes.html#autotoc_md465", null ],
            [ "Bug", "_release_notes.html#autotoc_md466", null ]
          ] ],
          [ "1.16.0 (05 Feb 2015)", "_release_notes.html#autotoc_md467", [
            [ "Feature", "_release_notes.html#autotoc_md468", null ],
            [ "Bug", "_release_notes.html#autotoc_md469", null ]
          ] ],
          [ "1.15.0 (09 Jan 2015)", "_release_notes.html#autotoc_md470", [
            [ "Feature", "_release_notes.html#autotoc_md471", null ],
            [ "Bug", "_release_notes.html#autotoc_md472", null ]
          ] ],
          [ "1.14.0 (01 Nov 2014)", "_release_notes.html#autotoc_md473", [
            [ "Feature", "_release_notes.html#autotoc_md474", null ],
            [ "Bug", "_release_notes.html#autotoc_md475", null ]
          ] ],
          [ "1.13.1 (11 Oct 2014)", "_release_notes.html#autotoc_md476", [
            [ "Bug", "_release_notes.html#autotoc_md477", null ]
          ] ],
          [ "1.13.0 (04 Oct 2014)", "_release_notes.html#autotoc_md478", [
            [ "Feature", "_release_notes.html#autotoc_md479", null ],
            [ "Feature", "_release_notes.html#autotoc_md480", null ]
          ] ],
          [ "1.12.0 (25 Aug 2014)", "_release_notes.html#autotoc_md481", [
            [ "Feature", "_release_notes.html#autotoc_md482", null ],
            [ "Bug", "_release_notes.html#autotoc_md483", null ]
          ] ],
          [ "1.11.0 (25 Jun 2014)", "_release_notes.html#autotoc_md484", [
            [ "Feature", "_release_notes.html#autotoc_md485", null ],
            [ "Bug", "_release_notes.html#autotoc_md486", null ]
          ] ],
          [ "1.10.0 (5 May 2014)", "_release_notes.html#autotoc_md487", [
            [ "Bug", "_release_notes.html#autotoc_md488", null ],
            [ "Feature", "_release_notes.html#autotoc_md489", null ]
          ] ],
          [ "1.9.0 (23 Mar 2014)", "_release_notes.html#autotoc_md490", [
            [ "Bug", "_release_notes.html#autotoc_md491", null ],
            [ "Feature", "_release_notes.html#autotoc_md492", null ]
          ] ],
          [ "1.8.1 (18 Jan 2014)", "_release_notes.html#autotoc_md493", [
            [ "Bug", "_release_notes.html#autotoc_md494", null ]
          ] ],
          [ "1.8.0 (15 Dec 2013)", "_release_notes.html#autotoc_md495", [
            [ "Bug", "_release_notes.html#autotoc_md496", null ],
            [ "Feature", "_release_notes.html#autotoc_md497", null ]
          ] ],
          [ "1.7.0 (29 Nov 2013)", "_release_notes.html#autotoc_md498", [
            [ "Bug", "_release_notes.html#autotoc_md499", null ],
            [ "Feature", "_release_notes.html#autotoc_md500", null ]
          ] ],
          [ "1.6.1 (11 Oct 2013)", "_release_notes.html#autotoc_md501", [
            [ "Bug", "_release_notes.html#autotoc_md502", null ]
          ] ],
          [ "1.6.0 (12 Sep 2013)", "_release_notes.html#autotoc_md503", [
            [ "Breaking Changes", "_release_notes.html#autotoc_md504", null ],
            [ "Feature", "_release_notes.html#autotoc_md505", null ],
            [ "Bug", "_release_notes.html#autotoc_md506", null ]
          ] ],
          [ "1.5.0 (16 Aug 2013)", "_release_notes.html#autotoc_md507", [
            [ "Bug", "_release_notes.html#autotoc_md508", null ]
          ] ],
          [ "1.4.0 (4 July 2013)", "_release_notes.html#autotoc_md509", [
            [ "Bug", "_release_notes.html#autotoc_md510", null ],
            [ "Feature", "_release_notes.html#autotoc_md511", null ]
          ] ],
          [ "1.3.0 (16 June 2013)", "_release_notes.html#autotoc_md512", [
            [ "Bug", "_release_notes.html#autotoc_md513", null ],
            [ "Feature", "_release_notes.html#autotoc_md514", null ]
          ] ],
          [ "1.2.1 (14 May 2013)", "_release_notes.html#autotoc_md515", [
            [ "Bug", "_release_notes.html#autotoc_md516", null ]
          ] ],
          [ "1.2.0  (30 Apr 2013)", "_release_notes.html#autotoc_md517", [
            [ "Feature", "_release_notes.html#autotoc_md518", null ],
            [ "Bug", "_release_notes.html#autotoc_md519", null ]
          ] ],
          [ "1.1.0 (04 Jun 2012)", "_release_notes.html#autotoc_md520", [
            [ "Feature", "_release_notes.html#autotoc_md521", null ],
            [ "Bug", "_release_notes.html#autotoc_md522", null ]
          ] ],
          [ "1.0.1 (12 Dec 2011)", "_release_notes.html#autotoc_md523", null ]
        ] ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Events", "functions_evnt.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_known_limitations.html",
"class_primo_software_1_1_a_v_blocks_1_1_library_1_1_config_1_1_hardware.html",
"class_primo_software_1_1_a_v_blocks_1_1_meta_attribute_list.html",
"class_primo_software_1_1_a_v_blocks_1_1_param_1_1_video_1_1_resize.html",
"class_primo_software_1_1_a_v_blocks_1_1_preset_1_1_video_1_1_h_d_v.html#ac52b80158eaa4d2c2fb52ba3d97e9be1",
"functions_vars_j.html",
"namespace_primo_software_1_1_a_v_blocks.html#a8a65141d9ea4bf9d2e2377ed6b888a1da33e6990fc6259aa8f2918ea7580155eb"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';