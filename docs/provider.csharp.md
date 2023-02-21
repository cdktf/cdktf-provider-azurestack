# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurestack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurestackProvider <a name="AzurestackProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack azurestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProvider(Construct Scope, string Id, AzurestackProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig">AzurestackProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig">AzurestackProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint">ResetArmEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds">ResetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId">ResetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost">ResetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint">ResetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration">ResetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetArmEndpoint` <a name="ResetArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint"></a>

```csharp
private void ResetArmEndpoint()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds"></a>

```csharp
private void ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath"></a>

```csharp
private void ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId"></a>

```csharp
private void ResetDisableCorrelationRequestId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost"></a>

```csharp
private void ResetMetadataHost()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint"></a>

```csharp
private void ResetMsiEndpoint()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration"></a>

```csharp
private void ResetSkipProviderRegistration()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi"></a>

```csharp
private void ResetUseMsi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

AzurestackProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

AzurestackProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

AzurestackProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput">ArmEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput">FeaturesInput</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput">UseMsiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint">ArmEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.features">Features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost">MetadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi">UseMsi</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ArmEndpointInput`<sup>Optional</sup> <a name="ArmEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput"></a>

```csharp
public string ArmEndpointInput { get; }
```

- *Type:* string

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput"></a>

```csharp
public string[] AuxiliaryTenantIdsInput { get; }
```

- *Type:* string[]

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput"></a>

```csharp
public string ClientCertificatePathInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput"></a>

```csharp
public object DisableCorrelationRequestIdInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput"></a>

```csharp
public AzurestackProviderFeatures FeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput"></a>

```csharp
public string MetadataHostInput { get; }
```

- *Type:* string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput"></a>

```csharp
public string MsiEndpointInput { get; }
```

- *Type:* string

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput"></a>

```csharp
public object SkipProviderRegistrationInput { get; }
```

- *Type:* object

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput"></a>

```csharp
public object UseMsiInput { get; }
```

- *Type:* object

---

##### `ArmEndpoint`<sup>Optional</sup> <a name="ArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint"></a>

```csharp
public string ArmEndpoint { get; }
```

- *Type:* string

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; }
```

- *Type:* string[]

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId"></a>

```csharp
public object DisableCorrelationRequestId { get; }
```

- *Type:* object

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.features"></a>

```csharp
public AzurestackProviderFeatures Features { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost"></a>

```csharp
public string MetadataHost { get; }
```

- *Type:* string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; }
```

- *Type:* string

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration"></a>

```csharp
public object SkipProviderRegistration { get; }
```

- *Type:* object

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi"></a>

```csharp
public object UseMsi { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurestackProviderConfig <a name="AzurestackProviderConfig" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProviderConfig {
    AzurestackProviderFeatures Features,
    string Alias = null,
    string ArmEndpoint = null,
    string[] AuxiliaryTenantIds = null,
    string ClientCertificatePassword = null,
    string ClientCertificatePath = null,
    string ClientId = null,
    string ClientSecret = null,
    object DisableCorrelationRequestId = null,
    string Environment = null,
    string MetadataHost = null,
    string MsiEndpoint = null,
    object SkipProviderRegistration = null,
    string SubscriptionId = null,
    string TenantId = null,
    object UseMsi = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features">Features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint">ArmEndpoint</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>object</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment">Environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>object</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi">UseMsi</a></code> | <code>object</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features"></a>

```csharp
public AzurestackProviderFeatures Features { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#features AzurestackProvider#features}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#alias AzurestackProvider#alias}

---

##### `ArmEndpoint`<sup>Optional</sup> <a name="ArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint"></a>

```csharp
public string ArmEndpoint { get; set; }
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; set; }
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_id AzurestackProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_secret AzurestackProvider#client_secret}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId"></a>

```csharp
public object DisableCorrelationRequestId { get; set; }
```

- *Type:* object

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#environment AzurestackProvider#environment}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost"></a>

```csharp
public string MetadataHost { get; set; }
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#metadata_host AzurestackProvider#metadata_host}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; set; }
```

- *Type:* string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration"></a>

```csharp
public object SkipProviderRegistration { get; set; }
```

- *Type:* object

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#subscription_id AzurestackProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#tenant_id AzurestackProvider#tenant_id}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi"></a>

```csharp
public object UseMsi { get; set; }
```

- *Type:* object

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#use_msi AzurestackProvider#use_msi}

---

### AzurestackProviderFeatures <a name="AzurestackProviderFeatures" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProviderFeatures {
    AzurestackProviderFeaturesResourceGroup ResourceGroup = null,
    AzurestackProviderFeaturesVirtualMachine VirtualMachine = null,
    AzurestackProviderFeaturesVirtualMachineScaleSet VirtualMachineScaleSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet">VirtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup"></a>

```csharp
public AzurestackProviderFeaturesResourceGroup ResourceGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#resource_group AzurestackProvider#resource_group}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine"></a>

```csharp
public AzurestackProviderFeaturesVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine AzurestackProvider#virtual_machine}

---

##### `VirtualMachineScaleSet`<sup>Optional</sup> <a name="VirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet"></a>

```csharp
public AzurestackProviderFeaturesVirtualMachineScaleSet VirtualMachineScaleSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}

---

### AzurestackProviderFeaturesResourceGroup <a name="AzurestackProviderFeaturesResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProviderFeaturesResourceGroup {
    object PreventDeletionIfContainsResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">PreventDeletionIfContainsResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}. |

---

##### `PreventDeletionIfContainsResources`<sup>Optional</sup> <a name="PreventDeletionIfContainsResources" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```csharp
public object PreventDeletionIfContainsResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}.

---

### AzurestackProviderFeaturesVirtualMachine <a name="AzurestackProviderFeaturesVirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProviderFeaturesVirtualMachine {
    object DeleteOsDiskOnDeletion = null,
    object GracefulShutdown = null,
    object SkipShutdownAndForceDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">DeleteOsDiskOnDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown">GracefulShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">SkipShutdownAndForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}. |

---

##### `DeleteOsDiskOnDeletion`<sup>Optional</sup> <a name="DeleteOsDiskOnDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```csharp
public object DeleteOsDiskOnDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```csharp
public object GracefulShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}.

---

##### `SkipShutdownAndForceDelete`<sup>Optional</sup> <a name="SkipShutdownAndForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```csharp
public object SkipShutdownAndForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}.

---

### AzurestackProviderFeaturesVirtualMachineScaleSet <a name="AzurestackProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new AzurestackProviderFeaturesVirtualMachineScaleSet {
    object RollInstancesWhenRequired,
    object ForceDelete = null,
    object ScaleToZeroBeforeDeletion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">RollInstancesWhenRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">ScaleToZeroBeforeDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}. |

---

##### `RollInstancesWhenRequired`<sup>Required</sup> <a name="RollInstancesWhenRequired" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```csharp
public object RollInstancesWhenRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}.

---

##### `ScaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="ScaleToZeroBeforeDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```csharp
public object ScaleToZeroBeforeDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}.

---



