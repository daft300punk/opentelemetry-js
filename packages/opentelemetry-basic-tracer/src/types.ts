/**
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ScopeManager } from '@opentelemetry/scope-base';
import {
  Attributes,
  BinaryFormat,
  HttpTextFormat,
  Logger,
  Sampler,
} from '@opentelemetry/types';

/**
 * BasicTracerConfig provides an interface for configuring a Basic Tracer.
 */
export interface BasicTracerConfig {
  /**
   * Binary formatter which can serialize/deserialize Spans.
   */
  binaryFormat?: BinaryFormat;

  /**
   * Attributed that will be applied on every span created by Tracer.
   * Useful to add infrastructure and environment information to your spans.
   */
  defaultAttributes?: Attributes;

  /**
   * HTTP text formatter which can inject/extract Spans.
   */
  httpTextFormat?: HttpTextFormat;

  /**
   * User provided logger.
   */
  logger?: Logger;

  /**
   * Sampler determines if a span should be recorded or should be a NoopSpan.
   */
  sampler?: Sampler;

  /**
   * Scope manager keeps context across in-process operations.
   */
  scopeManager: ScopeManager;
}
