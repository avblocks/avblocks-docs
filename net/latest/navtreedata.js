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
        [ "Linux", "_runtime_requirements.html#autotoc_md398", [
          [ "Ubuntu", "_runtime_requirements.html#autotoc_md399", null ]
        ] ]
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
      [ "AVBlocks SDK for .NET", "_release_notes.html#autotoc_md403", [
        [ "OS Requirements", "_release_notes.html#autotoc_md404", null ],
        [ "Redistributable Components", "_release_notes.html#autotoc_md405", [
          [ "Windows", "_release_notes.html#autotoc_md406", null ],
          [ "macOS", "_release_notes.html#autotoc_md407", null ],
          [ "Linux", "_release_notes.html#autotoc_md408", null ]
        ] ]
      ] ],
      [ "Runtime Requirements", "_release_notes.html#autotoc_md409", [
        [ "Windows", "_release_notes.html#autotoc_md410", null ],
        [ "macOS", "_release_notes.html#autotoc_md411", null ],
        [ "Linux", "_release_notes.html#autotoc_md412", null ]
      ] ],
      [ "Demo Restrictions", "_release_notes.html#autotoc_md413", [
        [ "Release notes", "_release_notes.html#autotoc_md414", [
          [ "3.4.0 (30 Sep 2026)", "_release_notes.html#autotoc_md415", [
            [ "New", "_release_notes.html#autotoc_md416", null ],
            [ "Fix", "_release_notes.html#autotoc_md417", null ]
          ] ],
          [ "3.3.0 (21 Jan 2026)", "_release_notes.html#autotoc_md418", [
            [ "New", "_release_notes.html#autotoc_md419", null ],
            [ "Fix", "_release_notes.html#autotoc_md420", null ],
            [ "Samples", "_release_notes.html#autotoc_md421", null ]
          ] ],
          [ "3.2.0 (21 Nov 2025)", "_release_notes.html#autotoc_md422", [
            [ "New", "_release_notes.html#autotoc_md423", null ]
          ] ],
          [ "3.1.0 (31 May 2025)", "_release_notes.html#autotoc_md424", [
            [ "New", "_release_notes.html#autotoc_md425", [
              [ "API", "_release_notes.html#autotoc_md426", null ]
            ] ]
          ] ],
          [ "3.0.1 (07 May 2024)", "_release_notes.html#autotoc_md427", [
            [ "Fix", "_release_notes.html#autotoc_md428", null ]
          ] ],
          [ "3.0.0 (02 Jul 2023)", "_release_notes.html#autotoc_md429", [
            [ "Fix", "_release_notes.html#autotoc_md430", null ],
            [ "New", "_release_notes.html#autotoc_md431", [
              [ "API", "_release_notes.html#autotoc_md432", null ],
              [ "Samples", "_release_notes.html#autotoc_md433", null ],
              [ "Docs", "_release_notes.html#autotoc_md434", null ]
            ] ]
          ] ],
          [ "2.3.5 (13 Oct 2019)", "_release_notes.html#autotoc_md435", [
            [ "Fix", "_release_notes.html#autotoc_md436", null ]
          ] ],
          [ "2.3.4 (20 Sep 2019)", "_release_notes.html#autotoc_md437", [
            [ "Fix", "_release_notes.html#autotoc_md438", null ]
          ] ],
          [ "2.3.3 (02 Mar 2019)", "_release_notes.html#autotoc_md439", [
            [ "Fix", "_release_notes.html#autotoc_md440", null ]
          ] ],
          [ "2.3.2 (31 Dec 2018)", "_release_notes.html#autotoc_md441", [
            [ "Fix", "_release_notes.html#autotoc_md442", null ]
          ] ],
          [ "2.3.1 (03 Sep 2018)", "_release_notes.html#autotoc_md443", [
            [ "Fix", "_release_notes.html#autotoc_md444", null ],
            [ "New", "_release_notes.html#autotoc_md445", null ]
          ] ],
          [ "2.3.0 (12 Nov 2017)", "_release_notes.html#autotoc_md446", [
            [ "New", "_release_notes.html#autotoc_md447", null ]
          ] ],
          [ "2.2.1 (21 Jan 2017)", "_release_notes.html#autotoc_md448", [
            [ "New", "_release_notes.html#autotoc_md449", null ]
          ] ],
          [ "2.2.0 (08 Aug 2016)", "_release_notes.html#autotoc_md450", [
            [ "New", "_release_notes.html#autotoc_md451", null ],
            [ "Fix", "_release_notes.html#autotoc_md452", null ]
          ] ],
          [ "2.1.0 (23 May 2016)", "_release_notes.html#autotoc_md453", [
            [ "New", "_release_notes.html#autotoc_md454", null ],
            [ "Fix", "_release_notes.html#autotoc_md455", null ]
          ] ],
          [ "2.0.0 (15 Apr 2016)", "_release_notes.html#autotoc_md456", [
            [ "New", "_release_notes.html#autotoc_md457", null ],
            [ "Fix", "_release_notes.html#autotoc_md458", null ]
          ] ],
          [ "1.26.0 (14 Mar 2016)", "_release_notes.html#autotoc_md459", [
            [ "New", "_release_notes.html#autotoc_md460", null ],
            [ "Fix", "_release_notes.html#autotoc_md461", null ]
          ] ],
          [ "1.25.0 (20 Jan 2016)", "_release_notes.html#autotoc_md462", [
            [ "New", "_release_notes.html#autotoc_md463", null ],
            [ "Fix", "_release_notes.html#autotoc_md464", null ]
          ] ],
          [ "1.24.0 (29 Dec 2015)", "_release_notes.html#autotoc_md465", [
            [ "New", "_release_notes.html#autotoc_md466", null ],
            [ "Fix", "_release_notes.html#autotoc_md467", null ]
          ] ],
          [ "1.23.0 (13 Dec 2015)", "_release_notes.html#autotoc_md468", [
            [ "New", "_release_notes.html#autotoc_md469", null ],
            [ "Fix", "_release_notes.html#autotoc_md470", null ]
          ] ],
          [ "1.22.0 (07 Nov 2015)", "_release_notes.html#autotoc_md471", [
            [ "New", "_release_notes.html#autotoc_md472", null ],
            [ "Fix", "_release_notes.html#autotoc_md473", null ]
          ] ],
          [ "1.21.0 (29 Sep 2015)", "_release_notes.html#autotoc_md474", [
            [ "New", "_release_notes.html#autotoc_md475", null ],
            [ "Fix", "_release_notes.html#autotoc_md476", null ]
          ] ],
          [ "1.20.0 (11 Jul 2015)", "_release_notes.html#autotoc_md477", [
            [ "New", "_release_notes.html#autotoc_md478", null ],
            [ "Fix", "_release_notes.html#autotoc_md479", null ]
          ] ],
          [ "1.19.0 (25 May 2015)", "_release_notes.html#autotoc_md480", [
            [ "New", "_release_notes.html#autotoc_md481", null ],
            [ "Fix", "_release_notes.html#autotoc_md482", null ]
          ] ],
          [ "1.18.0 (10 Apr 2015)", "_release_notes.html#autotoc_md483", [
            [ "New", "_release_notes.html#autotoc_md484", null ],
            [ "Fix", "_release_notes.html#autotoc_md485", null ]
          ] ],
          [ "1.17.0 (14 Mar 2015)", "_release_notes.html#autotoc_md486", [
            [ "New", "_release_notes.html#autotoc_md487", null ],
            [ "Fix", "_release_notes.html#autotoc_md488", null ]
          ] ],
          [ "1.16.0 (05 Feb 2015)", "_release_notes.html#autotoc_md489", [
            [ "New", "_release_notes.html#autotoc_md490", null ],
            [ "Fix", "_release_notes.html#autotoc_md491", null ]
          ] ],
          [ "1.15.0 (09 Jan 2015)", "_release_notes.html#autotoc_md492", [
            [ "New", "_release_notes.html#autotoc_md493", null ],
            [ "Fix", "_release_notes.html#autotoc_md494", null ]
          ] ],
          [ "1.14.0 (01 Nov 2014)", "_release_notes.html#autotoc_md495", [
            [ "New", "_release_notes.html#autotoc_md496", null ],
            [ "Fix", "_release_notes.html#autotoc_md497", null ]
          ] ],
          [ "1.13.1 (11 Oct 2014)", "_release_notes.html#autotoc_md498", [
            [ "Fix", "_release_notes.html#autotoc_md499", null ]
          ] ],
          [ "1.13.0 (04 Oct 2014)", "_release_notes.html#autotoc_md500", [
            [ "New", "_release_notes.html#autotoc_md501", null ],
            [ "New", "_release_notes.html#autotoc_md502", null ]
          ] ],
          [ "1.12.0 (25 Aug 2014)", "_release_notes.html#autotoc_md503", [
            [ "New", "_release_notes.html#autotoc_md504", null ],
            [ "Fix", "_release_notes.html#autotoc_md505", null ]
          ] ],
          [ "1.11.0 (25 Jun 2014)", "_release_notes.html#autotoc_md506", [
            [ "New", "_release_notes.html#autotoc_md507", null ],
            [ "Fix", "_release_notes.html#autotoc_md508", null ]
          ] ],
          [ "1.10.0 (5 May 2014)", "_release_notes.html#autotoc_md509", [
            [ "Fix", "_release_notes.html#autotoc_md510", null ],
            [ "New", "_release_notes.html#autotoc_md511", null ]
          ] ],
          [ "1.9.0 (23 Mar 2014)", "_release_notes.html#autotoc_md512", [
            [ "Fix", "_release_notes.html#autotoc_md513", null ],
            [ "New", "_release_notes.html#autotoc_md514", null ]
          ] ],
          [ "1.8.1 (18 Jan 2014)", "_release_notes.html#autotoc_md515", [
            [ "Fix", "_release_notes.html#autotoc_md516", null ]
          ] ],
          [ "1.8.0 (15 Dec 2013)", "_release_notes.html#autotoc_md517", [
            [ "Fix", "_release_notes.html#autotoc_md518", null ],
            [ "New", "_release_notes.html#autotoc_md519", null ]
          ] ],
          [ "1.7.0 (29 Nov 2013)", "_release_notes.html#autotoc_md520", [
            [ "Fix", "_release_notes.html#autotoc_md521", null ],
            [ "New", "_release_notes.html#autotoc_md522", null ]
          ] ],
          [ "1.6.1 (11 Oct 2013)", "_release_notes.html#autotoc_md523", [
            [ "Fix", "_release_notes.html#autotoc_md524", null ]
          ] ],
          [ "1.6.0 (12 Sep 2013)", "_release_notes.html#autotoc_md525", [
            [ "Breaking Changes", "_release_notes.html#autotoc_md526", null ],
            [ "New", "_release_notes.html#autotoc_md527", null ],
            [ "Fix", "_release_notes.html#autotoc_md528", null ]
          ] ],
          [ "1.5.0 (16 Aug 2013)", "_release_notes.html#autotoc_md529", [
            [ "Fix", "_release_notes.html#autotoc_md530", null ]
          ] ],
          [ "1.4.0 (4 July 2013)", "_release_notes.html#autotoc_md531", [
            [ "Fix", "_release_notes.html#autotoc_md532", null ],
            [ "New", "_release_notes.html#autotoc_md533", null ]
          ] ],
          [ "1.3.0 (16 June 2013)", "_release_notes.html#autotoc_md534", [
            [ "Fix", "_release_notes.html#autotoc_md535", null ],
            [ "New", "_release_notes.html#autotoc_md536", null ]
          ] ],
          [ "1.2.1 (14 May 2013)", "_release_notes.html#autotoc_md537", [
            [ "Fix", "_release_notes.html#autotoc_md538", null ]
          ] ],
          [ "1.2.0 (30 Apr 2013)", "_release_notes.html#autotoc_md539", [
            [ "New", "_release_notes.html#autotoc_md540", null ],
            [ "Fix", "_release_notes.html#autotoc_md541", null ]
          ] ],
          [ "1.1.0 (04 Jun 2012)", "_release_notes.html#autotoc_md542", [
            [ "New", "_release_notes.html#autotoc_md543", null ],
            [ "Fix", "_release_notes.html#autotoc_md544", null ]
          ] ],
          [ "1.0.1 (12 Dec 2011)", "_release_notes.html#autotoc_md545", null ]
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
"class_primo_software_1_1_a_v_blocks_1_1_library.html",
"class_primo_software_1_1_a_v_blocks_1_1_meta.html#ada28f772346cfcdfbfa66dae2fa8de9b",
"class_primo_software_1_1_a_v_blocks_1_1_param_1_1_video_1_1_deinterlacing.html",
"class_primo_software_1_1_a_v_blocks_1_1_preset_1_1_video_1_1_generic_1_1_m_p4.html#aa3fa637ae84d7353e7eca7fca08853e9",
"class_primo_software_1_1_a_v_blocks_1_1_video_stream_info.html#a522ae592c2667a7802d959ad6e56edf0",
"namespace_primo_software_1_1_a_v_blocks.html#a4f37629f775549c508f4c5625ae348b3add7536794b63bf90eccfd37f9b147d7f"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';