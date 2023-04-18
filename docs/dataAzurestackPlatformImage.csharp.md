# `data_azurestack_platform_image`

Refer to the Terraform Registory for docs: [`data_azurestack_platform_image`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image).

# `dataAzurestackPlatformImage` Submodule <a name="`dataAzurestackPlatformImage` Submodule" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackPlatformImage <a name="DataAzurestackPlatformImage" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image azurestack_platform_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackPlatformImage(Construct Scope, string Id, DataAzurestackPlatformImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig">DataAzurestackPlatformImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig">DataAzurestackPlatformImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurestackPlatformImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts">DataAzurestackPlatformImageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackPlatformImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackPlatformImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackPlatformImage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference">DataAzurestackPlatformImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.timeouts"></a>

```csharp
public DataAzurestackPlatformImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference">DataAzurestackPlatformImageTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackPlatformImageConfig <a name="DataAzurestackPlatformImageConfig" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackPlatformImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Offer,
    string Publisher,
    string Sku,
    string Id = null,
    DataAzurestackPlatformImageTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#location DataAzurestackPlatformImage#location}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#offer DataAzurestackPlatformImage#offer}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#publisher DataAzurestackPlatformImage#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#sku DataAzurestackPlatformImage#sku}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#id DataAzurestackPlatformImage#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts">DataAzurestackPlatformImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#version DataAzurestackPlatformImage#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#location DataAzurestackPlatformImage#location}.

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#offer DataAzurestackPlatformImage#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#publisher DataAzurestackPlatformImage#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#sku DataAzurestackPlatformImage#sku}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#id DataAzurestackPlatformImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.timeouts"></a>

```csharp
public DataAzurestackPlatformImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts">DataAzurestackPlatformImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#timeouts DataAzurestackPlatformImage#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#version DataAzurestackPlatformImage#version}.

---

### DataAzurestackPlatformImageTimeouts <a name="DataAzurestackPlatformImageTimeouts" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackPlatformImageTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#read DataAzurestackPlatformImage#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/platform_image#read DataAzurestackPlatformImage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackPlatformImageTimeoutsOutputReference <a name="DataAzurestackPlatformImageTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackPlatformImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackPlatformImage.DataAzurestackPlatformImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



