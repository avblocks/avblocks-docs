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
    [ "Runtime Requirements", "md__runtime_requirements_8page.html", [
      [ "AVBlocks", "md__runtime_requirements_8page.html#AVBlocksRuntimeRequirements", [
        [ "Windows", "md__runtime_requirements_8page.html#autotoc_md393", [
          [ ".NET", "md__runtime_requirements_8page.html#autotoc_md394", null ],
          [ "wmvcore.dll", "md__runtime_requirements_8page.html#autotoc_md395", null ],
          [ "msdmo.dll", "md__runtime_requirements_8page.html#autotoc_md396", null ]
        ] ],
        [ "macOS", "md__runtime_requirements_8page.html#autotoc_md397", null ],
        [ "Linux", "md__runtime_requirements_8page.html#autotoc_md398", [
          [ "Ubuntu", "md__runtime_requirements_8page.html#autotoc_md399", null ]
        ] ]
      ] ]
    ] ],
    [ "Transcoder Input/Output Model", "md__transcoder_i_o_8page.html", [
      [ "Transcoder Input/Output Requirements and Limitations", "md__transcoder_i_o_8page.html#t_io", [
        [ "Using file or stream as input", "md__transcoder_i_o_8page.html#t_input_stream", null ],
        [ "Using Transcoder push mode to provide input", "md__transcoder_i_o_8page.html#t_input_push", null ],
        [ "Using file or stream as output", "md__transcoder_i_o_8page.html#t_output_stream", null ],
        [ "Using Transcoder pull mode to get output", "md__transcoder_i_o_8page.html#t_output_pull", null ]
      ] ]
    ] ],
    [ "Using Transcoder.Push", "md__transcoder_push_8page.html", [
      [ "Common Steps", "md__transcoder_push_8page.html#using_transcoder_push_common_steps", null ],
      [ "JPEG", "md__transcoder_push_8page.html#using_transcoder_push_jpeg", [
        [ "1. Configure input MediaSocket, MediaPin, and VideoStreamInfo", "md__transcoder_push_8page.html#using_transcoder_push_jpeg__input", null ],
        [ "2. Configure output MediaSocket, MediaPin, and VideoStreamInfo", "md__transcoder_push_8page.html#using_transcoder_push_jpeg__output", null ],
        [ "3. Create a new MediaBuffer and attach the JPEG data to it", "md__transcoder_push_8page.html#using_transcoder_push_jpeg__buffer", null ],
        [ "4. Create a new MediaSample and set its buffer", "md__transcoder_push_8page.html#using_transcoder_push_jpeg__sample", null ],
        [ "5. Pass the sample to Transcoder.Push", "md__transcoder_push_8page.html#using_transcoder_push_jpeg__push", null ]
      ] ]
    ] ],
    [ "Known Limitations", "md__known_limitations_8page.html", null ],
    [ "Release Notes", "md__release_notes_8page.html", [
      [ "AVBlocks SDK for .NET", "md__release_notes_8page.html#autotoc_md402", [
        [ "OS Requirements", "md__release_notes_8page.html#autotoc_md403", null ],
        [ "Redistributable Components", "md__release_notes_8page.html#autotoc_md404", [
          [ "Windows", "md__release_notes_8page.html#autotoc_md405", null ],
          [ "macOS", "md__release_notes_8page.html#autotoc_md406", null ],
          [ "Linux", "md__release_notes_8page.html#autotoc_md407", null ]
        ] ]
      ] ],
      [ "Runtime Requirements", "md__release_notes_8page.html#autotoc_md408", [
        [ "Windows", "md__release_notes_8page.html#autotoc_md409", null ],
        [ "macOS", "md__release_notes_8page.html#autotoc_md410", null ],
        [ "Linux", "md__release_notes_8page.html#autotoc_md411", null ]
      ] ],
      [ "Demo Restrictions", "md__release_notes_8page.html#autotoc_md412", [
        [ "Release notes", "md__release_notes_8page.html#autotoc_md413", [
          [ "3.3.0 (21 Jan 2026)", "md__release_notes_8page.html#autotoc_md414", [
            [ "New", "md__release_notes_8page.html#autotoc_md415", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md416", null ],
            [ "Samples", "md__release_notes_8page.html#autotoc_md417", null ]
          ] ],
          [ "3.2.0 (21 Nov 2025)", "md__release_notes_8page.html#autotoc_md418", [
            [ "New", "md__release_notes_8page.html#autotoc_md419", null ]
          ] ],
          [ "3.1.0 (31 May 2025)", "md__release_notes_8page.html#autotoc_md420", [
            [ "New", "md__release_notes_8page.html#autotoc_md421", null ]
          ] ],
          [ "3.0.1 (07 May 2024)", "md__release_notes_8page.html#autotoc_md422", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md423", null ]
          ] ],
          [ "3.0.0 (02 Jul 2023)", "md__release_notes_8page.html#autotoc_md424", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md425", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md426", null ]
          ] ],
          [ "2.3.5 (13 Oct 2019)", "md__release_notes_8page.html#autotoc_md427", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md428", null ]
          ] ],
          [ "2.3.4 (20 Sep 2019)", "md__release_notes_8page.html#autotoc_md429", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md430", null ]
          ] ],
          [ "2.3.3 (02 Mar 2019)", "md__release_notes_8page.html#autotoc_md431", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md432", null ]
          ] ],
          [ "2.3.2 (31 Dec 2018)", "md__release_notes_8page.html#autotoc_md433", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md434", null ]
          ] ],
          [ "2.3.1 (03 Sep 2018)", "md__release_notes_8page.html#autotoc_md435", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md436", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md437", null ]
          ] ],
          [ "2.3.0 (12 Nov 2017)", "md__release_notes_8page.html#autotoc_md438", [
            [ "New", "md__release_notes_8page.html#autotoc_md439", null ]
          ] ],
          [ "2.2.1 (21 Jan 2017)", "md__release_notes_8page.html#autotoc_md440", [
            [ "New", "md__release_notes_8page.html#autotoc_md441", null ]
          ] ],
          [ "2.2.0 (08 Aug 2016)", "md__release_notes_8page.html#autotoc_md442", [
            [ "New", "md__release_notes_8page.html#autotoc_md443", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md444", null ]
          ] ],
          [ "2.1.0 (23 May 2016)", "md__release_notes_8page.html#autotoc_md445", [
            [ "New", "md__release_notes_8page.html#autotoc_md446", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md447", null ]
          ] ],
          [ "2.0.0 (15 Apr 2016)", "md__release_notes_8page.html#autotoc_md448", [
            [ "New", "md__release_notes_8page.html#autotoc_md449", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md450", null ]
          ] ],
          [ "1.26.0 (14 Mar 2016)", "md__release_notes_8page.html#autotoc_md451", [
            [ "New", "md__release_notes_8page.html#autotoc_md452", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md453", null ]
          ] ],
          [ "1.25.0 (20 Jan 2016)", "md__release_notes_8page.html#autotoc_md454", [
            [ "New", "md__release_notes_8page.html#autotoc_md455", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md456", null ]
          ] ],
          [ "1.24.0 (29 Dec 2015)", "md__release_notes_8page.html#autotoc_md457", [
            [ "New", "md__release_notes_8page.html#autotoc_md458", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md459", null ]
          ] ],
          [ "1.23.0 (13 Dec 2015)", "md__release_notes_8page.html#autotoc_md460", [
            [ "New", "md__release_notes_8page.html#autotoc_md461", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md462", null ]
          ] ],
          [ "1.22.0 (07 Nov 2015)", "md__release_notes_8page.html#autotoc_md463", [
            [ "New", "md__release_notes_8page.html#autotoc_md464", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md465", null ]
          ] ],
          [ "1.21.0 (29 Sep 2015)", "md__release_notes_8page.html#autotoc_md466", [
            [ "New", "md__release_notes_8page.html#autotoc_md467", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md468", null ]
          ] ],
          [ "1.20.0 (11 Jul 2015)", "md__release_notes_8page.html#autotoc_md469", [
            [ "New", "md__release_notes_8page.html#autotoc_md470", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md471", null ]
          ] ],
          [ "1.19.0 (25 May 2015)", "md__release_notes_8page.html#autotoc_md472", [
            [ "New", "md__release_notes_8page.html#autotoc_md473", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md474", null ]
          ] ],
          [ "1.18.0 (10 Apr 2015)", "md__release_notes_8page.html#autotoc_md475", [
            [ "New", "md__release_notes_8page.html#autotoc_md476", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md477", null ]
          ] ],
          [ "1.17.0 (14 Mar 2015)", "md__release_notes_8page.html#autotoc_md478", [
            [ "New", "md__release_notes_8page.html#autotoc_md479", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md480", null ]
          ] ],
          [ "1.16.0 (05 Feb 2015)", "md__release_notes_8page.html#autotoc_md481", [
            [ "New", "md__release_notes_8page.html#autotoc_md482", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md483", null ]
          ] ],
          [ "1.15.0 (09 Jan 2015)", "md__release_notes_8page.html#autotoc_md484", [
            [ "New", "md__release_notes_8page.html#autotoc_md485", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md486", null ]
          ] ],
          [ "1.14.0 (01 Nov 2014)", "md__release_notes_8page.html#autotoc_md487", [
            [ "New", "md__release_notes_8page.html#autotoc_md488", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md489", null ]
          ] ],
          [ "1.13.1 (11 Oct 2014)", "md__release_notes_8page.html#autotoc_md490", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md491", null ]
          ] ],
          [ "1.13.0 (04 Oct 2014)", "md__release_notes_8page.html#autotoc_md492", [
            [ "New", "md__release_notes_8page.html#autotoc_md493", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md494", null ]
          ] ],
          [ "1.12.0 (25 Aug 2014)", "md__release_notes_8page.html#autotoc_md495", [
            [ "New", "md__release_notes_8page.html#autotoc_md496", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md497", null ]
          ] ],
          [ "1.11.0 (25 Jun 2014)", "md__release_notes_8page.html#autotoc_md498", [
            [ "New", "md__release_notes_8page.html#autotoc_md499", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md500", null ]
          ] ],
          [ "1.10.0 (5 May 2014)", "md__release_notes_8page.html#autotoc_md501", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md502", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md503", null ]
          ] ],
          [ "1.9.0 (23 Mar 2014)", "md__release_notes_8page.html#autotoc_md504", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md505", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md506", null ]
          ] ],
          [ "1.8.1 (18 Jan 2014)", "md__release_notes_8page.html#autotoc_md507", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md508", null ]
          ] ],
          [ "1.8.0 (15 Dec 2013)", "md__release_notes_8page.html#autotoc_md509", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md510", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md511", null ]
          ] ],
          [ "1.7.0 (29 Nov 2013)", "md__release_notes_8page.html#autotoc_md512", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md513", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md514", null ]
          ] ],
          [ "1.6.1 (11 Oct 2013)", "md__release_notes_8page.html#autotoc_md515", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md516", null ]
          ] ],
          [ "1.6.0 (12 Sep 2013)", "md__release_notes_8page.html#autotoc_md517", [
            [ "Breaking Changes", "md__release_notes_8page.html#autotoc_md518", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md519", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md520", null ]
          ] ],
          [ "1.5.0 (16 Aug 2013)", "md__release_notes_8page.html#autotoc_md521", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md522", null ]
          ] ],
          [ "1.4.0 (4 July 2013)", "md__release_notes_8page.html#autotoc_md523", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md524", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md525", null ]
          ] ],
          [ "1.3.0 (16 June 2013)", "md__release_notes_8page.html#autotoc_md526", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md527", null ],
            [ "New", "md__release_notes_8page.html#autotoc_md528", null ]
          ] ],
          [ "1.2.1 (14 May 2013)", "md__release_notes_8page.html#autotoc_md529", [
            [ "Fix", "md__release_notes_8page.html#autotoc_md530", null ]
          ] ],
          [ "1.2.0  (30 Apr 2013)", "md__release_notes_8page.html#autotoc_md531", [
            [ "New", "md__release_notes_8page.html#autotoc_md532", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md533", null ]
          ] ],
          [ "1.1.0 (04 Jun 2012)", "md__release_notes_8page.html#autotoc_md534", [
            [ "New", "md__release_notes_8page.html#autotoc_md535", null ],
            [ "Fix", "md__release_notes_8page.html#autotoc_md536", null ]
          ] ],
          [ "1.0.1 (12 Dec 2011)", "md__release_notes_8page.html#autotoc_md537", null ]
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
"annotated.html",
"class_primo_software_1_1_a_v_blocks_1_1_media_socket.html#a600fe96e3ad19a4271db349563df1b38",
"class_primo_software_1_1_a_v_blocks_1_1_param_1_1_encoder_1_1_video_1_1_h264.html#a1902986e2024eb5180ff2fe4f113d863",
"class_primo_software_1_1_a_v_blocks_1_1_preset_1_1_video_1_1_apple_live_streaming.html#a254df951e03d840fe2f9eedee8f1947b",
"class_primo_software_1_1_a_v_blocks_1_1_transcoder.html#a98a3ac29a242879a55b1f34fbf64c0ce",
"md__release_notes_8page.html#autotoc_md490",
"namespace_primo_software_1_1_a_v_blocks.html#a50d6107d24ab539a2d51d608a8ee511e"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';