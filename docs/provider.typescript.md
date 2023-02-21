# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurestack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurestackProvider <a name="AzurestackProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack azurestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

new provider.AzurestackProvider(scope: Construct, id: string, config: AzurestackProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig">AzurestackProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig">AzurestackProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint">resetArmEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds">resetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId">resetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost">resetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint">resetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration">resetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetArmEndpoint` <a name="resetArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint"></a>

```typescript
public resetArmEndpoint(): void
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds"></a>

```typescript
public resetAuxiliaryTenantIds(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath"></a>

```typescript
public resetClientCertificatePath(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId"></a>

```typescript
public resetDisableCorrelationRequestId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost"></a>

```typescript
public resetMetadataHost(): void
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint"></a>

```typescript
public resetMsiEndpoint(): void
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration"></a>

```typescript
public resetSkipProviderRegistration(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi"></a>

```typescript
public resetUseMsi(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

provider.AzurestackProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

provider.AzurestackProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

provider.AzurestackProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput">armEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput">featuresInput</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput">useMsiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint">armEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost">metadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `armEndpointInput`<sup>Optional</sup> <a name="armEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput"></a>

```typescript
public readonly armEndpointInput: string;
```

- *Type:* string

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput"></a>

```typescript
public readonly auxiliaryTenantIdsInput: string[];
```

- *Type:* string[]

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput"></a>

```typescript
public readonly clientCertificatePathInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput"></a>

```typescript
public readonly disableCorrelationRequestIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput"></a>

```typescript
public readonly featuresInput: AzurestackProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput"></a>

```typescript
public readonly metadataHostInput: string;
```

- *Type:* string

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput"></a>

```typescript
public readonly msiEndpointInput: string;
```

- *Type:* string

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput"></a>

```typescript
public readonly skipProviderRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput"></a>

```typescript
public readonly useMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `armEndpoint`<sup>Optional</sup> <a name="armEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint"></a>

```typescript
public readonly armEndpoint: string;
```

- *Type:* string

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.features"></a>

```typescript
public readonly features: AzurestackProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurestackProviderConfig <a name="AzurestackProviderConfig" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

const azurestackProviderConfig: provider.AzurestackProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint">armEndpoint</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment">environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost">metadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features"></a>

```typescript
public readonly features: AzurestackProviderFeatures;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#features AzurestackProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#alias AzurestackProvider#alias}

---

##### `armEndpoint`<sup>Optional</sup> <a name="armEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint"></a>

```typescript
public readonly armEndpoint: string;
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_id AzurestackProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_secret AzurestackProvider#client_secret}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#environment AzurestackProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#metadata_host AzurestackProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#subscription_id AzurestackProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#tenant_id AzurestackProvider#tenant_id}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#use_msi AzurestackProvider#use_msi}

---

### AzurestackProviderFeatures <a name="AzurestackProviderFeatures" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

const azurestackProviderFeatures: provider.AzurestackProviderFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet">virtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: AzurestackProviderFeaturesResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#resource_group AzurestackProvider#resource_group}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: AzurestackProviderFeaturesVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine AzurestackProvider#virtual_machine}

---

##### `virtualMachineScaleSet`<sup>Optional</sup> <a name="virtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet"></a>

```typescript
public readonly virtualMachineScaleSet: AzurestackProviderFeaturesVirtualMachineScaleSet;
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}

---

### AzurestackProviderFeaturesResourceGroup <a name="AzurestackProviderFeaturesResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

const azurestackProviderFeaturesResourceGroup: provider.AzurestackProviderFeaturesResourceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">preventDeletionIfContainsResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}. |

---

##### `preventDeletionIfContainsResources`<sup>Optional</sup> <a name="preventDeletionIfContainsResources" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```typescript
public readonly preventDeletionIfContainsResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}.

---

### AzurestackProviderFeaturesVirtualMachine <a name="AzurestackProviderFeaturesVirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

const azurestackProviderFeaturesVirtualMachine: provider.AzurestackProviderFeaturesVirtualMachine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">deleteOsDiskOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown">gracefulShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skipShutdownAndForceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}. |

---

##### `deleteOsDiskOnDeletion`<sup>Optional</sup> <a name="deleteOsDiskOnDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```typescript
public readonly deleteOsDiskOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}.

---

##### `gracefulShutdown`<sup>Optional</sup> <a name="gracefulShutdown" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```typescript
public readonly gracefulShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}.

---

##### `skipShutdownAndForceDelete`<sup>Optional</sup> <a name="skipShutdownAndForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```typescript
public readonly skipShutdownAndForceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}.

---

### AzurestackProviderFeaturesVirtualMachineScaleSet <a name="AzurestackProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azurestack'

const azurestackProviderFeaturesVirtualMachineScaleSet: provider.AzurestackProviderFeaturesVirtualMachineScaleSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">rollInstancesWhenRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scaleToZeroBeforeDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}. |

---

##### `rollInstancesWhenRequired`<sup>Required</sup> <a name="rollInstancesWhenRequired" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```typescript
public readonly rollInstancesWhenRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}.

---

##### `scaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="scaleToZeroBeforeDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```typescript
public readonly scaleToZeroBeforeDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}.

---



