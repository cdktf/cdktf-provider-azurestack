# `data_azurestack_image`

Refer to the Terraform Registory for docs: [`data_azurestack_image`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image).

# `dataAzurestackImage` Submodule <a name="`dataAzurestackImage` Submodule" id="@cdktf/provider-azurestack.dataAzurestackImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackImage <a name="DataAzurestackImage" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image azurestack_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImage;

DataAzurestackImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .sortDescending(java.lang.Boolean)
//  .sortDescending(IResolvable)
//  .timeouts(DataAzurestackImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#resource_group_name DataAzurestackImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#id DataAzurestackImage#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name DataAzurestackImage#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name_regex DataAzurestackImage#name_regex}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.sortDescending">sortDescending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#sort_descending DataAzurestackImage#sort_descending}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#resource_group_name DataAzurestackImage#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#id DataAzurestackImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name DataAzurestackImage#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name_regex DataAzurestackImage#name_regex}.

---

##### `sortDescending`<sup>Optional</sup> <a name="sortDescending" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.sortDescending"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#sort_descending DataAzurestackImage#sort_descending}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#timeouts DataAzurestackImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetSortDescending">resetSortDescending</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.putTimeouts"></a>

```java
public void putTimeouts(DataAzurestackImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetName"></a>

```java
public void resetName()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetSortDescending` <a name="resetSortDescending" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetSortDescending"></a>

```java
public void resetSortDescending()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImage;

DataAzurestackImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImage;

DataAzurestackImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImage;

DataAzurestackImage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.dataDisk">dataDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList">DataAzurestackImageDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList">DataAzurestackImageOsDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference">DataAzurestackImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.sortDescendingInput">sortDescendingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.sortDescending">sortDescending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataDisk`<sup>Required</sup> <a name="dataDisk" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.dataDisk"></a>

```java
public DataAzurestackImageDataDiskList getDataDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList">DataAzurestackImageDataDiskList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.osDisk"></a>

```java
public DataAzurestackImageOsDiskList getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList">DataAzurestackImageOsDiskList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.timeouts"></a>

```java
public DataAzurestackImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference">DataAzurestackImageTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sortDescendingInput`<sup>Optional</sup> <a name="sortDescendingInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.sortDescendingInput"></a>

```java
public java.lang.Object getSortDescendingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sortDescending`<sup>Required</sup> <a name="sortDescending" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.sortDescending"></a>

```java
public java.lang.Object getSortDescending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackImageConfig <a name="DataAzurestackImageConfig" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageConfig;

DataAzurestackImageConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .sortDescending(java.lang.Boolean)
//  .sortDescending(IResolvable)
//  .timeouts(DataAzurestackImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#resource_group_name DataAzurestackImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#id DataAzurestackImage#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name DataAzurestackImage#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name_regex DataAzurestackImage#name_regex}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.sortDescending">sortDescending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#sort_descending DataAzurestackImage#sort_descending}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#resource_group_name DataAzurestackImage#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#id DataAzurestackImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name DataAzurestackImage#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#name_regex DataAzurestackImage#name_regex}.

---

##### `sortDescending`<sup>Optional</sup> <a name="sortDescending" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.sortDescending"></a>

```java
public java.lang.Object getSortDescending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#sort_descending DataAzurestackImage#sort_descending}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageConfig.property.timeouts"></a>

```java
public DataAzurestackImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#timeouts DataAzurestackImage#timeouts}

---

### DataAzurestackImageDataDisk <a name="DataAzurestackImageDataDisk" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageDataDisk;

DataAzurestackImageDataDisk.builder()
    .build();
```


### DataAzurestackImageOsDisk <a name="DataAzurestackImageOsDisk" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageOsDisk;

DataAzurestackImageOsDisk.builder()
    .build();
```


### DataAzurestackImageTimeouts <a name="DataAzurestackImageTimeouts" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageTimeouts;

DataAzurestackImageTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#read DataAzurestackImage#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/image#read DataAzurestackImage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackImageDataDiskList <a name="DataAzurestackImageDataDiskList" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageDataDiskList;

new DataAzurestackImageDataDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.get"></a>

```java
public DataAzurestackImageDataDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackImageDataDiskOutputReference <a name="DataAzurestackImageDataDiskOutputReference" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageDataDiskOutputReference;

new DataAzurestackImageDataDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.blobUri">blobUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDisk">DataAzurestackImageDataDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blobUri`<sup>Required</sup> <a name="blobUri" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.blobUri"></a>

```java
public java.lang.String getBlobUri();
```

- *Type:* java.lang.String

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `managedDiskId`<sup>Required</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDiskOutputReference.property.internalValue"></a>

```java
public DataAzurestackImageDataDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageDataDisk">DataAzurestackImageDataDisk</a>

---


### DataAzurestackImageOsDiskList <a name="DataAzurestackImageOsDiskList" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageOsDiskList;

new DataAzurestackImageOsDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.get"></a>

```java
public DataAzurestackImageOsDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackImageOsDiskOutputReference <a name="DataAzurestackImageOsDiskOutputReference" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageOsDiskOutputReference;

new DataAzurestackImageOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.blobUri">blobUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.managedDiskId">managedDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.osState">osState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDisk">DataAzurestackImageOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blobUri`<sup>Required</sup> <a name="blobUri" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.blobUri"></a>

```java
public java.lang.String getBlobUri();
```

- *Type:* java.lang.String

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `managedDiskId`<sup>Required</sup> <a name="managedDiskId" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.managedDiskId"></a>

```java
public java.lang.String getManagedDiskId();
```

- *Type:* java.lang.String

---

##### `osState`<sup>Required</sup> <a name="osState" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.osState"></a>

```java
public java.lang.String getOsState();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDiskOutputReference.property.internalValue"></a>

```java
public DataAzurestackImageOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageOsDisk">DataAzurestackImageOsDisk</a>

---


### DataAzurestackImageTimeoutsOutputReference <a name="DataAzurestackImageTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_image.DataAzurestackImageTimeoutsOutputReference;

new DataAzurestackImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackImage.DataAzurestackImageTimeouts">DataAzurestackImageTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



