# `provider`

Refer to the Terraform Registory for docs: [`azurestack`](https://www.terraform.io/docs/providers/azurestack).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurestack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurestackProvider <a name="AzurestackProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack azurestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

provider.NewAzurestackProvider(scope Construct, id *string, config AzurestackProviderConfig) AzurestackProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig">AzurestackProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetArmEndpoint` <a name="ResetArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint"></a>

```go
func ResetArmEndpoint()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds"></a>

```go
func ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath"></a>

```go
func ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId"></a>

```go
func ResetDisableCorrelationRequestId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost"></a>

```go
func ResetMetadataHost()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint"></a>

```go
func ResetMsiEndpoint()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration"></a>

```go
func ResetSkipProviderRegistration()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi"></a>

```go
func ResetUseMsi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

provider.AzurestackProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

provider.AzurestackProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

provider.AzurestackProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput">ArmEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput">FeaturesInput</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput">UseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint">ArmEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.features">Features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ArmEndpointInput`<sup>Optional</sup> <a name="ArmEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput"></a>

```go
func ArmEndpointInput() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput"></a>

```go
func AuxiliaryTenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput"></a>

```go
func ClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput"></a>

```go
func DisableCorrelationRequestIdInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput"></a>

```go
func FeaturesInput() AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput"></a>

```go
func MetadataHostInput() *string
```

- *Type:* *string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput"></a>

```go
func MsiEndpointInput() *string
```

- *Type:* *string

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput"></a>

```go
func SkipProviderRegistrationInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput"></a>

```go
func UseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `ArmEndpoint`<sup>Optional</sup> <a name="ArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint"></a>

```go
func ArmEndpoint() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds"></a>

```go
func AuxiliaryTenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath"></a>

```go
func ClientCertificatePath() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId"></a>

```go
func DisableCorrelationRequestId() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.features"></a>

```go
func Features() AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost"></a>

```go
func MetadataHost() *string
```

- *Type:* *string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint"></a>

```go
func MsiEndpoint() *string
```

- *Type:* *string

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration"></a>

```go
func SkipProviderRegistration() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi"></a>

```go
func UseMsi() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurestackProviderConfig <a name="AzurestackProviderConfig" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

&provider.AzurestackProviderConfig {
	Features: github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4.provider.AzurestackProviderFeatures,
	Alias: *string,
	ArmEndpoint: *string,
	AuxiliaryTenantIds: *[]*string,
	ClientCertificatePassword: *string,
	ClientCertificatePath: *string,
	ClientId: *string,
	ClientSecret: *string,
	DisableCorrelationRequestId: interface{},
	Environment: *string,
	MetadataHost: *string,
	MsiEndpoint: *string,
	SkipProviderRegistration: interface{},
	SubscriptionId: *string,
	TenantId: *string,
	UseMsi: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features">Features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint">ArmEndpoint</a></code> | <code>*string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment">Environment</a></code> | <code>*string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features"></a>

```go
Features AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#features AzurestackProvider#features}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#alias AzurestackProvider#alias}

---

##### `ArmEndpoint`<sup>Optional</sup> <a name="ArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint"></a>

```go
ArmEndpoint *string
```

- *Type:* *string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds"></a>

```go
AuxiliaryTenantIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath"></a>

```go
ClientCertificatePath *string
```

- *Type:* *string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_id AzurestackProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_secret AzurestackProvider#client_secret}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId"></a>

```go
DisableCorrelationRequestId interface{}
```

- *Type:* interface{}

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#environment AzurestackProvider#environment}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost"></a>

```go
MetadataHost *string
```

- *Type:* *string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#metadata_host AzurestackProvider#metadata_host}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint"></a>

```go
MsiEndpoint *string
```

- *Type:* *string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration"></a>

```go
SkipProviderRegistration interface{}
```

- *Type:* interface{}

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#subscription_id AzurestackProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#tenant_id AzurestackProvider#tenant_id}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi"></a>

```go
UseMsi interface{}
```

- *Type:* interface{}

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#use_msi AzurestackProvider#use_msi}

---

### AzurestackProviderFeatures <a name="AzurestackProviderFeatures" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

&provider.AzurestackProviderFeatures {
	ResourceGroup: github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4.provider.AzurestackProviderFeaturesResourceGroup,
	VirtualMachine: github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4.provider.AzurestackProviderFeaturesVirtualMachine,
	VirtualMachineScaleSet: github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4.provider.AzurestackProviderFeaturesVirtualMachineScaleSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet">VirtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup"></a>

```go
ResourceGroup AzurestackProviderFeaturesResourceGroup
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#resource_group AzurestackProvider#resource_group}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine"></a>

```go
VirtualMachine AzurestackProviderFeaturesVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine AzurestackProvider#virtual_machine}

---

##### `VirtualMachineScaleSet`<sup>Optional</sup> <a name="VirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet"></a>

```go
VirtualMachineScaleSet AzurestackProviderFeaturesVirtualMachineScaleSet
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}

---

### AzurestackProviderFeaturesResourceGroup <a name="AzurestackProviderFeaturesResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

&provider.AzurestackProviderFeaturesResourceGroup {
	PreventDeletionIfContainsResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">PreventDeletionIfContainsResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}. |

---

##### `PreventDeletionIfContainsResources`<sup>Optional</sup> <a name="PreventDeletionIfContainsResources" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```go
PreventDeletionIfContainsResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}.

---

### AzurestackProviderFeaturesVirtualMachine <a name="AzurestackProviderFeaturesVirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

&provider.AzurestackProviderFeaturesVirtualMachine {
	DeleteOsDiskOnDeletion: interface{},
	GracefulShutdown: interface{},
	SkipShutdownAndForceDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">DeleteOsDiskOnDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown">GracefulShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">SkipShutdownAndForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}. |

---

##### `DeleteOsDiskOnDeletion`<sup>Optional</sup> <a name="DeleteOsDiskOnDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```go
DeleteOsDiskOnDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```go
GracefulShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}.

---

##### `SkipShutdownAndForceDelete`<sup>Optional</sup> <a name="SkipShutdownAndForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```go
SkipShutdownAndForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}.

---

### AzurestackProviderFeaturesVirtualMachineScaleSet <a name="AzurestackProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v4/provider"

&provider.AzurestackProviderFeaturesVirtualMachineScaleSet {
	RollInstancesWhenRequired: interface{},
	ForceDelete: interface{},
	ScaleToZeroBeforeDeletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">RollInstancesWhenRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">ScaleToZeroBeforeDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}. |

---

##### `RollInstancesWhenRequired`<sup>Required</sup> <a name="RollInstancesWhenRequired" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```go
RollInstancesWhenRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}.

---

##### `ScaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="ScaleToZeroBeforeDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```go
ScaleToZeroBeforeDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}.

---



