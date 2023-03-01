# `keyVault` Submodule <a name="`keyVault` Submodule" id="@cdktf/provider-azurestack.keyVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVault <a name="KeyVault" id="@cdktf/provider-azurestack.keyVault.KeyVault"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault azurestack_key_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.keyVault.KeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVault(Construct Scope, string Id, KeyVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig">KeyVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.keyVault.KeyVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig">KeyVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.putAccessPolicy">PutAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.putNetworkAcls">PutNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetAccessPolicy">ResetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForDeployment">ResetEnabledForDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForDiskEncryption">ResetEnabledForDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForTemplateDeployment">ResetEnabledForTemplateDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetEnableRbacAuthorization">ResetEnableRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetNetworkAcls">ResetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.keyVault.KeyVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.keyVault.KeyVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.keyVault.KeyVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.keyVault.KeyVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.keyVault.KeyVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.keyVault.KeyVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.keyVault.KeyVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.keyVault.KeyVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessPolicy` <a name="PutAccessPolicy" id="@cdktf/provider-azurestack.keyVault.KeyVault.putAccessPolicy"></a>

```csharp
private void PutAccessPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.keyVault.KeyVault.putAccessPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkAcls` <a name="PutNetworkAcls" id="@cdktf/provider-azurestack.keyVault.KeyVault.putNetworkAcls"></a>

```csharp
private void PutNetworkAcls(KeyVaultNetworkAcls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.keyVault.KeyVault.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.keyVault.KeyVault.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.keyVault.KeyVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

---

##### `ResetAccessPolicy` <a name="ResetAccessPolicy" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetAccessPolicy"></a>

```csharp
private void ResetAccessPolicy()
```

##### `ResetEnabledForDeployment` <a name="ResetEnabledForDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForDeployment"></a>

```csharp
private void ResetEnabledForDeployment()
```

##### `ResetEnabledForDiskEncryption` <a name="ResetEnabledForDiskEncryption" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForDiskEncryption"></a>

```csharp
private void ResetEnabledForDiskEncryption()
```

##### `ResetEnabledForTemplateDeployment` <a name="ResetEnabledForTemplateDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetEnabledForTemplateDeployment"></a>

```csharp
private void ResetEnabledForTemplateDeployment()
```

##### `ResetEnableRbacAuthorization` <a name="ResetEnableRbacAuthorization" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetEnableRbacAuthorization"></a>

```csharp
private void ResetEnableRbacAuthorization()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkAcls` <a name="ResetNetworkAcls" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetNetworkAcls"></a>

```csharp
private void ResetNetworkAcls()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.keyVault.KeyVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.keyVault.KeyVault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

KeyVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.keyVault.KeyVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

KeyVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

KeyVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.keyVault.KeyVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.accessPolicy">AccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.vaultUri">VaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDeploymentInput">EnabledForDeploymentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDiskEncryptionInput">EnabledForDiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForTemplateDeploymentInput">EnabledForTemplateDeploymentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enableRbacAuthorizationInput">EnableRbacAuthorizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.networkAclsInput">NetworkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDeployment">EnabledForDeployment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDiskEncryption">EnabledForDiskEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForTemplateDeployment">EnabledForTemplateDeployment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.enableRbacAuthorization">EnableRbacAuthorization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.accessPolicy"></a>

```csharp
public KeyVaultAccessPolicyList AccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a>

---

##### `NetworkAcls`<sup>Required</sup> <a name="NetworkAcls" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.networkAcls"></a>

```csharp
public KeyVaultNetworkAclsOutputReference NetworkAcls { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.timeouts"></a>

```csharp
public KeyVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a>

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.vaultUri"></a>

```csharp
public string VaultUri { get; }
```

- *Type:* string

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.accessPolicyInput"></a>

```csharp
public object AccessPolicyInput { get; }
```

- *Type:* object

---

##### `EnabledForDeploymentInput`<sup>Optional</sup> <a name="EnabledForDeploymentInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDeploymentInput"></a>

```csharp
public object EnabledForDeploymentInput { get; }
```

- *Type:* object

---

##### `EnabledForDiskEncryptionInput`<sup>Optional</sup> <a name="EnabledForDiskEncryptionInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDiskEncryptionInput"></a>

```csharp
public object EnabledForDiskEncryptionInput { get; }
```

- *Type:* object

---

##### `EnabledForTemplateDeploymentInput`<sup>Optional</sup> <a name="EnabledForTemplateDeploymentInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForTemplateDeploymentInput"></a>

```csharp
public object EnabledForTemplateDeploymentInput { get; }
```

- *Type:* object

---

##### `EnableRbacAuthorizationInput`<sup>Optional</sup> <a name="EnableRbacAuthorizationInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enableRbacAuthorizationInput"></a>

```csharp
public object EnableRbacAuthorizationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAclsInput`<sup>Optional</sup> <a name="NetworkAclsInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.networkAclsInput"></a>

```csharp
public KeyVaultNetworkAcls NetworkAclsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnabledForDeployment`<sup>Required</sup> <a name="EnabledForDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDeployment"></a>

```csharp
public object EnabledForDeployment { get; }
```

- *Type:* object

---

##### `EnabledForDiskEncryption`<sup>Required</sup> <a name="EnabledForDiskEncryption" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForDiskEncryption"></a>

```csharp
public object EnabledForDiskEncryption { get; }
```

- *Type:* object

---

##### `EnabledForTemplateDeployment`<sup>Required</sup> <a name="EnabledForTemplateDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enabledForTemplateDeployment"></a>

```csharp
public object EnabledForTemplateDeployment { get; }
```

- *Type:* object

---

##### `EnableRbacAuthorization`<sup>Required</sup> <a name="EnableRbacAuthorization" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.enableRbacAuthorization"></a>

```csharp
public object EnableRbacAuthorization { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.keyVault.KeyVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicy <a name="KeyVaultAccessPolicy" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultAccessPolicy {
    string ApplicationId = null,
    string[] CertificatePermissions = null,
    string[] KeyPermissions = null,
    string ObjectId = null,
    string[] SecretPermissions = null,
    string[] StoragePermissions = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#application_id KeyVault#application_id}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.certificatePermissions">CertificatePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#certificate_permissions KeyVault#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.keyPermissions">KeyPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#key_permissions KeyVault#key_permissions}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#object_id KeyVault#object_id}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.secretPermissions">SecretPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#secret_permissions KeyVault#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.storagePermissions">StoragePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#storage_permissions KeyVault#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tenant_id KeyVault#tenant_id}. |

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#application_id KeyVault#application_id}.

---

##### `CertificatePermissions`<sup>Optional</sup> <a name="CertificatePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.certificatePermissions"></a>

```csharp
public string[] CertificatePermissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#certificate_permissions KeyVault#certificate_permissions}.

---

##### `KeyPermissions`<sup>Optional</sup> <a name="KeyPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.keyPermissions"></a>

```csharp
public string[] KeyPermissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#key_permissions KeyVault#key_permissions}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#object_id KeyVault#object_id}.

---

##### `SecretPermissions`<sup>Optional</sup> <a name="SecretPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.secretPermissions"></a>

```csharp
public string[] SecretPermissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#secret_permissions KeyVault#secret_permissions}.

---

##### `StoragePermissions`<sup>Optional</sup> <a name="StoragePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.storagePermissions"></a>

```csharp
public string[] StoragePermissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#storage_permissions KeyVault#storage_permissions}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicy.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tenant_id KeyVault#tenant_id}.

---

### KeyVaultConfig <a name="KeyVaultConfig" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    string TenantId,
    object AccessPolicy = null,
    object EnabledForDeployment = null,
    object EnabledForDiskEncryption = null,
    object EnabledForTemplateDeployment = null,
    object EnableRbacAuthorization = null,
    string Id = null,
    KeyVaultNetworkAcls NetworkAcls = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KeyVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#location KeyVault#location}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#resource_group_name KeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#sku_name KeyVault#sku_name}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tenant_id KeyVault#tenant_id}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.accessPolicy">AccessPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#access_policy KeyVault#access_policy}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForDeployment">EnabledForDeployment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForDiskEncryption">EnabledForDiskEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment">EnabledForTemplateDeployment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enableRbacAuthorization">EnableRbacAuthorization</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#id KeyVault#id}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tags KeyVault#tags}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#location KeyVault#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#name KeyVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#resource_group_name KeyVault#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#sku_name KeyVault#sku_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tenant_id KeyVault#tenant_id}.

---

##### `AccessPolicy`<sup>Optional</sup> <a name="AccessPolicy" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.accessPolicy"></a>

```csharp
public object AccessPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#access_policy KeyVault#access_policy}.

---

##### `EnabledForDeployment`<sup>Optional</sup> <a name="EnabledForDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForDeployment"></a>

```csharp
public object EnabledForDeployment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}.

---

##### `EnabledForDiskEncryption`<sup>Optional</sup> <a name="EnabledForDiskEncryption" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForDiskEncryption"></a>

```csharp
public object EnabledForDiskEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}.

---

##### `EnabledForTemplateDeployment`<sup>Optional</sup> <a name="EnabledForTemplateDeployment" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment"></a>

```csharp
public object EnabledForTemplateDeployment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}.

---

##### `EnableRbacAuthorization`<sup>Optional</sup> <a name="EnableRbacAuthorization" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.enableRbacAuthorization"></a>

```csharp
public object EnableRbacAuthorization { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#id KeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkAcls`<sup>Optional</sup> <a name="NetworkAcls" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.networkAcls"></a>

```csharp
public KeyVaultNetworkAcls NetworkAcls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#network_acls KeyVault#network_acls}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#tags KeyVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.keyVault.KeyVaultConfig.property.timeouts"></a>

```csharp
public KeyVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#timeouts KeyVault#timeouts}

---

### KeyVaultNetworkAcls <a name="KeyVaultNetworkAcls" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultNetworkAcls {
    string Bypass,
    string DefaultAction,
    string[] IpRules = null,
    string[] VirtualNetworkSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.bypass">Bypass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#bypass KeyVault#bypass}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#default_action KeyVault#default_action}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.ipRules">IpRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#ip_rules KeyVault#ip_rules}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}. |

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.bypass"></a>

```csharp
public string Bypass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#bypass KeyVault#bypass}.

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#default_action KeyVault#default_action}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.ipRules"></a>

```csharp
public string[] IpRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#ip_rules KeyVault#ip_rules}.

---

##### `VirtualNetworkSubnetIds`<sup>Optional</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}.

---

### KeyVaultTimeouts <a name="KeyVaultTimeouts" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#create KeyVault#create}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#delete KeyVault#delete}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#read KeyVault#read}. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#update KeyVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#create KeyVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#delete KeyVault#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#read KeyVault#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/key_vault#update KeyVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyList <a name="KeyVaultAccessPolicyList" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultAccessPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.get"></a>

```csharp
private KeyVaultAccessPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultAccessPolicyOutputReference <a name="KeyVaultAccessPolicyOutputReference" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions">ResetCertificatePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions">ResetKeyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions">ResetSecretPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions">ResetStoragePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetCertificatePermissions` <a name="ResetCertificatePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions"></a>

```csharp
private void ResetCertificatePermissions()
```

##### `ResetKeyPermissions` <a name="ResetKeyPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions"></a>

```csharp
private void ResetKeyPermissions()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId"></a>

```csharp
private void ResetObjectId()
```

##### `ResetSecretPermissions` <a name="ResetSecretPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions"></a>

```csharp
private void ResetSecretPermissions()
```

##### `ResetStoragePermissions` <a name="ResetStoragePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions"></a>

```csharp
private void ResetStoragePermissions()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput">CertificatePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput">KeyPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput">SecretPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput">StoragePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions">CertificatePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions">KeyPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions">SecretPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions">StoragePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `CertificatePermissionsInput`<sup>Optional</sup> <a name="CertificatePermissionsInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput"></a>

```csharp
public string[] CertificatePermissionsInput { get; }
```

- *Type:* string[]

---

##### `KeyPermissionsInput`<sup>Optional</sup> <a name="KeyPermissionsInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput"></a>

```csharp
public string[] KeyPermissionsInput { get; }
```

- *Type:* string[]

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `SecretPermissionsInput`<sup>Optional</sup> <a name="SecretPermissionsInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput"></a>

```csharp
public string[] SecretPermissionsInput { get; }
```

- *Type:* string[]

---

##### `StoragePermissionsInput`<sup>Optional</sup> <a name="StoragePermissionsInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput"></a>

```csharp
public string[] StoragePermissionsInput { get; }
```

- *Type:* string[]

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `CertificatePermissions`<sup>Required</sup> <a name="CertificatePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions"></a>

```csharp
public string[] CertificatePermissions { get; }
```

- *Type:* string[]

---

##### `KeyPermissions`<sup>Required</sup> <a name="KeyPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions"></a>

```csharp
public string[] KeyPermissions { get; }
```

- *Type:* string[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `SecretPermissions`<sup>Required</sup> <a name="SecretPermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions"></a>

```csharp
public string[] SecretPermissions { get; }
```

- *Type:* string[]

---

##### `StoragePermissions`<sup>Required</sup> <a name="StoragePermissions" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions"></a>

```csharp
public string[] StoragePermissions { get; }
```

- *Type:* string[]

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultNetworkAclsOutputReference <a name="KeyVaultNetworkAclsOutputReference" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultNetworkAclsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds">ResetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules"></a>

```csharp
private void ResetIpRules()
```

##### `ResetVirtualNetworkSubnetIds` <a name="ResetVirtualNetworkSubnetIds" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds"></a>

```csharp
private void ResetVirtualNetworkSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput">BypassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass">Bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules">IpRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput"></a>

```csharp
public string BypassInput { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput"></a>

```csharp
public string[] IpRulesInput { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```csharp
public string[] VirtualNetworkSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass"></a>

```csharp
public string Bypass { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules"></a>

```csharp
public string[] IpRules { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue"></a>

```csharp
public KeyVaultNetworkAcls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---


### KeyVaultTimeoutsOutputReference <a name="KeyVaultTimeoutsOutputReference" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new KeyVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


